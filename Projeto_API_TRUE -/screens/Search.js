import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  Keyboard,
  StatusBar,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
} from "react-native";
import { SearchBar, Dialog, ListItem, Avatar } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { List } from "react-native-paper";
import Tipos from "./data/tiposEmpresa.json";
import { Button } from "react-native-paper";
import axios from "axios";

const windowWidth = Dimensions.get("window").width;

const Search = (props) => {

  const [_query, setQuery] = useState("")
  const [_isKeyboardOpen, setIsKeyboardOpen] = useState(false)
  const [_empresas,setEmpresas] = useState([])
  const [_tipoEmpresa, setTipoEmpresa] = useState("")
  const [_expandedTipos, setExpandedTipos] = useState(false)
  const [_isLoading,setIsLoading] = useState(false)
  

  const getAuthInfo = async () => {
    const accessToken = await AsyncStorage.getItem("@accessToken");
    const uid = await AsyncStorage.getItem("@uid");
    const client = await AsyncStorage.getItem("@client");
    return {
      accessToken: accessToken,
      uid: uid,
      client: client,
    };
  };

  const fetchData = () => {
    setIsLoading(true)
    getAuthInfo().then((res) => {
      let url =
        _tipoEmpresa.length == 0 && _query.length == 0
          ? `https://empresas.ioasys.com.br/api/v1/enterprises`
          : `https://empresas.ioasys.com.br/api/v1/enterprises?enterprise_types=${_tipoEmpresa}&name=${_query}`;
      axios
        .get(url, {
          headers: {
            "access-token": res.accessToken,
            uid: res.uid,
            client: res.client,
          },
        })
        .then((response) => {
          setEmpresas(response.data.enterprises);
          setIsLoading(false)
        });
    });
  };
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setIsKeyboardOpen(true);
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setIsKeyboardOpen(false);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);

  useEffect(() => {
    fetchData();
  }, [_query, _tipoEmpresa]);

  return (
    <>
      <View style={{ marginTop: "5.5%" }}>
        <SearchBar
          onIconPress={() => {
            setQuery("");
          }}
          placeholder="Digite aqui..."
          onChangeText={(val) => {
            setQuery(val);
          }}
          value={_query}
        />
      </View>
      <View>
        <List.Accordion
          title="Selecione um tipo de empresa"
          expanded={_expandedTipos}
          onPress={() => {
            setExpandedTipos(!_expandedTipos);
          }}
        >
          <ScrollView>
            {Tipos.map((e, idx) => (
              <List.Item
                onPress={() => {
                  setTipoEmpresa(e.id);
                  setExpandedTipos(false);
                }}
                title={e.enterprise_type_name}
                key={e.id}
              />
            ))}
          </ScrollView>
        </List.Accordion>
        <Button 
          onPress={() => {
            setTipoEmpresa("");
          }}
        >
          Limpar filtro
        </Button>
        {_isLoading && (
          <View style={[styles.container, styles.horizontal]}>
            <ActivityIndicator size="large" color="#8951ec" />
          </View>
        )}
        {!_isLoading && (
          <ScrollView>
            {_empresas.map((e, idx) => (
              <ListItem key={idx} onPress={() => {

                props.navigation.push("Enterprise",{
                  country:e.country,
                  city:e.city,
                  description:e.description,
                  enterprise_name:e.enterprise_name,
                  photo: "https://empresas.ioasys.com.br/" + e.photo 
                })

              }} bottomDivider={true}>
                <Avatar
                  size={"medium"}
                  rounded={true}
                  title={e.enterprise_name}
                  source={{ uri: "https://empresas.ioasys.com.br/" + e.photo }}
                />
                <ListItem.Chevron />
                <ListItem.Content>
                  <ListItem.Title>{e.enterprise_name}</ListItem.Title>
                  <ListItem.Subtitle>{e.city}</ListItem.Subtitle>
                  <ListItem.Subtitle>{e.country}</ListItem.Subtitle>
                </ListItem.Content>
              </ListItem>
            ))}
          </ScrollView>
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop:"50%",
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
export default Search;
