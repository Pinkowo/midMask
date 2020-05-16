import * as React from 'react';
import { Text, View, StyleSheet,Image,AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SplashScreen } from 'expo';

import Mask from './screen/Mask';
import Pharmacy from './screen/Pharmacy';
import News from './screen/News';
import pics from "./json/pics.json";

const Tab = createMaterialTopTabNavigator();
const PERSISTENCE_KEY = "ALBUMS_NAVIGATION_STATE";

export default function App() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);
  const [initialNavigationState, setInitialNavigationState] = React.useState();
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide();
        const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
        const state = JSON.parse(savedStateString);
        setInitialNavigationState(state);
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hide();
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer
        initialState={initialNavigationState}
        onStateChange={(state)=>
          AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
        }
      >
        <View style={styles.header}>
          <Image source={{uri: pics.profile}} style={styles.profile}/>
        </View>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#B36D69',
            labelStyle: { fontSize: 20 },
            indicatorStyle :{
              backgroundColor:'#B36D69'
            }    
          }}
        >
          <Tab.Screen name="口罩" component={Mask} />
          <Tab.Screen name="藥局" component={Pharmacy} />
          <Tab.Screen name="消息" component={News} />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    height:80,
    backgroundColor:"#FFE7E7",
    justifyContent:'center',
  },
  profile:{
    height:45,
    width:45,
    marginLeft:20,
    marginTop:15
  }
});
