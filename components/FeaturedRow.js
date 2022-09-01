import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ArrowRightIcon, StarIcon } from 'react-native-heroicons/outline'
import tw from 'tailwind-react-native-classnames';
import RestaurantCard from './RestaurantCard';
import { useNavigation } from '@react-navigation/native';


const FeaturedRow = () => {

  const navigation = useNavigation(); 

  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch('https://bhada.com.np/api/v2/products/featured');
    const data = await response.json();
    setUsers(data?.data || []);
  }

  console.log(users?.data);

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <View>
      <View style={tw`flex-row items-center mt-3`}>
        <Text style={tw`font-bold text-lg flex-1`}>zsds</Text>
        <ArrowRightIcon size={25} color="#00CCBB"/>
      </View>
      <Text style={tw`text-xs text-gray-500`}>asd</Text>
      
      <ScrollView contentContainerStyle={{ paddingTop: 10,}} horizontal showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      {
        users.map((curElem) => {
          return(
            <TouchableOpacity style={tw`mr-2`} onPress={() => navigation.navigate('single',{curElem})}
            >
             <Image source={{ uri: curElem.thumbnail_image }} style={tw`h-60 w-60 rounded`}/> 
            <Text style={tw`font-bold text-lg pt-2 w-48`}>{curElem.name}</Text>
            <View style={tw`flex-row items-center`}>
              <StarIcon color="green" opacity={0.5} size={15} />
              <Text style={tw`text-gray-500 text-xs w-48`}>{curElem.name}</Text> 
            </View>
            <Text style={tw`text-gray-500 text-xs `}>{curElem.main_price}</Text> 
            <Text style={tw`text-gray-500 text-xs `}>{curElem.address}</Text> 
          </TouchableOpacity>
          )
        })
      }

      </ScrollView>

    </View>
  )
}

export default FeaturedRow