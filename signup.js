
import firestore from '@react-native-firebase/firestore';
import React,{useState,useEffect} from 'react';
import { Button,Text,TextInput, View, StyleSheet,TouchableOpacity,UseEffect } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

export default function Signupmethod({ navigation }) {

const [email,setEmail]= useState('');
const [fullname,setFname]= useState('');
const [phonenumber,setPhonenumber]= useState(0);
const [password,setPassword]= useState('');

function create(){
    
    auth()
    .createUserWithEmailAndPassword(email,password)
    .then(() => {
        firestore()
        .collection('user')
        .doc(auth().currentUser.uid)
        .set({
            name: fullname,
            phone: phonenumber
        })
        .then(() => Alert.alert(
            "Account Created"
          ))
        
    })
    
navigation.navigate('signin')
    
}


  return (
    <View>

    <View  style={{justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{paddingTop:10,fontSize:20,fontWeight:'bold', color:'#11c09f', marginTop:100}}>SIGN UP</Text>

    </View>

    <View>
    <Text style={{marginTop:10, marginLeft:38,fontSize:15,fontWeight:'bold', color:'#11c09f', marginBottom:10}}>Enter Email:</Text>
    <TextInput
        style={{height: 40,borderWidth:2,marginLeft:35,marginRight:35,borderColor:'#11c09f',borderRadius:20,color:'black', paddingLeft:15}}
        placeholder="Email"
        placeholderTextColor={'black'}
        mode='contained' 
        onChangeText={(val)=> setEmail(val)}
        
        ></TextInput> 

    </View>

    <View style={{paddingTop:10}}>
    <Text style={{marginLeft:38,fontSize:15,fontWeight:'bold', color:'#11c09f', marginBottom:10}}>Enter Name:</Text>
    <TextInput
        style={{height: 40,borderWidth:2,marginLeft:35,marginRight:35,borderColor:'#11c09f',borderRadius:20,color:'black', paddingLeft:15}}
        placeholder="Full Name"
        placeholderTextColor={'black'}
        onChangeText={(val)=> setFname(val)}></TextInput>      
    </View>

    <View style={{paddingTop:10}}>
    <Text style={{marginLeft:38,fontSize:15,fontWeight:'bold', color:'#11c09f', marginBottom:10}}>Enter Phone No:</Text>
    <TextInput
        style={{height: 40,borderWidth:2,marginLeft:35,marginRight:35,borderColor:'#11c09f',borderRadius:20,color:'black', paddingLeft:15}}
        placeholder="Phone Number"
        placeholderTextColor={'black'}
        onChangeText={(val)=> setPhonenumber(val)}
        ></TextInput>      
    </View>

    <View style={{paddingTop:10}}>
    <Text style={{marginLeft:38,fontSize:15,fontWeight:'bold', color:'#11c09f', marginBottom:10}}>Enter Password:</Text>
    <TextInput
        style={{height: 40,borderWidth:2,marginLeft:35,marginRight:35,borderColor:'#11c09f',borderRadius:20,color:'black', paddingLeft:15}}
        placeholder="Password"
        placeholderTextColor={'black'}
        secureTextEntry={true}
        onChangeText={(val)=> setPassword(val)}></TextInput>      
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
           onPress={create}
           >
         <Text style={{fontSize:17, color: 'white'}}>Sign Up</Text>
    </TouchableOpacity>
    
  
    </View>
  );
}






