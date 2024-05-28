import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import reusable from '../Reusable/reusable.style'
import ReusableText from '../Reusable/ReusableText'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import HotelCard from '../Tiles/Country/Hotels/HotelCard'

const BestHotels = () => {
    const navigation = useNavigation();

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
    <View>
    <View style={[reusable.rowWithSpace('space-between'), {paddingBottom: 20}]}>
        <ReusableText
            text={' Nearby Accomodation '}
            family={'medium'}
            size={TEXT.large}
            color={COLORS.black}
          />

          <TouchableOpacity 
            onPress={() => navigation.navigate ('Hotelists')}>

            <Feather
            name='list'
            size={20}
            />
          </TouchableOpacity>

    </View>

    <FlatList
    
        data={hotels}
        horizontal
        keyExtractor={(item) => item._id}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle= {{columnGap: SIZES.medium}}
        renderItem={({item}) => (
            <HotelCard item={item} margin={10} onPress={() => navigation.navigate('HotelDetails')}/>
        ) } 
        />

    </View>
  )
}

export default BestHotels

const styles = StyleSheet.create({})