import { useState } from "react";
import { View  , ScrollView , SafeAreaView , Text} from "react-native";
import { Stack ,useRouter } from "expo-router";
import {images, icons, COLORS, FONT, SIZES, SHADOWS} from '../constants'
import {Nearbyjobs, Popularjobs, ScreenHeaderBtn , Welcome} from '../components'
import { Colors } from "react-native/Libraries/NewAppScreen";
const Home =()=>{
    const router = useRouter()

    return (
        <SafeAreaView style={{flex:1 , backgroundColor : COLORS.lightWhite}}>
            <Stack.Screen
            options={{headerStyle : {
                backgroundColor : COLORS.lightWhite
            }}}/>

        </SafeAreaView>
    )
}
export default Home