import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import reusable from '../Reusable/reusable.style'
import { COLORS } from '../../constants/theme'
import ReusableText from '../Reusable/ReusableText'

const SettingTile = () => {
  return (
    <TouchableOpacity onPress={onPress} styles={[reusable.rowWithSpace('space-between'), styles.container ]}>
        <ReusableText 
            text={'Legal'}
            family={'regular'}
            size={SIZES.xLarge -5}
            color={COLORS.black}
        />

    </TouchableOpacity>
  )
}

export default SettingTile

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: COLORS.lightGrey,
        paddingVertical: 15
    }
})