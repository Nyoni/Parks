import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Reviewtile from '../Tiles/Reviews/Reviewtile'

const ReviewsList = () => {
  return (
    <FlatList
    data={reviews}
    scrollEnabled={false}
    showsVerticalScrollIndicator={false}
    keyExtractor={(item)}
    renderItem={({item})=>(
      <Reviewtile review={item}/>
    )}/>
  )
}

export default ReviewsList

const styles = StyleSheet.create({})