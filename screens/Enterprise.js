import React from 'react'
import {Card,Icon,PricingCard,Rating,Avatar,ListItem,Overlay} from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from "axios"
import {Provider as PaperProvider,List,Paragraph,Title,Colors,IconButton,Surface,Button} from 'react-native-paper'
import {
  FlatList,
  Image,
  ImageBackground,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Alert,
  TouchableHighlight,
  StatusBar
} from 'react-native'

const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Enterprise = (props)=>{

  const renderHeader = (country,city) => (
    <View style={styles.headerContainer}>
      <ImageBackground
        style={styles.headerBackgroundImage}
        blurRadius={10}
        source={{uri:"https://i.imgur.com/rXVcgTZ.jpg"}}
      >
      <TouchableHighlight style={{top:"10%",borderRadius:50,left:"2%",width:"10%",backgroundColor:"#595c5a"}}>
        <IconButton
          icon="arrow-left-bold"
          color={Colors.white}
          size={20}
          onPress={() => {
              props.navigation.goBack()
          }}
        />
        </TouchableHighlight>
        <View style={styles.headerColumn}>
          <Image
            style={styles.userImage}
            source={{uri:props.route.params.photo}}
          />
          <Text style={styles.userNameText}>{props.route.params.enterprise_name}</Text>
          <View style={styles.userAddressRow}>
            <View>
              <Icon
                name="place"
                underlayColor="transparent"
                iconStyle={styles.placeIcon}
              />
            </View>
            <View style={styles.userCityRow}>
              <Text style={styles.userCityText}>
                    {country+", "+city}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Card containerStyle={styles.cardContainer}>
            <>
              {
                renderHeader(props.route.params.country,props.route.params.city)
              }  
            </>
        </Card>
      </View>
      <View style={styles.description}>
        <Text style={{fontSize:18}}>
            {props.route.params.description}
        </Text>
      </View>
    </ScrollView>
  )

}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF',
    borderWidth: 0,
    flex: 1,
    margin: 0,
    padding: 0,
  },
  container: {
    flex: 1,
  },
  emailContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  headerBackgroundImage: {
    paddingBottom: 20,
    paddingTop: 10,
  },
  headerContainer: {},
  headerColumn: {
    backgroundColor: 'transparent',
    ...Platform.select({
      ios: {
        alignItems: 'center',
        elevation: 1,
        marginTop: -1,
      },
      android: {
        alignItems: 'center',
      },
    }),
  },
  placeIcon: {
    color: 'white',
    fontSize: 26,
  },
  scroll: {
    backgroundColor: '#FFF',
  },
  telContainer: {
    backgroundColor: '#FFF',
    flex: 1,
    paddingTop: 30,
  },
  userAddressRow: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  userCityRow: {
    backgroundColor: 'transparent',
  },
  userCityText: {
    color: '#A5A5A5',
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
  },
  userImage: {
    borderColor: '#FFF',
    borderRadius: 85,
    borderWidth: 3,
    height: 170,
    marginBottom: 15,
    width: 170,
  },
  userNameText: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
    textAlign: 'center',
  },
  description: {
    justifyContent:"center",
    flexDirection:"row",
    alignSelf:"flex-start",
    paddingTop:  StatusBar.currentHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    width:windowWidth
  }
})

export default Enterprise
