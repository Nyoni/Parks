import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AppBar from '../../components/Reusable/AppBar'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import styles from './HotelDetails.styles'
import { DescriptionText, HeightSpacer, HotelMap, NetworkImage, ReusableText } from '../../components'
import reusable from '../../components/Reusable/reusable.style'
import {Rating} from 'react-native-stock-star-rating'
import {Feather} from '@expo/vector-icons'


const HotelDetails = () => {
  const hotel = {
    "availability": {
        "start": "2023-08-20T00:00:00.000Z",
        "end": "2023-08-25T00:00:00.000Z"
    },
    "_id": "64c674d23cfa5e847bcd5430",
    "country_id": "64c62bfc65af9f8c969a8d04",
    "title": "Zambezi Lodges",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mauris sit amet massa vitae tortor condimentum lacinia quis. Elit ut aliquam purus sit amet luctus. Nunc mi ipsum faucibus vitae aliquet. Et magnis dis parturient montes nascetur ridiculus mus mauris. Vel fringilla est ullamcorper eget nulla facilisi.",
    "contact": "64c5d95adc7efae2a45ec376",
    "imageUrl": "https://www.zimparks.org.zw/wp-content/uploads/2024/03/zambezilodges.jpg",
    "rating": 4.9,
    "review": "1204 Reviews",
    "location": "Zambezi National Park",
    "coordinates": {
      "latitude": 37.7749,
      "longitude": -122.4194,
    },
    "price": 80,
    "facilities": [
        {
            "wifi": true,
            "_id": "64c675793cfa5e847bcd5437"
        }
    ],
    "__v": 0,

    "reviews": [
      {
        "_id": "64d38ff59af9119acfab0ece",
        "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "rating": 4.6,
        "user": {
          "_id": "64c5d95adc7efae2a45ec376",
          "username": "John Doe",
          "profile": "https://www.zimparks.org.zw/wp-content/uploads/2024/03/zambezilodges.jpg",
        },
        "updateAt": "2023-08-09T13:09:09.200Z"
      },

      {
        "_id": "64d38ff59af9119acfab0ece",
        "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "rating": 4.6,
        "user": {
          "_id": "64c5d95adc7efae2a45ec376",
          "username": "John Doe",
          "profile": "https://www.zimparks.org.zw/wp-content/uploads/2024/03/zambezilodges.jpg",
        },
        "updateAt": "2023-08-09T13:09:09.200Z"
      },
    ]
}

let coordinates = {
  id: hotel._id,
  title: hotel.title,
  latitude: hotel.coordinates.latitude,
  longitude: hotel.coordinates.longitude,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01
}
  return (
<ScrollView>
  <View style={{height: 80}}>

    <AppBar 
        top={50}
        left={20}
        right={20}
        title={"Title"} 
        color={COLORS.white} 
        icon={'search1'}
        color1={COLORS.white} 
        onPress={() => navigation.goBack()}
        onPress1={() => {}}
      />

  </View>

  <View style={styles.container}>
      <NetworkImage
        source={hotel.imageUrl}
        width={"100%"}
        height={280}
        radius={25}
      />

    <View style={styles.titleContainer}>

      <View style={styles.titleColumn}>
        <ReusableText
              text={hotel.title}
              family={'medium'}
              size={SIZES.xLarge}
              color={COLORS.black}
            />

        <HeightSpacer height={10}/>

        <ReusableText
              text={hotel.location}
              family={'medium'}
              size={SIZES.medium}
              color={COLORS.black}
            />
        <View style={reusable.rowWithSpace('space-between')}>
          <Rating     
            maxStars={5}
            stars={hotel.rating}
            bordered={false}
            color={'#fd9942'}
          />

          <ReusableText
              text={hotel.review}
              family={'medium'}
              size={SIZES.medium}
              color={COLORS.gray}
            />

        </View>
      </View>
    </View>

   <View style={[styles.container, {paddingTop: 90}]}>
      <ReusableText
              text={"Description"}
              family={'medium'}
              size={SIZES.large}
              color={COLORS.black}
            />

      <HeightSpacer height={10}/>

      <DescriptionText text= {hotel.description}/>

      <HeightSpacer height={10}/>

      <ReusableText
              text={"Location"}
              family={'medium'}
              size={SIZES.large}
              color={COLORS.black}
            />

      <HeightSpacer height={15}/>

      <ReusableText
              text={hotel.location}
              family={'medium'}
              size={SIZES.small+2}
              color={COLORS.gray}
            />

            <HotelMap coordinates={coordinates}/>

            <View style={reusable.rowWithSpace('space-between')}>
              <ReusableText
                text={"Reviews"}
                family={'medium'}
                size={SIZES.large}
                color={COLORS.black}
              />

              <TouchableOpacity>
                <Feather name='list' size={20}/>
              </TouchableOpacity>
            </View>


    </View> 
  </View>
</ScrollView>
  )
}

export default HotelDetails
