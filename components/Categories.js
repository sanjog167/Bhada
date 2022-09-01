import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CategoryCard from './CategoryCard'
import tw from 'tailwind-react-native-classnames';

const Categories = () => {
  return (
    <ScrollView contentContainerStyle={{ paddingTop: 10,}} horizontal showsHorizontalScrollIndicator={false}>
      <CategoryCard imgUrl="https://www.bhojdeals.com/uploads/restaurants/6095451811f5cba9f5f256bd484fb142.jpg?w=225&h=160&fit=crop" title="Cake1"/>
      <CategoryCard imgUrl="https://www.bhojdeals.com/uploads/restaurants/8ea090a33f11decd3e42b2aa25dc74dc.JPG?w=225&h=160&fit=crop" title="Cake2"/>
      <CategoryCard imgUrl="https://www.bhojdeals.com/uploads/restaurants/eafa75222c7cd0a8c095e0ffc8adc63b.jpg?w=225&h=160&fit=crop" title="Cake3"/>
      <CategoryCard imgUrl="https://www.bhojdeals.com/uploads/restaurants/eafa75222c7cd0a8c095e0ffc8adc63b.jpg?w=225&h=160&fit=crop" title="Cake3"/>
      <CategoryCard imgUrl="https://www.bhojdeals.com/uploads/restaurants/eafa75222c7cd0a8c095e0ffc8adc63b.jpg?w=225&h=160&fit=crop" title="Cake3"/>
      <CategoryCard imgUrl="https://www.bhojdeals.com/uploads/restaurants/eafa75222c7cd0a8c095e0ffc8adc63b.jpg?w=225&h=160&fit=crop" title="Cake3"/>
      <CategoryCard imgUrl="https://www.bhojdeals.com/uploads/restaurants/eafa75222c7cd0a8c095e0ffc8adc63b.jpg?w=225&h=160&fit=crop" title="Cake3"/>
      <CategoryCard imgUrl="https://www.bhojdeals.com/uploads/restaurants/eafa75222c7cd0a8c095e0ffc8adc63b.jpg?w=225&h=160&fit=crop" title="Cake3"/>

    </ScrollView>
  )
}

export default Categories