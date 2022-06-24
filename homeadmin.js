
import firestore from '@react-native-firebase/firestore';
import React,{useState,useEffect} from 'react';
import { Button,Text,TextInput, View, StyleSheet,TouchableOpacity,UseEffect } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

export default function HomeAdminApp({ navigation}) {


  const [name,setName]= useState('');

 
    /*function getname(){
      firestore().collection('user')
      .doc("" + auth().currentUser.uid
      )
      .get()
      .then(doc => {
        setName(doc.data().name)
        //console.log(name)
        //return name
      });}*/

      useEffect(()=>{
        getdata();
      },[])

      function signout(){
        auth()
        .signOut()
        .then(() => console.log('User signed out!'));
        navigation.navigate('welcome')
      }



  function getdata(){    
  firestore()
  .collection('complaint')
  //.doc(auth().currentUser.uid)
  .where('status', '==', false )
  .get()
  .then(querySnapshot => {
    console.log('Total users: ', querySnapshot.size);

    querySnapshot.forEach(documentSnapshot => {
      console.log('User ID: ', documentSnapshot.id, documentSnapshot.data().description);
    });
  });}

    
  return (
    <View>
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{paddingTop:40,fontSize:20,fontWeight:'bold',color:'green'}}>
    Welcome Admin 
    </Text>

    <Text style={{paddingTop:20,fontSize:20,fontWeight:'bold',color:'green'}}>
    Mi Destino    
    </Text>

    </View>

    <View style={{marginTop:20,borderWidth:2,marginLeft:50,marginRight:50}}>
    <Button icon="camera" title='Close Complaints' onPress={() => navigation.navigate('closecomplaint')}>
    </Button>
    </View>

    <View style={{marginTop:20,borderWidth:2,marginLeft:50,marginRight:50}}>
    <Button icon="camera" title='View Closed Complaints' onPress={() => getdata()}>
    </Button>
    </View>

    <View style={{marginTop:20,borderWidth:2,marginLeft:50,marginRight:50}}>
    <Button icon="camera" title='Add Local Products' onPress={() => navigation.navigate('addproducts')}>
    </Button>
    </View>
    
    <View style={{marginTop:20,borderWidth:2,marginLeft:50,marginRight:50}}>
    <Button icon="camera" title='Sign-Out' onPress={() => signout()}>
    </Button>
    </View>

    </View>
  );
}




