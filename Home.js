import { View, Text, SafeAreaView, StyleSheet, StatusBar, Image, TextInput, ScrollView  } from 'react-native'
import React, { useEffect, useLayoutEffect } from 'react'
import tw from 'tailwind-react-native-classnames';
import { AdjustmentsVerticalIcon, ChevronDownIcon, SearchIcon, UserIcon  } from "react-native-heroicons/outline";
import Categories from './components/Categories';
import FeaturedRow from './components/FeaturedRow';
import { 
  Rubik_300Light,
  Rubik_300Light_Italic,
  Rubik_400Regular,
  Rubik_400Regular_Italic,
  Rubik_500Medium,
  Rubik_500Medium_Italic,
  Rubik_700Bold,
  Rubik_700Bold_Italic,
  Rubik_900Black,
  Rubik_900Black_Italic 
} from '@expo-google-fonts/rubik'
import {useFonts} from "expo-font"
import AppLoading from 'expo-app-loading';
import { useNavigation } from '@react-navigation/native';

const Home = () => {

  const navigation = useNavigation();

  useLayoutEffect(() =>{
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
    

  let [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_300Light_Italic,
    Rubik_400Regular,
    Rubik_400Regular_Italic,
    Rubik_500Medium,
    Rubik_500Medium_Italic,
    Rubik_700Bold,
    Rubik_700Bold_Italic,
    Rubik_900Black,
    Rubik_900Black_Italic ,
  });



  return (
    <SafeAreaView style={styles.container}>
      <View style={tw`p-4 `}>
      <View style={tw`flex-row items-center `}>
      <View style={tw` flex-row items-center flex-1`}>
        <Image source={{
          uri: 'https://links.papareact.com/wru'
        }} style={tw`h-7 w-7 bg-gray-300 p-4 mr-3 rounded-full`} />
        <View>
          <Text style={tw`font-bold text-gray-500 text-xs`}>Deliver Now!</Text>
          <Text style={tw`font-bold text-lg flex-row`}>Current Location
          <ChevronDownIcon size={20} color="#00CCBB"/>
          </Text>
        </View>
      </View>
      <View>
      <UserIcon size={35} color="#00CCBB"/>
      </View>
      </View>

      {/* Search */}
      <View style={tw`flex-row items-center mt-3`}>
        <View style={tw`flex-1 bg-gray-200 p-1`}>
        {/* <SearchIcon /> */}
        <TextInput placeholder='Restaurants and cuisines'/>
        </View>
        <AdjustmentsVerticalIcon size={25} color="#00CCBB"/>
      </View>

      {/* Body */}
      <ScrollView style={tw`mt-3`}>
        <Categories />
        <FeaturedRow id="1" title="Featured" description="Paid placements from our partners" featuredCategory="Featured" />
      
      </ScrollView>



      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#fff",
      marginTop:StatusBar.currentHeight,
      
  },
  main: {
    backgroundColor: "#fff",
},
});




export default Home