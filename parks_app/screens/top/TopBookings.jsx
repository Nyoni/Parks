import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ReusableTile from '../../components/Reusable/ReusableTile'
import { COLORS } from '../../constants/theme'
import reusable from '../../components/Reusable/reusable.style'

const TopBookings = () => {

  const hotels =  [
    {
        "_id": "64c674d23cfa5e847bcd5430",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Zambezi Lodges",
        "imageUrl": "https://www.zimparks.org.zw/wp-content/uploads/2024/03/zambezilodges.jpg",
        "rating": 4.9,
        "review": "1204 Reviews",
        "location": "Zambezi National Park"
    },
    {
        "_id": "64c675183cfa5e847bcd5433",
        "country_id": "64cf2d095d14628d0ac0a2bd",
        "title": "Mare Lodge",
        "imageUrl": "https://www.zimparks.org.zw/wp-content/uploads/2024/03/Nyanga-Mare-Lodge.jpg",
        "rating": 4.5,
        "review": "12024 Reviews",
        "location": "Nyanga National Park"
    },
    {
        "_id": "64d0b5a4d3cb4985a76ac1aa",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Chipinda Pools",
        "imageUrl": "https://www.zimparks.org.zw/wp-content/uploads/2024/03/Masasani-Room-1.jpg",
        "rating": 4.7,
        "review": "1204 Reviews",
        "location": "Gonarezhou National Park"
    },

]

  return (
    <View style={{margin: 20}}>

      <FlatList 
        data={hotels}
        showVerticalScrollIndicator={false}
        keyExtractor={(item)=> item._id}
        renderItem={({item})=> (
          <View style={{backgroundColor: COLORS.white, marginBottom: 10, borderRadius: 16}}>
            <ReusableTile item={item}/>

            <View style={reusable.rowWithSpace('space-between')}>

            </View>
          </View>
        )}

      />

    </View>
  )
}

export default TopBookings

const styles = StyleSheet.create({})