import { View, Text, TextInput, TouchableOpacity, Image, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import reusable from '../../components/Reusable/reusable.style'
import styles from './search.styles'
 import {Feather}from '@expo/vector-icons'
import { COLORS } from '../../constants/theme'
import { HeightSpacer } from '../../components'
import ReusableTile from '../../components/Reusable/ReusableTile'
import HotelCard from '../../components/Tiles/Country/Hotels/HotelCard'
import AppBar from '../../components/Reusable/AppBar'

const HotelSearch = ({navigation}) => {
  
  const [searchKey, setSearchKey] = useState('')
  const [searchResult, setSearchResult] = useState([])

  const hotels =  [
    {
        "_id": "64c674d23cfa5e847bcd5430",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Zambezi Park Lodges",
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
    <SafeAreaView>
      <View style = {{height: 50}}>
      <AppBar 
      top={20}
      left={20}
      right={20}
      title={'Search for Accomodation'} 
      color={COLORS.white} 
      icon={'filter'}
      color1={COLORS.white} 
      onPress={() => navigation.goBack()}
      onPress1={() => {}}
    />
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.input}
            value={searchKey}
            onChangeText={setSearchKey}
            placeholder='Search'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}>
          <Feather 
          name='search'
          size={24}
          color={COLORS.white}/>

        </TouchableOpacity>

      </View>

      {hotels.length === 0 ? (
        <View>
          <HeightSpacer height={'20%'}/>
          <Image
          source={require('../../assets/images/search.png')} 
          style={styles.searchImage}/>
        </View>
      ): (
        <View style={{paddingLeft:10}}>
          <FlatList
          data={hotels}
          keyExtractor={(item)=>item._id}
          numColumns={2}
          ItemSeparatorComponent={()=> (<View style={{height: 16}}/> )}
          renderItem={({item})=>(

              <HotelCard item={item} 
              margin={10}
              onPress = {()=>navigation.navigate('Hotelists', item._id)}/>

          )}  
        />
        </View>
      )}
      
    </SafeAreaView>
  )
}

export default HotelSearch
