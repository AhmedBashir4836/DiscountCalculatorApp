import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Discount Calculator</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputtext} placeholder="Original Price"/>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.inputtext} placeholder="Discount Percentage"/>
      </View>

      <View style={styles.container}>
      <View style={{flexDirection:'row'}}>
        
        <TouchableOpacity style={styles.box}>
          <Text>1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <Text>2</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <Text>3</Text>
        </TouchableOpacity>
      </View>
      
      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={styles.box}>
          <Text>4</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <Text>5</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <Text>6</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={styles.box}>
          <Text>7</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <Text>8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <Text>9</Text>
        </TouchableOpacity>
      </View>

      <View style={{flexDirection:'row'}}>
        <TouchableOpacity style={styles.box}>
          <Text>C</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <Text>0</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.box}>
          <Text>.</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity>
          <Text style={{borderWidth:3,borderColor:'orange', borderRadius:50,fontSize:20,width:"100%"}}>Calculate</Text>
        </TouchableOpacity>
     </View>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:80,
    flex: 1,
    backgroundColor: '#fff',
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
  },
  box:{
    paddingLeft:40,
    alignSelf:"center",
    borderWidth:1,
    width:100,
    height:100,
    borderColor:'white',
    marginLeft:10,
  }
});