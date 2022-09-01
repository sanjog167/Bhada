import { View, Text, TouchableOpacity, Image } from 'react-native'
import tw from 'tailwind-react-native-classnames';
import React from 'react'

const CategoryCard = ({imgUrl,title}) => {
  return (
    <TouchableOpacity style={tw`mr-2 relative`}>
      <Image source={{uri:imgUrl}} style={tw`h-20 w-20 rounded`}/>
      <Text style={tw`absolute bottom-1 text-white left-2`}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard