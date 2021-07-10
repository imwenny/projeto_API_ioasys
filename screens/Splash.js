import React from "react"
import AppLoading from "expo-app-loading"
import {View} from "react-native"
import Constants from "./../constants"

const Splash=() =>{

    const [isLoaded, setIsLoaded]= React.useState(false)

    if (!isLoaded){

        return (
            <View style={{backgroundColor:Constants.Colors}}>
                <AppLoading/>
            </View>
        )

    }

    else {

        const resetAction = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Home' })
            ]
        });

        props.navigation.dispatch(resetAction);
        return(<View></View>)

    }

}
export default Splash;
