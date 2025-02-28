import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as Splashscreen from "expo-splash-screen";
import { useCallback } from 'react';
/*import Navigation container from react-navigation/native */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 
import { Onboarding, Search, CountryDetails, Recommended, PlaceDetails, HotelDetails, Hotelists, HotelSearch, SelectRoom, Payments, Settings, Failed, Successful, AuthTopTab} from './screens';
import BottomTabNavigation from './navigation/BottomTabNavigation';


/* Create our stack from createNativeStackNavigator */
const Stack = createNativeStackNavigator();

export default function App() {
  /*Import Fonts from assets folder */
  const [fontsLoaded] = useFonts({
    regular: require('./assets/fonts/regular.otf'),
    medium: require('./assets/fonts/medium.otf'),
    bold: require('./assets/fonts/bold.otf'),
    light: require('./assets/fonts/light.otf'),
    xtrabold: require('./assets/fonts/xtrabold.otf'),

  });

  /*Loading Fonts */
  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded){
      await Splashscreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded){
    return null;
  }


/*Contains all our screens we are going to be pushing and popping */
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Onboard' component={Onboarding} options={{headerShown:false}}/>
        <Stack.Screen name='Bottom' component={BottomTabNavigation} options={{headerShown:false}}/>
        <Stack.Screen name='Search' component={Search} options={{headerShown:false}}/>
        <Stack.Screen name='CountryDetails' component={CountryDetails} options={{headerShown:false}}/>
        <Stack.Screen name='Recommended' component={Recommended} options={{headerShown:false}}/>
        <Stack.Screen name='PlaceDetails' component={PlaceDetails} options={{headerShown:false}}/>
        <Stack.Screen name='HotelDetails' component={HotelDetails} options={{headerShown:false}}/>
        <Stack.Screen name='Hotelists' component={Hotelists} options={{headerShown:false}}/>
        <Stack.Screen name='HotelSearch' component={HotelSearch} options={{headerShown:false}}/>
        <Stack.Screen name='SelectRoom' component={SelectRoom} options={{headerShown:false}}/>
        <Stack.Screen name='Payments' component={Payments} options={{headerShown:false}}/>
        <Stack.Screen name='Settings' component={Settings} options={{headerShown:false}}/>
        <Stack.Screen name='Failed' component={Failed} options={{headerShown:false}}/>
        <Stack.Screen name='Successful' component={Successful} options={{headerShown:false}}/>
        <Stack.Screen name='AuthTopTab' component={AuthTopTab} options={{headerShown:false}}/>
      
      </Stack.Navigator>
    </NavigationContainer>

  );
}

