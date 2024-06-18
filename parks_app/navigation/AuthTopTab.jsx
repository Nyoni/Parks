import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'

const Tab = createMaterialTopTabNavigator();

const AuthTopTab = () => {
  return (
    <View>
        <Tab.Navigator>
            <Tab.Screen/>
        </Tab.Navigator>

    </View>
  )
}

export default AuthTopTab

const styles = StyleSheet.create({})