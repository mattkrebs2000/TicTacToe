import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const App = () => {

  const [boxone, setBoxone] = useState("");
  const [boxtwo, setBoxtwo] = useState("");
  const [boxthree, setBoxthree] = useState("");
  const [boxfour, setBoxfour] = useState("");
  const [boxfive, setBoxfive] = useState("");
  const [boxsix, setBoxsix] = useState("");
  const [boxseven, setBoxseven] = useState("");
  const [boxeight, setBoxeight] = useState("");
  const [boxnine, setBoxnine] = useState("");
  



  return (
    <View style={styles.container}>
    <View style={styles.container2}>
      <Text style= {styles.firstrow}>x|x|x</Text>
      <View style= {styles.firstdivider}></View>
      <Text style= {styles.secondrow}>x|x|x</Text>
      <View style= {styles.seconddivider}></View>
      <Text style= {styles.thirdrow}>x|x|x</Text>
</View>
      <StatusBar style="auto" />
    </View>
  );
}

export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    width: "90%",
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstdivider:{ 
    height: 10,
    width:"100%",
    backgroundColor: "black"
  },
  seconddivider:{ 
    height: 10,
    width:"100%",
    backgroundColor: "black"
  },
 
  firstrow: {
    fontSize: 130,
    bottom:-12,
   
  },
  secondrow: {
    fontSize: 130,
    marginTop: -20,
    marginBottom: -35,
    top:-20,
    
  },
  thirdrow: {
    fontSize: 130,
    top:-12,
    marginTop: -20,
  }

});
