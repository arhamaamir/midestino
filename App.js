
import firestore from '@react-native-firebase/firestore';
import React,{useState,useEffect} from 'react';
import { Button,Text,TextInput, View, StyleSheet,TouchableOpacity,UseEffect } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { createDrawerNavigator } from '@react-navigation/drawer';
//import 'react-native-gesture-handler';

import Signinmethod from './signin';
import Signupmethod from './signup';
import Main from './welcome';
import Homeapp from './home';
import EditprofileN from './editprofile';
import ComplaintScreen from './filecomplaint';
import HomeAdminApp from './homeadmin';
import AddproductsA from './addproducts';
import ClosecomplaintsA from './closecomplaint';
import ClosecomplainsUser from './closecomplainsUser';
import ViewcomplainsUser from './viewcomplains';
import Localproducts from './localproducts';
import SearchLocalP from './searchlocalproducts';

const Stack = createNativeStackNavigator();
function App() {
return(
  <NavigationContainer>
    <Stack.Navigator initialRouteName="welcome" screenOptions={{headerShown: true}}>

      <Stack.Screen name="welcome" component={Main}  />
      <Stack.Screen name="signin" component={Signinmethod} />
      <Stack.Screen name="home" component={Homeapp} />
      <Stack.Screen name="signup" component={Signupmethod} options={{ title: 'Sign-Up' }}/>
      <Stack.Screen name="editprofile" component={EditprofileN}/>
      <Stack.Screen name="filecomplaint" component={ComplaintScreen}/>
      <Stack.Screen name="homeadmin" component={HomeAdminApp}/>
      <Stack.Screen name="addproducts" component={AddproductsA}/>
      <Stack.Screen name="closecomplaint" component={ClosecomplaintsA}/>
      <Stack.Screen name="closecomplainsUser" component={ClosecomplainsUser}/>
      <Stack.Screen name="viewcomplains" component={ViewcomplainsUser}/>
      <Stack.Screen name="localproducts" component={Localproducts}/>
      <Stack.Screen name="searchlocalproducts" component={SearchLocalP}/>

    </Stack.Navigator>
  </NavigationContainer>
);
}

export default App;
