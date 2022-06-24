import firestore from '@react-native-firebase/firestore';
import React,{useState,useEffect} from 'react';
import { Button,Text,TextInput, View, StyleSheet,TouchableOpacity ,Alert, ActivityIndicator,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

export default function ViewcomplainsUser({ navigation}) {

  //const [complaintid,setComplaintId]= useState('');
  const [complaints,setComplaints]= useState([]);
  const [loading,setLoading] = useState(true); 
  const [cid,setcid] = useState(''); 
  const [uiid,setuiid] = useState('');     

  //setuiid( auth().currentUser.uid )

  async function subscriber(){  
  await firestore()
  .collection('complaint')
  //.doc(auth().currentUser.uid)
  .where("userid",'==',auth().currentUser.uid)
  .get()
  .then(querySnapshot => {
      const complaintArray = [];
  
    querySnapshot.forEach(documentSnapshot => {
      complaintArray.push({
          ...documentSnapshot.data(),
        complaintid: documentSnapshot.id
      })
      console.log('User ID: ', documentSnapshot.id, documentSnapshot.data().description);
    });
    setComplaints(complaintArray);
    setLoading(false);
  });
  ;
// console.log(books[0]);

// Unsubscribe from events when no longer in use
//return () => subscriber();
}


    useEffect(()=>{
        subscriber();
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

//   function ComplainCloseN(cid){    
//    firestore()
//   .collection('complaint')
//   .doc(cid)
//   .update({
//     status: false
//   })
//   .then(() => {
//     console.log('Your Profile is Updated!');
//     Alert.alert(
//         "Profile Updated"
//       )
//       //navigation.navigate('home')
//   }); }
    
  if(loading) return <ActivityIndicator size='large'/>
  return (
    <View style={{marginTop:70}}>

        <Text style={{color:'#11c09f', fontSize:20, fontWeight:'bold', marginLeft:100}}>Your Complains</Text>

    <View >
          <FlatList
            data={complaints}
            renderItem={({ item }) => {

            return(

            <View style={{marginTop:18, borderColor:'#11c09f', borderWidth:2, marginRight:70, borderRadius:15, height:50, paddingLeft:10, marginLeft:70}}>
                
                  <Text style={{color:'black'}}>Description: {item.description}</Text>
                  <Text style={{color:'black'}}>Location: {item.location}</Text>
                 
               
                
                
            
            </View>
        )
        } }
       
            //keyExtractor={item => item.id}
          />
          <View>
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
           onPress={() => navigation.navigate('home')}
           >
         <Text style={{fontSize:17, color: 'white'}}>Main Menu</Text>
    </TouchableOpacity>

          </View>
        </View>
    

    </View>
  );
}




