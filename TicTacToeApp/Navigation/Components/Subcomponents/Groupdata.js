import React, { useEffect, useState, useContext } from "react";
import {Dimensions, StyleSheet, View, Text,Image, TouchableOpacity, ScrollView} from "react-native";
import { scale, ScaledSheet } from 'react-native-size-matters';
import firebase from "../../Firebase/Config.js";
import Groupdata2 from "./GroupData/Groupdata2";
import emailContext from "../../Emailcontext.js";
import groupContext from "../../Groupcontext.js";
import idContext from "../../Idcontext.js";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { createStackNavigator, useHeaderHeight } from "@react-navigation/stack";

import { AppLoading, Font } from "expo";


const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Groupdata = ({ populate, gameId, box1,
  setBox1,
  box2,
  setBox2,
  box3,
  setBox3,
  box4,
  setBox4,
  box5,
  setBox5,
  box6,
  setBox6,
  box7,
  setBox7,
  box8,
  setBox8,
  box9,
  setBox9,
  turnx,
  setTurnx,
  gameon,
  setGameon, setGameId, getRecords, getAllrecords }) => {
  const [groupmatedata, setGroupmatedata] = useState([]);

  const { emailGlobal, setEmailGlobal } = useContext(emailContext);
  const { groupGlobal, setGroupGlobal } = useContext(groupContext);
  const { idGlobal, setIdGlobal } = useContext(idContext);

  const headerHeight = useHeaderHeight();



  useEffect(() => {
    if (idGlobal){
      
    const itemtoupdate = firebase.firestore().collection("users").doc(idGlobal);
    itemtoupdate.update({
      active: true,
    });
  }
  }, []);

  const firestore = firebase.firestore();
  const messagesRef = firestore.collection("users");
  const query = messagesRef;
  const [active] = useCollectionData(query, { idField: "id" });

  useEffect(() => {

    console.log(
      "this is the email and the group",
      emailGlobal,
      groupGlobal,
      idGlobal,"gameId here",
      gameId,
      "gameId here",
      "this is the email and the group"
    );

    if (active) {
      getOtherusers();
      getRecords();
      getAllrecords();
    }
  }, [active]);

  const getOtherusers = () => {
    setGroupmatedata([]);
    let newData = [];
    const usersRef = firebase.firestore().collection("users");
    usersRef
      .where("group", "==", groupGlobal)
      .where("id", "!=", idGlobal)
      .where("active", "==", true)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          let newData = doc.data();

if (idGlobal == newData.id) {
          setGameId(newData.gameId)
}

          console.log("was the game ID set here?")
          if (groupmatedata.indexOf(newData.id) === -1) {
            console.log("the groupmate data is being set", "gameId", gameId, "gameId");
            setGroupmatedata((arr) => {
              return [...arr, newData];
            });
          } else {
            console.log("this is a duplicate");
          }
        });
      })
      .catch((e) => console.log(e));
  };

return (

  <View>
            <View style={styles.container}>
              <Text style={styles.text}> Choose an available player</Text>
            </View>
            <ScrollView>
              {groupmatedata.length > 0 &&
                groupmatedata.map((info, value) => (
                  <View key={value}>
                    <View>
                      <View style={styles.scrollview}>
                        <Groupdata2
                          email={info.email}
                          username={info.username}
                          group={info.group}
                          id={info.id}
                          idGlobal={idGlobal}
                          box1={box1}
                          setBox1={setBox1}
                          box2={box2}
                          setBox2={setBox2}
                          box3={box3}
                          setBox3={setBox3}
                          box4={box4}
                          setBox4={setBox4}
                          box5={box5}
                          setBox5={setBox5}
                          box6={box6}
                          setBox6={setBox6}
                          box7={box7}
                          setBox7={setBox7}
                          box8={box8}
                          setBox8={setBox8}
                          box9={box9}
                          setBox9={setBox9}
                          turnx={turnx}
                          setTurnx={setTurnx}
                          gameon={gameon}
                          setGameon={setGameon}
                          gameId={gameId}
                          setGameId={setGameId}
                          populate={populate}
                        />
                      </View>
                    </View>
                  </View>
                ))}
            </ScrollView>
            </View>
        


)

//   useEffect(() => {
//     if (gameId.length > 2){
//    setGameon(true)
//     }
//   }, [gameId])


// useEffect(() => {
//   if (gameon){
//  populate()
//   }
// }, [gameon])

// const addGame = () => {

// const db = firebase.firestore().collection("game")

// db.add({
//   player1: id,
//   player2: idGlobal,
//   box1: box1,
//   box2: box2,
//   box3: box3,
//   box4: box4,
//   box5: box5,
//   box6: box6,
//   box7: box7,
//   box8: box8,
//   box9: box9,
//   turnx: false,
//   gameon: true })

// .then((docRef) => {
//   setGameId(docRef.id);
//   console.log("or was the game Id set here?")
//   const itemtoupdate = firebase.firestore().collection("game").doc(docRef.id);
//   const itemtoupdate2 = firebase.firestore().collection("users").doc(id);
//   const itemtoupdate3 = firebase.firestore().collection("users").doc(idGlobal);

//       itemtoupdate.update({
//         id: docRef.id
//       });
//       itemtoupdate2.update({
//         gameId: docRef.id
//       });
//       itemtoupdate3.update({
//         gameId: docRef.id
//       });
     

//   console.log("Document written with ID: ", docRef.id);
// })
// .catch((error) => {
//   console.error("Error adding document: ", error);
// });
// }
//   return (


//   <TouchableOpacity onPress={
//     () => { addGame()}}>
//     <View style={styles.container} >
//      <Text style={styles.text}>{username}</Text>
//     </View>
//   </TouchableOpacity>
// )};

}

export default Groupdata;

const styles = ScaledSheet.create({
  scrollview: {
    width: "300@s",
    alignItems: "center",
  },
  container: {
    backgroundColor: "white",
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
  },
});
