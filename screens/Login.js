import React, { useState, useEffect } from "react";
import Constants from "./../constants";
import Assets from "./../assets";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  StatusBar,
  Image,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Button, Paragraph, TextInput } from "react-native-paper";
import axios from "axios";
import { KeyboardAvoidingView } from "react-native";
import { Keyboard } from "react-native";
import { Dialog } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Login = (props) => {
  const [_email, setEmail] = useState("");
  const [_senha, setSenha] = useState("");
  const [_isComputing, setIsComputing] = useState(false);
  const [_isLoading, setIsLoading] = useState(false);
  const [_mostrarSenha, setMostrarSenha] = useState(false);
  const [_isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [_isErrored, setIsErrored] = useState(false);

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

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View
        style={{
          ...styles.inner,
          marginBottom: _isKeyboardOpen ? "2%" : "29%",
        }}
      >
        {!_isKeyboardOpen && (
          <Image style={styles.stretch} source={Assets.Splash} />
        )}
        <View style={styles.textInputGroup}>
          <TextInput
            theme={{ colors: { primary: Constants.Colors.buttonColor } }}
            style={{ ...styles.textInput }}
            label="E-mail"
            value={_email}
            onChangeText={(txt) => {
              setEmail(txt);
            }}
            left={<TextInput.Icon name="email" />}
          />
          <TextInput
            theme={{ colors: { primary: Constants.Colors.buttonColor } }}
            style={{ ...styles.textInput, marginTop: "10%" }}
            label="Senha"
            value={_senha}
            onChangeText={(txt) => {
              setSenha(txt);
            }}
            right={
              <TextInput.Icon
                onPress={() => {
                  setMostrarSenha(!_mostrarSenha);
                }}
                size={28}
                name={_mostrarSenha ? "eye-outline" : "eye-off-outline"}
              />
            }
            left={<TextInput.Icon name="lock-outline" />}
            secureTextEntry={!_mostrarSenha}
          />
          <View style={{ marginTop: "3%" }}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.push("Register");
              }}
              style={{
                position: "absolute",
                right: "4%",
                fontSize: 16,
                borderBottomWidth: 1,
                borderBottomColor: Constants.Colors.buttonColor,
                color: Constants.Colors.buttonColor,
              }}
            >
              {/* -------------POSSIVEL FUNCIONALIDADE DE NÃO TER UM CONTA/REGISTRAR--------------
              <Paragraph style={{ color: Constants.Colors.buttonColor }}>
                Não tenho uma conta
              </Paragraph> */}
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                position: "absolute",
                left: "5%",
                fontSize: 16,
                borderBottomWidth: 1,
                borderBottomColor: Constants.Colors.buttonColor,
                color: Constants.Colors.buttonColor,
              }}
            >
              {/* -------------POSSIVEL FUNCIONALIDADE DE ESQUECI MINHA SENHA--------------
              <Paragraph style={{ color: Constants.Colors.buttonColor }}>
                Esqueci minha senha
              </Paragraph> */}
            </TouchableOpacity>
          </View>
          <Button
            onPress={() => {
              setIsErrored(false);
              setIsComputing(true);
              setIsLoading(true);
              axios
                .post(
                  "https://empresas.ioasys.com.br/api/v1/users/auth/sign_in",
                  {
                    email: _email,
                    password: _senha,
                  },
                  {
                    headers: {
                      "Content-Type": "application/json",
                    },
                  }
                )
                .then(async (res) => {
                  setIsComputing(false);
                  await AsyncStorage.setItem("@accessToken",res.headers["access-token"])
                  await AsyncStorage.setItem("@uid",res.headers["uid"])
                  await AsyncStorage.setItem("@client",res.headers["client"])
                  props.navigation.push("Search")
                })
                .catch((err) => {
                  setIsLoading(false);
                  setIsErrored(true);
                });
            }}
            labelStyle={{ color: Constants.Colors.backgroundColor, top: "1%" }}
            style={{ marginTop: "17%", width: "60%", height: "13%" }}
            theme={{ colors: { primary: Constants.Colors.buttonColor } }}
            mode="contained"
          >
            Entrar
          </Button>
          <Dialog isVisible={_isComputing}>
            {_isLoading && <Dialog.Loading />}
            {_isErrored && (
              <View style={{ alignSelf: "center" }}>
                <Text>Nenhum usúario foi encontrado!</Text>
                <Dialog.Actions>
                  <Dialog.Button
                    style={{ alignSelf: "center" }}
                    title="Okay"
                    onPress={() => {
                      setIsComputing(false);
                      setIsErrored(false);
                    }}
                  />
                </Dialog.Actions>
              </View>
            )}
          </Dialog>
        </View>
      </View>
      <StatusBar translucent backgroundColor={"#000000"} />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Constants.Colors.backgroundColor,
    height: windowHeight,
  },
  inner: {
    flex: 1,
    justifyContent: "space-around",
  },
  stretch: {
    width: 260,
    height: 260,
    resizeMode: "stretch",
    top: "5%",
    alignSelf: "center",
  },
  textInputGroup: {
    width: windowWidth,
    alignItems: "center",
    padding: "2%",
    marginTop: "4%",
  },
  textInput: {
    width: "90%",
  },
});

export default Login;
