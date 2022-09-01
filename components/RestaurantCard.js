import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { StarIcon } from 'react-native-heroicons/solid';

const RestaurantCard = ({id,imgUrl,title,rating,genre,address,short_desciption}) => {
  return (
    <TouchableOpacity style={tw`mr-2`}>
      <Image source={{uri:imgUrl}} style={tw`h-40 w-40 rounded`}/>
      <Text style={tw`font-bold text-lg pt-2`}>{title}</Text>
      <View style={tw`flex-row items-center`}>
        <StarIcon color="green" opacity={0.5} size={15} />
        <Text style={tw`text-gray-500 text-xs`}>{rating} . {genre}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard