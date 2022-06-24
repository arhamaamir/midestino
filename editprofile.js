
import firestore from '@react-native-firebase/firestore';
import React,{useState,useEffect} from 'react';
import { Button,Text,TextInput, View, StyleSheet,TouchableOpacity ,Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

export default function EditprofileN({ navigation}) {


  const [newname,setNewName]= useState('');
  const [newphoneno,setNewPhoneNo]= useState('');


    useEffect(()=>{
        getdata();
      },[])


  function getdata(){    
  firestore()
  .collection('user')
  .doc(auth().currentUser.uid)
  .get()
  .then(documentSnapshot => {
    console.log('User exists: ', documentSnapshot.exists);

    if (documentSnapshot.exists) {
      console.log('User data: ', documentSnapshot.data());
      setNewName(documentSnapshot.data().name)
      setNewPhoneNo(documentSnapshot.data().phone)
      //console.log(name)
    }
  }); }

  function updatedata(){    
   firestore()
  .collection('user')
  .doc(auth().currentUser.uid)
  .update({
    name: newname,
    phone: newphoneno
  })
  .then(() => {
    console.log('Your Profile is Updated!');
    Alert.alert(
        "Profile Updated"
      )
      navigation.navigate('home')
  }); }
    
  return (
    <View>
      <View style={{marginLeft:40, marginTop:70}}>
        <Text style={{fontWeight:'bold', color:'#11c09f', marginBottom:10, fontSize:25}}>
          Update Profile Details
        </Text>
      </View>
      <View style={{paddingTop:10}}>
    <Text style={{marginLeft:38,fontSize:15,fontWeight:'bold', color:'#11c09f', marginBottom:10}}>Enter Name:</Text>
    <TextInput
        style={{height: 40,borderWidth:2,marginLeft:35,marginRight:35,borderColor:'#11c09f',borderRadius:20,color:'black', paddingLeft:15}}
        placeholder="Enter Name Here"
        placeholderTextColor={'black'}
        onChangeText={(val)=> setNewName(val)}
        ></TextInput>      
    </View>

    <View style={{paddingTop:10}}>
    <Text style={{marginLeft:38,fontSize:15,fontWeight:'bold', color:'#11c09f', marginBottom:10}}>Enter Phone Number:</Text>
    <TextInput
        style={{height: 40,borderWidth:2,marginLeft:35,marginRight:35,borderColor:'#11c09f',borderRadius:20,color:'black', paddingLeft:15}}
        placeholder="Enter Phone Number Here"
        placeholderTextColor={'black'}
        onChangeText={(val)=> setNewPhoneNo(val)}></TextInput>      
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
           onPress={updatedata}
           >
         <Text style={{fontSize:17, color: 'white'}}>Update Data</Text>
    </TouchableOpacity>

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
           onPress={() => navigation.navigate('home')}
           >
         <Text style={{fontSize:17, color: 'white'}}>Main Menu</Text>
    </TouchableOpacity>
    
    


    

    </View>
  );
}




