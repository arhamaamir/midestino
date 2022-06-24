import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  TextInput,
  Button, Image
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
//import AsyncStorage from '@react-native-async-storage/async-storage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { Avatar } from 'react-native-paper';
import imagesPath from './constants/imagesPath';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Stack = createNativeStackNavigator();

let departments = [
  {
    id: 1,
    name: 'Police'
  },
  {
    id: 2,
    name: 'Rescue'
  },
  {
    id: 3,
    name: 'Land Sliding'
  }
];

const Dropdown = ({
  data =[],
  value = {},
  onSelect = ()=>{}

}) =>{
  const [showoptions, Setshowoptions] = useState(false)

  const onSelectedItem = (value)=>{
    Setshowoptions(false);
    onSelect(value)
  }
  return (
    <View style={{marginTop:40}}>
    <TouchableOpacity 
    onPress={()=>Setshowoptions(!showoptions)}
    activeOpacity={0.8}
    style={{
      backgroundColor: '#11c09f',
      padding: 8,
      borderRadius:8,
      height: 42,
      justifyContent: 'space-between',
      marginLeft:25,
      marginRight:25,
      flexDirection:'row',
      alignItems: 'center'
    }}>
      
      <Text>
      {!!value? value?.name :'Choose Complain Centre'}
      </Text>
      <Image 
      
      source={imagesPath.icDropDown}
      />
    
     </TouchableOpacity> 
      
      { showoptions&& (<View style = {{marginLeft:25, margintop:30 }}>
       {data.map((value, item)=>{

         return(
          <TouchableOpacity  
          key={String(item)}
          onPress={()=>onSelectedItem(value)}
          >
            <View style={{marginTop:8, borderColor:'#11c09f', borderWidth:2, marginRight:200, borderRadius:15, height:30, paddingLeft:10}}>

           <Text style={{color:'black', fontSize:15.5}}> 
             {value.name}
           </Text>
          </View>
          </TouchableOpacity>
         )
       })}
       
      </View>)}


    </View>
  );
}


export default function ComplaintScreen({navigation}){

  const [selectedItem, setselectedItem] = useState(null);
  const [Location, setLocation] = useState("");
  const [Description, setDescription] = useState("");
  const [UIDDUSER,setUIDDUser] = useState("");

  useEffect(()=>{
    getdata();
  },[])

  function addcomplaint(){
    
  firestore()
  .collection('complaint')
  .add({
    dept: selectedItem,
    description: Description,
    status: true,
    location: Location,
    userid: auth().currentUser.uid

  })
  .then(() => {
    console.log('Complaint Added!');
    Alert.alert(
      "Complaint Added"
    )
    navigation.navigate('home')
  });
    
}

function getdata(){    
  firestore()
  .collection('user')
  .doc(auth().currentUser.uid)
  .get()
  .then(documentSnapshot => {
    console.log('User exists: ', documentSnapshot.exists);

    if (documentSnapshot.exists) {
      console.log('User data: ', documentSnapshot.data());
      setUIDDUser(auth().currentUser.uid)
      //console.log(name)
    }
  }); }

  const onSelect = (item) =>{
    setselectedItem(item)
  }
      
  return (
    <View style={{marginTop:40}}>
    <Dropdown
      value={selectedItem}
      data={departments}
      onSelect={onSelect }
    />
    <View style={{marginLeft: 29, marginTop: 20}}>

    <Text style={{fontSize: 15, fontWeight: 'bold', color:'#11c09f'}}>Location:</Text>
    <TextInput style = {{borderWidth:2, marginLeft:1, marginRight:30, marginTop:10, paddingLeft:5, borderColor:'#11c09f'}} value = {Location} onChangeText = {setLocation} />

    <Text style={{fontSize: 15, fontWeight: 'bold', color:'#11c09f'}}>Description:</Text>
    <TextInput multiline = {true} style = {{borderWidth:2, marginLeft:1, marginRight:30, marginTop:10, paddingLeft:5, borderColor:'#11c09f'}} value = {Description} onChangeText = {setDescription} />

    <TouchableOpacity
         style={{
           backgroundColor: '#11c09f', 
           borderRadius:15,
           paddingRight:7, 
           marginLeft:80, 
           marginRight:110, 
            marginTop:20,
           height:30,
           justifyContent:'center',
           alignItems:'center',

           
           }}
           onPress={() =>addcomplaint() }
           >
         <Text style={{fontSize:17, color: 'white'}}> Submit</Text>
    </TouchableOpacity> 

    <TouchableOpacity
         style={{
           backgroundColor: '#11c09f', 
           borderRadius:15,
           paddingRight:7, 
           marginLeft:80, 
           marginRight:110, 
          marginTop:20,
           height:30,
           justifyContent:'center',
           alignItems:'center',
           
           }}
           onPress={() => navigation.navigate('home')}
           >
         <Text style={{fontSize:17, color: 'white'}}>Main Menu</Text>
    </TouchableOpacity>
    
    </View>
    </View>
  );

}





