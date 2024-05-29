import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { DescriptionText, HeightSpacer, NetworkImage, PopularList, ReusableBtn, ReusableText } from '../../components';
import AppBar from '../../components/Reusable/AppBar';
import { COLORS, SIZES, TEXT } from '../../constants/theme';
import reusable from '../../components/Reusable/reusable.style';
import {Feather} from '@expo/vector-icons'

const CountryDetails = ({navigation}) => {
    const route = useRoute();
    const{item} = route.params;
    const country = {
      "_id": "64c62bfc65af9f8c969a8d04",
      "country": "Gonarezhou",
      "description": "Gonarezhou National Park is Zimbabwe’s second largest park and lies in the South Eastern corner of Zimbabwe bordering Kruger National Park in South Africa and Limpopo National Park in Zimbabwe.It forms part of the Great Limpopo Trans-frontier Conservation Area and covers 5 000 kilometers. The park is home to all of the big 5: elephant, buffalo, rhino, lion and leopard and in addition to these hosts over 100 mammal species, 400 bird species and 50 fish species including Zambezi shark and small-tooth sawfish at the confluence of the Save and Runde; which also happens to be the lowest point in Zimbabwe at 162m above sea level.",
      "imageUrl": "https://www.zimparks.org.zw/wp-content/uploads/2024/05/Hwange-copy-scaled.webp",
      "popular": [
          {
              "_id": "64cf2c565d14628d0ac0a2b7",
              "title": "Mana Pools",
              "imageUrl": "https://www.zimparks.org.zw/wp-content/uploads/2024/05/Mana-Pools-copy-scaled.webp",
              "location": "Mid Zambezi, Zimbabwe"
          },
          {
            "_id": "64cf2d4d5d14628d0ac0a2bf",
            "title": "Victoria Falls",
            "imageUrl": "https://www.zimparks.org.zw/wp-content/uploads/2024/01/Victoria-Falls.jpg",
            "location": "Zambezi, Zimbabwe",
          }
      ],
      "region": "South East, Zimbabwe"
  }

    console.log(item);
      

  return (

      <ScrollView>
        <View>
          <NetworkImage
            source={country.imageUrl}
            width={"100%"}
            height={350}
            radius={30}
          />

        <AppBar 
          top={40}
          left={20}
          right={20}
          title={country.country} 
          color={COLORS.white} 
          icon={'search1'}
          color1={COLORS.white} 
          onPress={() => navigation.goBack()}
          onPress1={() => {}}
        />
        </View>

        <View>
          
        </View>
        <View style={styles.description}>
          <ReusableText
              text={country.region}
              family={'medium'}
              size={TEXT.xxLarge}
              color={COLORS.black}
            />

          <DescriptionText text={country.description} />

          <View style={{alignContent: "center" }}>
            <HeightSpacer height={20}/>

            <View style={reusable.rowWithSpace("space-between")}>
              <ReusableText
                text={"Popular Destinations"}
                family={'medium'}
                size={TEXT.large}
                color={COLORS.black}
              />

              <TouchableOpacity onPress={()=> {}}>
                <Feather 
                  name='list'
                  size={20}
                />
              </TouchableOpacity>

            </View>

            <HeightSpacer height={20}/>

            <PopularList data={country.popular}/>

            <HeightSpacer height={20}/>

            <ReusableBtn 
              onPress={() => navigation.navigate('HotelSearch', id )}
              btnText={"Best Accomodation"}
              width={SIZES.width-40}
              backgroundColor={COLORS.green}
              borderColor={COLORS.green}
              borderWidth={0}
              textColor={COLORS.white}
            />
           <HeightSpacer height={30}/>
          </View>
        </View>

      </ScrollView>
  )
}

export default CountryDetails

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f3f4f8",
  },

  description: {
    marginHorizontal: 20,
    paddingTop: 20
  }
})