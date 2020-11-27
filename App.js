import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,ScrollView, TextInput, Modal, Button, FlatList } from 'react-native';

export default function App() {
  const [getOriginalPrice, setOriginalPrice] = useState("");
  const [getDiscountPercentage,setDiscountPercentage] = useState("");
  const [getSaving, setSaving] = useState("0.0");
  const [getFprice,setFprice] = useState("0.0");
  const [getHistory, setHistory] = useState([""]);
  const [getModalVisible, setModalVisible] = useState(false);
  
  const saveDiscount = () =>{
    var ogPrice = getOriginalPrice;
    var dPercentage = getDiscountPercentage;
    var fPrice = getFprice;
    var detail = ogPrice +"|------|"+dPercentage+"|------|"+fPrice;
    setHistory([...getHistory, detail]);
    setOriginalPrice("");
    setDiscountPercentage("");
   } 

  
  const countDiscountPrice = () =>{
      if(getDiscountPercentage == 100){
        alert("Discount Percentage cannot be greater or equal than Original Price");
      }
      else if(isNaN(getOriginalPrice) || isNaN(getDiscountPercentage)){
        alert("Please Enter Valid Input");
      }
      else if (getDiscountPercentage <= 0){
        alert("Discount Percentage cannot be Zero");
      }
      else if(getOriginalPrice <= 0){
        alert("Original Price cannot be zero or negative");
      }
      else{
        var saving = (getOriginalPrice * getDiscountPercentage)/100;
        setSaving(saving);
        var total = getOriginalPrice - saving;
        setFprice(total);
      }
  }

  
  return (
    <View style={styles.container}> 
      
      <Text style={{fontSize:30,fontWeight:'bold',color:'tomato'}}>Discount Calculator</Text>
      
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputtext} value = {getOriginalPrice} onChangeText={(originalPrice) =>  setOriginalPrice(originalPrice)} placeholder="Original Price"/>
        <Text></Text>
      </View>
      
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputtext} value = {getDiscountPercentage} onChangeText={(discountPercentage) =>  setDiscountPercentage(discountPercentage)} placeholder="Discount Percentage"/>
      </View>

      <View>
        <TouchableOpacity onPress={countDiscountPrice}>
          <Text style={{fontSize:30, alignItems:"center", justifyContent:"center",fontWeight:'bold',backgroundColor:"white",borderRadius:10,borderColor:'seagreen',color:"seagreen" ,borderWidth:2,width:"100%"}}>Calculate</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text style={{fontSize:20,fontWeight:'bold',padding:5}}>You Save $: {getSaving}</Text>
        <Text style={{fontSize:20,fontWeight:'bold',padding:5}}>Final Price $: {getFprice}</Text>
      </View>

      <View>
        <TouchableOpacity onPress={saveDiscount}> 
          <Text style={{fontSize:20,fontWeight:'bold',color:"white",backgroundColor:"green",borderRadius:50,padding:5, width:"100%",borderWidth:2,alignItems:"center",justifyContent:"center",borderColor:'black',padding:10}}>Save</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={{fontSize:40,color:"tomato",fontWeight:'bold', alignItems:"center", justifyContent:"center"}}>History</Text>
        <Text style={{fontSize:12,fontWeight:'bold',color:'orange'}}>Original Price in $|---| Discount Price in $|---| Final Price in $</Text>
      </View>

     
    
      <ScrollView>

        <FlatList
          data={getHistory}  renderItem={({ item }) => { return <Text>{item}</Text> }} 
          keyExtractor={(index) => { return index }} />
      
      </ScrollView>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    paddingTop:50,
    flex: 1,
    backgroundColor: 'aqua',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputtext:{
    width:"90%",
    borderColor:'red',
    borderWidth:2,
    fontSize:20,
    padding:10,
  },
  inputContainer:{
    flexDirection:'row',
    width:'70%',
    justifyContent:'space-between',
    alignItems:"center",
    padding:5,
  }
});