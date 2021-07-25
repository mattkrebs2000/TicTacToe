import React, {useState, useEffect, useContext} from 'react';
import { Dimensions, StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import TicTacToe from "./Subcomponents/TicTacToeGrid";
import Groupdata from "./Subcomponents/Groupdata";
import emailContext from "../Emailcontext.js";
import groupContext from "../Groupcontext.js";
import firebase from "../Firebase/Config.js";
import { createStackNavigator, useHeaderHeight } from "@react-navigation/stack";

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
       <SafeAreaView style={{height: (windowHeight - headerHeight), backgroundColor: "green"}}>
        <View style={styles.container2}>
        <View  style={{flex: windowWidth + headerHeight + 10}}>
     <TouchableOpacity>
      <TicTacToe />
      </TouchableOpacity>
      </View>
    
      <View style={{flex: (((windowHeight - windowWidth) - headerHeight)), alignItems: "center"}}>
      {
      groupmatedata.length > 0 && 
      groupmatedata.map((info, value) => (
    <View key={value}>
        <View>
          <TouchableOpacity onPress={
            () => { console.log("You impressed me")}}>
            <Groupdata
              email={info.email}
              username={info.username}
              group={info.group}
            />
          </TouchableOpacity>
        </View>
        </View>
      ))
          }


      </View> 
      </View>
      </SafeAreaView>
  
        
      )
    }
  export default App;

  const styles = StyleSheet.create({
    container1: {
      backgroundColor: "red",
      
     },
    
    container2: {
    
      flex:1,
      flexDirection: "column",
    },
   section1: {
     
    },
    section2: {

    
    },

  
  });
 

