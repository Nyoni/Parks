import { StyleSheet, Text, FlatList } from 'react-native'
import React from 'react'
import Slides from '../../components/Onboard/Slides'

const Onboarding = () => {
    /* Create an Array of Object */
    const slides = [
        {
            id: 1,
            image: require('../../assets/images/1.png'),
            title: "Find the perfect place to stay"
        },
        {
            id: 2,
            image: require('../../assets/images/2.png'),
            title: "Visit Our Parks"
        },
        {
            id: 3,
            image: require('../../assets/images/3.png'),
            title: "Discover fun Activities"
        },
    ]
  return (
    <FlatList
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        data={slides}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <Slides item={item}/>}

    />
  )
}

export default Onboarding
