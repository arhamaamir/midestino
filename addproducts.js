
import firestore from '@react-native-firebase/firestore';
import React,{useState,useEffect} from 'react';
import { Button,Text,TextInput, View, StyleSheet,TouchableOpacity ,Alert} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

export default function AddproductsA({ navigation}) {


  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [phoneno, setPhoneno] = useState("");
  const [picture, setPicture] = useState("");
  const [price, setPrice] = useState("");
  const [UIDDUSERR,setUIDDUserr] = useState("");

   /*useEffect(()=>{
        getdata();
      },[])*/


      function addproduct(){
    
        firestore()
        .collection('product')
        .add({
          description: description,
          location: location,
          phonenumber: phoneno,
          picture: picture,
          price: price
      
        })
        .then(() => {
          console.log('Product Added!');
          Alert.alert(
            "Product Added"
          )
          navigation.navigate('homeadmin')
        });
      
      
          
      }
      
      /*function getdata(){    
        firestore()
        .collection('product')
        .doc(auth().currentUser.uid)
        .get()
        .then(documentSnapshot => {
          console.log('User exists: ', documentSnapshot.exists);
      
          if (documentSnapshot.exists) {
            console.log('User data: ', documentSnapshot.data());
            setUIDDUser(auth().currentUser.uid)
            //console.log(name)
          }
        }); }*/

    
  return (
    <View>

    <View>
    <Text style={{paddingTop:40,fontSize:20,fontWeight:'bold',color:'green'}}>   
    Enter Product Description</Text>

    <TextInput
        style={{height: 40,borderWidth:2,marginLeft:20,marginRight:20,borderColor:'green',borderRadius:20}}
        onChangeText={(val)=> setDescription(val)}>
    </TextInput>      
    </View>

    <View>
    <Text style={{paddingTop:40,fontSize:20,fontWeight:'bold',color:'green'}}>   
    Enter Location:</Text>

    <TextInput
        style={{height: 40,borderWidth:2,marginLeft:20,marginRight:20,borderColor:'green',borderRadius:20}}
        //value={newphoneno}
        onChangeText={(val)=> setLocation(val)}>
    </TextInput>      
    </View>

    <View>
    <Text style={{paddingTop:40,fontSize:20,fontWeight:'bold',color:'green'}}>   
    Enter Phone Number:</Text>

    <TextInput
        style={{height: 40,borderWidth:2,marginLeft:20,marginRight:20,borderColor:'green',borderRadius:20}}
        //value={newphoneno}
        onChangeText={(val)=> setPhoneno(val)}>
    </TextInput>      
    </View>

    <View>
    <Text style={{paddingTop:40,fontSize:20,fontWeight:'bold',color:'green'}}>   
    Enter Picture URI:</Text>

    <TextInput
        style={{height: 40,borderWidth:2,marginLeft:20,marginRight:20,borderColor:'green',borderRadius:20}}
        //value={newphoneno}
        onChangeText={(val)=> setPicture(val)}>
    </TextInput>      
    </View>

    <View>
    <Text style={{paddingTop:40,fontSize:20,fontWeight:'bold',color:'green'}}>   
    Enter Price:</Text>

    <TextInput
        style={{height: 40,borderWidth:2,marginLeft:20,marginRight:20,borderColor:'green',borderRadius:20}}
        //value={newphoneno}
        onChangeText={(val)=> setPrice(val)}>
    </TextInput>      
    </View>
    <Button
    title="ADD PRODUCT" onPress={() =>addproduct() }/>



    

    </View>
  );
}




