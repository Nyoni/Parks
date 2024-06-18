import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {AssetImage} from '../../components'

const Successful = () => {

    const hotel =  {
        "_id": "64c674d23cfa5e847bcd5430",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Zambezi Lodges",
        "imageUrl": "https://www.zimparks.org.zw/wp-content/uploads/2024/03/zambezilodges.jpg",
        "rating": 4.9,
        "review": "1204 Reviews",
        "location": "Zambezi National Park"
    }

  return (
    <View>
        <View style={{marginTop: "40%"}}>

            <Image
            source={require('../../assets/images/checked.png')}
            style={styles.image}
            />

        </View>
    </View>
  )
}

export default Successful

const styles = StyleSheet.create({

    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',

    }
})
