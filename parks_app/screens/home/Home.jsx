import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import reusable from '../../components/Reusable/reusable.style'
import { HeightSpacer,  ReusableText} from '../../components'
import BestHotels from '../../components/Home/BestHotels'
import Places from '../../components/Home/Places'
import Recommendations from '../../components/Home/Recommendations'
import { COLORS, SIZES, TEXT } from '../../constants/theme'
import { AntDesign } from '@expo/vector-icons'
import styles from './home.style'

const Home = ({navigation}) => {
  return (

    <SafeAreaView style={reusable.container}>
      <View>
        <View style={reusable.rowWithSpace ('space-between')}>

          <ReusableText 
            text={'Hey User'}
            family={'regular'}
            size={TEXT.large}
            color={COLORS.black}
          />

        </View>

        <HeightSpacer height={SIZES.xxLarge}/>

        <ReusableText 
            text={'Visit Our Parks'}
            family={'medium'}
            size={TEXT.large}
            color={COLORS.black}
          />


        <Places/>

        <HeightSpacer height={30}/>

        <Recommendations/>

        <HeightSpacer height={30}/>

        <BestHotels/>

      </View>
    </SafeAreaView>
  )
}

export default Home

