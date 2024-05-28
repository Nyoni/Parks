import { FlatList, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppBar from '../../components/Reusable/AppBar'
import { COLORS } from '../../constants/theme'
import ReusableTile from '../../components/Reusable/ReusableTile'


const Recommended = ({navigation}) => {
  const recommendations =  [
    {
        "_id": "64c631650298a05640539adc",
        "country_id": "64cf2d095d14628d0ac0a2bd",
        "title": "Skywalk",
        "imageUrl": "https://www.zimparks.org.zw/wp-content/uploads/2023/05/MtaraziSkywalk.png",
        "location": "Mtarazi",

    },
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

    },
    {
        "_id": "64d09f90364e1c37c8b4b140",
        "country_id": "64c62bfc65af9f8c969a8d04",
        "title": "Game Drives",
        "imageUrl": "https://www.zimparks.org.zw/wp-content/uploads/2023/05/gamedrives.jpg",
        "location": "Gonarezhou",

    },
    {
        "_id": "64d30f789d008909fa8b7ce5",
        "country_id": "64cf2d095d14628d0ac0a2bd",
        "imageUrl": "https://www.zimparks.org.zw/wp-content/uploads/2024/05/Canoeing-scaled.webp",
        "location": "Nyanga",
        "title": "Canoeing",

    }
];


  return (
    <SafeAreaView style={{marginHorizontal: 20}}>
      <View style={{height:50}}>
        <AppBar 
        top={10}
        left={0}
        right={0}
        title={'Recommendations'} 
        color={COLORS.white} 
        icon={'search1'}
        color1={COLORS.white} 
        onPress={() => navigation.goBack()}
        onPress1={() => navigation.navigate('Search')}
        />
      </View>

      <View style={{paddingTop:20}}>
        <FlatList
        data={recommendations}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => (

          <View style= {{marginBottom: 10}}>
            <ReusableTile item={item} onPress={()=> navigation.navigate('PlaceDetails', item._id) }/>
          </View>

        )}/>
      </View>
    </SafeAreaView>
  )
}

export default Recommended

const styles = StyleSheet.create({}) 