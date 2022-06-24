
import firestore from '@react-native-firebase/firestore';
import React,{useState,useEffect} from 'react';
import { Button,Text,TextInput, View, StyleSheet,TouchableOpacity ,Alert, ActivityIndicator,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

export default function ClosecomplaintsA({ navigation}) {


  //const [complaintid,setComplaintId]= useState('');
  const [complaints,setComplaints]= useState([]);
  const [loading,setLoading] = useState(true); 
  const [cid,setcid] = useState('');   


  



    useEffect(()=>{
        const subscriber = firestore()
        .collection('complaint')
        .onSnapshot(querySnapshot => {
          const complaintArray = [];
  
          querySnapshot.forEach(documentSnapshot => {
              complaintArray.push({
              ...documentSnapshot.data(),
              complaintid: documentSnapshot.id   
            });
          });
  
          setComplaints(complaintArray);
          setLoading(false);
        });
      // console.log(books[0]);
  
      // Unsubscribe from events when no longer in use
      return () => subscriber();
      },[])


  /*function getdata(){    
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
  }); }*/




  function ComplainCloseN(cid){    
   firestore()
  .collection('complaint')
  .doc(cid)
  .update({
    status: false
  })
  .then(() => {
    console.log('Your Profile is Updated!');
    Alert.alert(
        "Complaint Closed"
      )
      navigation.navigate('homeadmin')
  }); }
    


  if(loading) return <ActivityIndicator/>
  return (
    <View>

    <View >
          <FlatList
            data={complaints}
            renderItem={({ item }) => {

            return(
            <View style={{flexDirection:"row"}}>
            
                <TouchableOpacity   onPress={() =>ComplainCloseN(item.complaintid) }>
                
                  <Text style={{paddingTop:20,paddingLeft:30}}>{item.location}</Text>
               
                </TouchableOpacity>
                
            
            </View>
        )
        } }
       
            //keyExtractor={item => item.id}
          />
        </View>

        <View style={{paddingTop:25,paddingLeft:20}}>
        <Text style={{color:'black',fontSize:15}}>Press the Complain Location which you want to close</Text>
    </View>
       
    

    </View>
  );
}




