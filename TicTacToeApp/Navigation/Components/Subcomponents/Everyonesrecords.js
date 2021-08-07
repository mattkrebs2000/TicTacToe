import React, { useEffect } from "react";
import { StyleSheet, View, Text,Image, TouchableOpacity} from "react-native";
import { scale, ScaledSheet } from 'react-native-size-matters';
import firebase from "../../Firebase/Config.js";

import { AppLoading, Font } from "expo";

const Everyonesrecords = ({ username, email, group, id, idGlobal, box1, setBox1, box2, setBox2, box3, setBox3, box4, setBox4, box5, setBox5, box6, setBox6, box7, setBox7, box8, setBox8, box9, setBox9, turnx, setTurnx, gameon, setGameon, gameId, setGameId, populate, wins, losses, ties}) => {

  return (

  <View onPress={
    () => {      }}>
    <View style={styles.container} >
     <Text style={styles.text}>{username}: {wins}-{losses}-{ties}</Text>
    </View>
  </View>
)};

export default Everyonesrecords;

const styles = ScaledSheet.create({
  container: {
    backgroundColor:"white",
    borderWidth: "4@s",
    borderColor: "#8959DF",
    padding: "7@s",
    width: "255@s",
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
  fontSize: "20@s" , 
  color: "#8959DF",
  }
});
