import React, {useState, useEffect, useContext} from 'react';
import { Dimensions, StyleSheet, View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import TicTacToe from "./Subcomponents/TicTacToeGrid";
import Groupdata from "./Subcomponents/Groupdata";
import emailContext from "../Emailcontext.js";
import groupContext from "../Groupcontext.js";
import firebase from "../Firebase/Config.js";
import { createStackNavigator, useHeaderHeight } from "@react-navigation/stack";
import { scale, ScaledSheet } from 'react-native-size-matters';

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

import  { Col, Row, Grid } from 'react-native-easy-grid';


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
 
const App = () => {

  const [groupmatedata, setGroupmatedata] = useState([]);
  const { emailGlobal, setEmailGlobal } = useContext(emailContext);
  const { groupGlobal, setGroupGlobal } = useContext(groupContext);
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    console.log("Hello", headerHeight)
  }, [])

useEffect(() => {
  const usersRef = firebase.firestore().collection("users");
    usersRef
      .where("group", "==", groupGlobal)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
        let newData = doc.data();
          if (groupmatedata.indexOf(newData.id) === -1) {
      setGroupmatedata((arr) => {
                  return [...arr, newData];
                });
                } else {
                console.log("this is a duplicate");
                }
              });
            })
            .catch((e) => console.log(e));
}, [])

useEffect(() => {
  console.log("this is the group data", groupmatedata);
}, [groupmatedata]);

      return (
       <SafeAreaView style={{height: (windowHeight - headerHeight), backgroundColor: "black"}}>
        <View style={styles.container2}>
        <View  style={{flex: windowWidth + headerHeight + 10}}>
     <TouchableOpacity>
      <TicTacToe />
      </TouchableOpacity>
      </View>
    
      <View style={{flex: (((windowHeight - windowWidth) - headerHeight)), alignItems: "center"}}>
      <View style={styles.container}>
      <Text style={styles.text}> Choose an available player</Text>
      </View>
      <ScrollView>
      {
      groupmatedata.length > 0 && 
      groupmatedata.map((info, value) => (
    <View key={value}>
        <View>
          <View style={styles.scrollview}>
            <Groupdata
              email={info.email}
              username={info.username}
              group={info.group}
            />
          </View>
        </View>
        </View>
      ))
          }
</ScrollView>

      </View> 
      </View>
      </SafeAreaView>
  
        
      )
    }
  export default App;

  const styles = ScaledSheet.create({
    container1: {
      backgroundColor: "red",
      
     },
    
    container2: {
    
      flex:1,
      flexDirection: "column",
    },
  
   scrollview: {
     width: "300@s",
     alignItems: "center"
   },
   container: {
    backgroundColor:"white",
    borderWidth: "4@s",
    borderColor: "#8959DF",
    padding: "7@s",
    width: "300@s",
    marginBottom: "12@s",
    borderRadius: "20@s",
    shadowColor: "white",
    shadowOffset: { width: "0.5@s", height: "0.5@s" },
    shadowOpacity: "1@s",
    shadowRadius: "0.5@s",
   
    lineHeight: "24@s",
    alignItems: "center",
  }, 
  text: {
  fontSize: "20@s", 
  color: "#8959DF", 

  }
  });
 

