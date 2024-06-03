import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { DescriptionText, HeightSpacer, NetworkImage, PopularList, ReusableBtn, ReusableText } from '../../components';
import AppBar from '../../components/Reusable/AppBar';
import { COLORS, SIZES, TEXT } from '../../constants/theme';
import reusable from '../../components/Reusable/reusable.style';
import {Feather} from '@expo/vector-icons'

const PlaceDetails = () => {
    const route = useRoute();
    const id = route.params
    console.log(id);

    const place = {
      "_id": "64c631650298a05640539adc",
      "country_id": "64cf2d095d14628d0ac0a2bd",
      "title": "Skywalk",
      "description": "The SkyWalk is truly unique, a first for Zimbabwe and the world. The 2 suspension bridges are designed to look like vines above the falls allowing for the first time a full panoramic view of the Mutarazi Falls and its surroundings. The SkyWalk consists of two bridges – the one 30m that take you over the lip of the Falls and the other 90m that is above the entire Falls. If you ever dreamed of walking in midair then this is for you. Activity takes roughly 10 minutes. This is an activity offered by Far and Wide and the activity site is 12km from our property.",
      "imageUrl": "https://www.zimparks.org.zw/wp-content/uploads/2023/05/MtaraziSkywalk.png",
      "location": "Mtarazi, Nyanga National Park",

      "popular": [
          {
            "_id": "64d062a3de20d7c932f1f70a",
            "country_id": "64cf2c565d14628d0ac0a2b7",
            "title": "Camping",
            "imageUrl": "https://www.zimparks.org.zw/wp-content/uploads/2024/03/camping.jpg",
            "location": "Mana Pools",

          },
          {
            "_id": "64d09e3f364e1c37c8b4b13c",
            "country_id": "64cf2d4d5d14628d0ac0a2bf",
            "title": "Bunjee Jumping",
            "imageUrl": "https://www.zimparks.org.zw/wp-content/uploads/2023/05/bunjee2.jpg",
            "location": "Victoria Falls Bridge",
          }
      ]
  }
    console.log(id)
  return (
    <ScrollView>
    <View>
      <NetworkImage
        source={place.imageUrl}
        width={"100%"}
        height={350}
        radius={20}
      />
       <HeightSpacer height={20}/>
    <AppBar 
      top={40}
      left={20}
      right={20}
      title={place.title} 
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
          text={place.location}
          family={'medium'}
          size={TEXT.xLarge}
          color={COLORS.black}
        />

      <DescriptionText text={place.description} />

      <View style={{alignContent: "center" }}>
        <HeightSpacer height={20}/>

        <View style={reusable.rowWithSpace("space-between")}>
          <ReusableText
            text={"Fun Activities"}
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

        <PopularList data={place.popular}/>

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

export default PlaceDetails

const styles = StyleSheet.create({
  description: {
    marginHorizontal: 20
  }
})