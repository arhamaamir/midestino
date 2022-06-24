
import firestore from '@react-native-firebase/firestore';
import React,{useState,useEffect} from 'react';
import { Button,Text,TextInput, View, StyleSheet,TouchableOpacity,UseEffect } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

export default function Homeapp({ navigation}) {


  const [name,setName]= useState('');
  
  function signout(){
    auth()
    .signOut()
    .then(() => console.log('User signed out!'));
    navigation.navigate('welcome')
  }
 
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

      /*useEffect(()=>{
        getdata();
      },[])*/

  // function getdata(){    
  // firestore()
  // .collection('user')
  // .doc(auth().currentUser.uid)
  // .get()
  // .then(documentSnapshot => {
  //   console.log('User exists: ', documentSnapshot.exists);

  //   if (documentSnapshot.exists) {
  //     documentSnapshot.id
  //     console.log('User data: ', documentSnapshot.data());
  //     setName(documentSnapshot.data().name)


  //     setName({...documentSnapshot.data(),complaintId:documentSnapshot.id})
  //     console.log(name)
  //   }
  // }); }
    
  return (
    <View>

      
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
    
    <Text style={{paddingTop:70,fontSize:20,fontWeight:'bold',color:'#11c09f'}}>
    Welcome {name}  
    </Text>

    

    <Text style={{paddingTop:20,fontSize:20,fontWeight:'bold',color:'#11c09f'}}>
    Mi Destino    
    </Text>

    </View>

    
    
    <TouchableOpacity
         style={{
           backgroundColor: '#11c09f', 
           borderRadius:15,
           paddingRight:7, 
           marginLeft:80, 
           marginRight:80, 
            marginTop:30,
           height:35,
           justifyContent:'center',
           alignItems:'center',
           
           }}
           onPress={() => navigation.navigate('editprofile')}
           >
         <Text style={{fontSize:17, color: 'white'}}>Update Profile</Text>
    </TouchableOpacity>


    <TouchableOpacity
         style={{
           backgroundColor: '#11c09f', 
           borderRadius:15,
           paddingRight:7, 
           marginLeft:80, 
           marginRight:80, 
            marginTop:30,
           height:35,
           justifyContent:'center',
           alignItems:'center',
           
           }}
           onPress={() => navigation.navigate('filecomplaint')}
           >
         <Text style={{fontSize:17, color: 'white'}}>File Complaint</Text>
    </TouchableOpacity>

    <TouchableOpacity
         style={{
           backgroundColor: '#11c09f', 
           borderRadius:15,
           paddingRight:7, 
           marginLeft:80, 
           marginRight:80, 
            marginTop:30,
           height:35,
           justifyContent:'center',
           alignItems:'center',
           
           }}
           onPress={() => navigation.navigate('viewcomplains')}
           >
         <Text style={{fontSize:17, color: 'white'}}>View Complaints</Text>
    </TouchableOpacity>

    <TouchableOpacity
         style={{
           backgroundColor: '#11c09f', 
           borderRadius:15,
           paddingRight:7, 
           marginLeft:80, 
           marginRight:80, 
            marginTop:30,
           height:35,
           justifyContent:'center',
           alignItems:'center',
           
           }}
           onPress={() => navigation.navigate('closecomplainsUser')}
           >
         <Text style={{fontSize:17, color: 'white'}}>Closed Complaints</Text>
    </TouchableOpacity>

    <TouchableOpacity
         style={{
           backgroundColor: '#11c09f', 
           borderRadius:15,
           paddingRight:7, 
           marginLeft:80, 
           marginRight:80, 
            marginTop:30,
           height:35,
           justifyContent:'center',
           alignItems:'center',
           
           }}
           onPress={() => navigation.navigate('localproducts')}
           >
         <Text style={{fontSize:17, color: 'white'}}>Local Products</Text>
    </TouchableOpacity>

    <TouchableOpacity
         style={{
           backgroundColor: '#11c09f', 
           borderRadius:15,
           paddingRight:7, 
           marginLeft:80, 
           marginRight:80, 
            marginTop:30,
           height:35,
           justifyContent:'center',
           alignItems:'center',
           
           }}
           onPress={() => navigation.navigate('searchlocalproducts')}
           >
         <Text style={{fontSize:17, color: 'white'}}> Search Local Products</Text>
    </TouchableOpacity>
    
    <TouchableOpacity
         style={{
           backgroundColor: '#11c09f', 
           borderRadius:15,
           paddingRight:7, 
           marginLeft:80, 
           marginRight:80, 
            marginTop:30,
           height:35,
           justifyContent:'center',
           alignItems:'center',
           
           }}
           onPress={() => signout()}
           >
         <Text style={{fontSize:17, color: 'white'}}>Sign-Out</Text>
    </TouchableOpacity>
    
    <TouchableOpacity
         style={{
           backgroundColor: '#11c09f', 
           borderRadius:15,
           paddingRight:7, 
           marginLeft:160, 
           marginRight:160, 
            marginTop:30,
           height:35,
           justifyContent:'center',
           alignItems:'center',
           
           }}
           onPress={() => navigation.navigate('homeadmin')}
           >
         <Text style={{fontSize:17, color: 'white'}}> A-A</Text>
    </TouchableOpacity>

    </View>
  );
}




