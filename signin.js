
import firestore from '@react-native-firebase/firestore';
import React,{useState,useEffect} from 'react';
import { Button,Text,TextInput, View, StyleSheet,TouchableOpacity,UseEffect } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Signinmethod({ navigation }) {


    const [email,setEmaill]= useState('');
    const [password,setPasswordd]= useState('');

    
    function login(){
        auth()
        .signInWithEmailAndPassword(email,password)
        .then(() => {
            //user= auth().currentUser;
            //full();
            
            console.log('User signed in!');
            storeData(email,password);
            navigation.navigate('home')
        })


        .catch((error) => {
          var errorCode = error.code;
          var errorMessage= error.message;
          //console.error(error);
          });


    }   
    
    const storeData = async (mail, pass) => {
      Alert.alert('Data Saved');
      try {
        await AsyncStorage.setItem('email', email);
        await AsyncStorage.setItem('password', password);
      } catch (e) {
        console.log(e);
      }
    };
    

    
  return (
    <View>

    <View  style={{justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{paddingTop:10,fontSize:20,fontWeight:'bold', color:'#11c09f', marginTop:175}}>SIGN IN</Text>
    </View>

    <View>
    <Text style={{marginTop:10, marginLeft:38,fontSize:15,fontWeight:'bold', color:'#11c09f', marginBottom:10}}>Enter Name:</Text>
    <TextInput
        style={{height: 40,borderWidth:2,marginLeft:35,marginRight:35,borderColor:'#11c09f',borderRadius:20,color:'black', paddingLeft:15}}
        placeholder="Email"
        placeholderTextColor={'black'}
        mode='contained'
        onChangeText={(val)=> setEmaill(val)}
         ></TextInput>      
    </View>

    <View style={{paddingTop:10}}>
    <Text style={{ marginLeft:38,fontSize:15,fontWeight:'bold', color:'#11c09f', marginBottom:10}}>Enter Password:</Text>
    <TextInput
        style={{height: 40,borderWidth:2,marginLeft:35,marginRight:35,borderColor:'#11c09f',borderRadius:20,color:'black', paddingLeft:15}}
        placeholder="Password"
        placeholderTextColor={'black'}
        secureTextEntry={true}
        onChangeText={(val)=> setPasswordd(val)}
        ></TextInput>      
    </View>

    

    <TouchableOpacity
         style={{
           backgroundColor: '#11c09f', 
           borderRadius:15,
           paddingRight:7, 
           marginLeft:100, 
           marginRight:110, 
            marginTop:30,
           height:35,
           justifyContent:'center',
           alignItems:'center',
           
           }}
           onPress={login}
           >
         <Text style={{fontSize:17, color: 'white'}}> Submit</Text>
    </TouchableOpacity> 

    
    

    <View style={{flexDirection:'row',marginTop:50,marginLeft:45}}>
    <Text style={{color:'black',marginLeft:6}}>Don't have Account? </Text>
    <TouchableOpacity onPress={() => navigation.navigate('signup')}>
    <Text style={{fontSize:15, color:'#11c09f', fontWeight:'bold'}}> Create Account </Text>    
    </TouchableOpacity>

    </View>
  


    </View>
  );
}



//<MaterialCommunityIcons name={'book-alphabet'} color={color} size={size}/>


