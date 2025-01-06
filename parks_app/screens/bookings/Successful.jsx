import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {AssetImage, HeightSpacer, ReusableBtn, ReusableText} from '../../components'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import ReusableTile from '../../components/Reusable/ReusableTile'

const Successful = ({navigation}) => {

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

            <HeightSpacer height={40}/>

            <View style={{alignItems: "center"}}>
                                     
            <ReusableText 
                text={'Booking Successful'}
                family={'medium'}
                size={TEXT.xLarge}
                color={COLORS.black}
            />

            <HeightSpacer height={20}/>

            <ReusableText 
                text={'You can find your booking details below'}
                family={'regular'}
                size={SIZES.medium}
                color={COLORS.gray}
            />

            <HeightSpacer height={20}/>

            </View>

            <View style={{margin:20}}>
                <ReusableText 
                    text={'Room Details'}
                    family={'bold'}
                    size={SIZES.medium}
                    color={COLORS.dark}
            />

            <HeightSpacer height={20}/>

            <ReusableTile
                item={hotel}

            />

            <HeightSpacer height={40}/>

            <ReusableBtn 
                onPress={() => navigation.navigate('Bottom' )}
                btnText={"Done"}
                width={SIZES.width-50}
                backgroundColor={COLORS.green}
                borderColor={COLORS.green}
                borderWidth={0}
                textColor={COLORS.white}
        />

            </View>

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
