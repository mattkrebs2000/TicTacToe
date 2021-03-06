import React, { useEffect } from "react";
import { StyleSheet, View, Text,Image, TouchableOpacity} from "react-native";
import { scale, ScaledSheet } from 'react-native-size-matters';
import firebase from "../../../Firebase/Config.js";

import { AppLoading, Font } from "expo";

const Groupdata = ({ username, email, group, id, idGlobal, box1, setBox1, box2, setBox2, box3, setBox3, box4, setBox4, box5, setBox5, box6, setBox6, box7, setBox7, box8, setBox8, box9, setBox9, turnx, setTurnx, gameon, setGameon, gameId, setGameId, populate}) => {


  useEffect(() => {
    if (gameId.length > 2){
   setGameon(true)
    }
  }, [gameId])


useEffect(() => {
  if (gameon){
 populate()
  }
}, [gameon])

const addGame = () => {

const db = firebase.firestore().collection("game")

db.add({
  player1: id,
  player2: idGlobal,
  box1: box1,
  box2: box2,
  box3: box3,
  box4: box4,
  box5: box5,
  box6: box6,
  box7: box7,
  box8: box8,
  box9: box9,
  turnx: false,
  gameon: true })

.then((docRef) => {

  setGameId(docRef.id);
const playerone = docRef.id;
const playertwo = docRef.idGlobal;
  console.log("or was the game Id set here?")
  const itemtoupdate = firebase.firestore().collection("game").doc(docRef.id);
  const itemtoupdate2 = firebase.firestore().collection("users").doc(id);
  const itemtoupdate3 = firebase.firestore().collection("users").doc(idGlobal);


      itemtoupdate.update({
        id: docRef.id
      });
      itemtoupdate2.update({
        gameId: docRef.id
      });
      itemtoupdate3.update({
        gameId: docRef.id
      });
 

  console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
  console.error("Error adding document: ", error);
});
}
  return (


  <TouchableOpacity onPress={
    () => { addGame()}}>
    <View style={styles.container} >
     <Text style={styles.text}>{username}</Text>
    </View>
  </TouchableOpacity>
)};

export default Groupdata;

const styles = ScaledSheet.create({
  container: {
    backgroundColor:"white",
    borderWidth: "4@s",
    borderColor: "#8959DF",
    padding: "7@s",
    width: "175@s",
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
