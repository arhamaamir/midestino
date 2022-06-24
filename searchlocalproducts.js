import firestore from '@react-native-firebase/firestore';
import React,{useState,useEffect} from 'react';
import { Button,Text,TextInput, View, StyleSheet,TouchableOpacity ,Alert, ActivityIndicator,FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';

export default function SearchLocalP({ navigation}) {

  //const [complaintid,setComplaintId]= useState('');
  const [productss,setProducts]= useState([]);
  const [loading,setLoading] = useState(true); 
  const [cid,setcid] = useState(''); 
  const [uiid,setuiid] = useState('');   
  const [pproduct,setPProduct] = useState('');  

  useEffect(()=>{
    getproduct();
  },[])

  async function getproduct(){  
  try {
    await firestore()
  .collection('product')
  .where("description",'==',pproduct)
  .get()
  .then(querySnapshot => {
    const productArray = [];
    querySnapshot.docs.forEach(documentSnapshot => {
      productArray.push({
          ...documentSnapshot.data()
      })
      //console.log('User ID: ', documentSnapshot.id, documentSnapshot.data().description);
    });
    console.log(productArray);
    setProducts(productArray);
    // console.log(products);
    
    setLoading(false);
  });
  } catch (error) {
    console.log(error)
  }
  ;
// console.log(books[0]);

// Unsubscribe from events when no longer in use
//return () => subscriber();

}


    


    
  if(loading) return <ActivityIndicator size='large'/>

  return (
    <View style={{marginTop:70}}>

    <View >
    <View style={{marginLeft:40, marginTop:70}}>
        <Text style={{fontWeight:'bold', color:'#11c09f', marginBottom:10, fontSize:25}}>
          Search Products by Name/Description
        </Text>
      </View>
      <View style={{paddingTop:10}}>
    <Text style={{marginLeft:38,fontSize:15,fontWeight:'bold', color:'#11c09f', marginBottom:10}}>Enter Name:</Text>
    <TextInput
        style={{height: 40,borderWidth:2,marginLeft:35,marginRight:35,borderColor:'#11c09f',borderRadius:20,color:'black', paddingLeft:15}}
        placeholder="Enter Product Name Here"
        placeholderTextColor={'black'}
        onChangeText={(val)=> setPProduct(val)}
        ></TextInput>      
    </View>

          <FlatList
            data={productss}
            renderItem={({ item }) => {

            return(

            <View style={{marginTop:18, borderColor:'#11c09f', borderWidth:2, marginRight:70, borderRadius:15, height:60, paddingLeft:10, marginLeft:70}}>
                
                  <Text style={{color:'black'}}>Description: {item.description}</Text>
                  <Text style={{color:'black'}}>Location: {item.location}</Text>
                  <Text style={{color:'black'}}>Price: {item.price}</Text>

            
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
           onPress={()=>{getproduct()}}
           >
         <Text style={{fontSize:17, color: 'white'}}>Search</Text>
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
           onPress={() => navigation.navigate('home')}
           >
         <Text style={{fontSize:17, color: 'white'}}>Main Menu</Text>
    </TouchableOpacity>

          </View>
        </View>
    

    </View>
  );
}




