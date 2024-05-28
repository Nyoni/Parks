import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import reusable from '../Reusable/reusable.style';
import ReusableText from '../Reusable/ReusableText';
import { COLORS, SIZES, TEXT } from '../../constants/theme';
import { Feather } from '@expo/vector-icons';
import ReusableTile from '../Re'




const Recommendations = () => {

    const navigation = useNavigation();

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
    <View style={styles.container}>
        <View style={[reusable.rowWithSpace('space-between'), {paddingBottom: 20}]}>
        <ReusableText
            text={'Recommendations'}
            family={'medium'}
            size={TEXT.large}
            color={COLORS.black}
          />

          <TouchableOpacity 
            onPress={ ()=>navigation.navigate ('Recommended')}>

            <Feather
            
            name='list'
            size={20}

            />
          </TouchableOpacity>

        </View>

        <FlatList
            data={recommendations}
            horizontal
            keyExtractor={(item)=> item._id}
            contentContainerStyle={{columnGap: SIZES.medium}}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
                
            <ReusableTile item={item} onPress= {()=> navigation.navigate('PlaceDetails', item._id)}/>
            )}
        />

    </View>
  )
}

export default Recommendations

const styles = StyleSheet.create({
    container: {
        paddingTop: 30
    }
})