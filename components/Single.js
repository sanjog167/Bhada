import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler';
import tw from 'tailwind-react-native-classnames';
import { ArrowLeftIcon } from 'react-native-heroicons/outline';

const Single = () => {

  const navigation = useNavigation();

  useLayoutEffect(() =>{
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const {
    params: {
      curElem,
    }
  } = useRoute();
    

  return (
    <ScrollView>
    <View style={tw`relative`}>
    <Image source={{ uri: curElem.thumbnail_image }} style={tw`h-60 w-full rounded`}/>
    <TouchableOpacity onPress={navigation.goBack} style={tw`absolute top-14 p-2 bg-gray-100 rounded-full left-5`}>
      <ArrowLeftIcon size={15} color="#000" />
    </TouchableOpacity>
    </View>
    <View style={tw`px-4`}>
    <Text>{curElem.address}</Text>
    </View>
    </ScrollView>

  )
}

export default Single