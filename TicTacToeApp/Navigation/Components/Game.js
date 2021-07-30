import React, { useState, useEffect, useContext } from "react";

import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import TicTacToe from "./Subcomponents/TicTacToeGrid";
import Groupdata from "./Subcomponents/Groupdata";
import emailContext from "../Emailcontext.js";
import groupContext from "../Groupcontext.js";
import idContext from "../Idcontext.js";
import firebase from "../Firebase/Config.js";
import { createStackNavigator, useHeaderHeight } from "@react-navigation/stack";
import { scale, ScaledSheet } from "react-native-size-matters";
import { useCollectionData } from "react-firebase-hooks/firestore";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

import { Col, Row, Grid } from "react-native-easy-grid";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const App = ({ navigation }) => {
  const [groupmatedata, setGroupmatedata] = useState([]);
  const [toggle, setToggle] = useState([]);
  const [box1, setBox1] = useState("");
  const [box2, setBox2] = useState("");
  const [box3, setBox3] = useState("");
  const [box4, setBox4] = useState("");
  const [box5, setBox5] = useState("");
  const [box6, setBox6] = useState("");
  const [box7, setBox7] = useState("");
  const [box8, setBox8] = useState("");
  const [box9, setBox9] = useState("");
  const [turnx, setTurnx] = useState(true);
  const [gameon, setGameon] = useState(true);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [gameId, setGameId] = useState("");
  const [whourplaying, setWhourplaying] = useState("");
  const { emailGlobal, setEmailGlobal } = useContext(emailContext);
  const { groupGlobal, setGroupGlobal } = useContext(groupContext);
  const { idGlobal, setIdGlobal } = useContext(idContext);

  const firestore = firebase.firestore();
  const messagesRef = firestore.collection("users");
  const query = messagesRef;
  const [active] = useCollectionData(query, { idField: "active" });

  useEffect(() => {
    if (active) {
      console.log("this one got activated")
      getOtherusers();
    }
  }, [active]);

 
  const gameRef = firestore.collection("game");
  const query2 = gameRef;
  const [checkGame] = useCollectionData(query2, {idField: "id"});

  useEffect(() => {

    if (checkGame) {
      console.log("this is being run now");
     updategame();
    }
  }, [checkGame]);

  const headerHeight = useHeaderHeight();

  const leave = () => {
    let id = idGlobal;
    const itemtoupdate = firebase.firestore().collection("users").doc(id);
    itemtoupdate.update({
      active: false,
    });

    setGroupGlobal("");
    setEmailGlobal("");
    setIdGlobal("");
    navigation.navigate("SignIn");
    console.log(
      "this is the email and the group",
      emailGlobal,
      groupGlobal,
      idGlobal,
      "this is the email and the group"
    );
  };

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => leave()}>
          <Text accessibilityLabel="Sign Out" style={styles.text5}>
            Sign Out
          </Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  useEffect(() => {
    if (idGlobal.length > 0) {
      let id = idGlobal;
      const itemtoupdate = firebase.firestore().collection("users").doc(id);

      itemtoupdate.update({
        active: true,
      });
    }
    getOtherusers();
  }, []);


  const getOtherusers = () => {
    setGroupmatedata([]);
    const usersRef = firebase.firestore().collection("users");
    usersRef
      .where("group", "==", groupGlobal)
      .where("id", "!=", idGlobal)
      .where("active", "==", true)
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
  };

  const updategame = () => {
if (gameId.length > 2){

    return firebase
      .firestore()
      .collection("game")
      .doc(gameId)
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log("We have found the game:", doc.data());
          setBox1(doc.data().box1);
          setBox2(doc.data().box2);
          setBox3(doc.data().box3);
          setBox4(doc.data().box4);
          setBox5(doc.data().box5);
          setBox6(doc.data().box6);
          setBox7(doc.data().box7);
          setBox8(doc.data().box8);
          setBox9(doc.data().box9);
console.log("we have updated the game");
          
      } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
      }
  }).catch((error) => {
      console.log("Error getting document:", error);
      })
      .catch((e) => console.log(e));
    }
  };



  return (
    <SafeAreaView
      style={{ height: windowHeight - headerHeight, backgroundColor: "black" }}
    >
      <View style={styles.container2}>
        <View style={{ flex: windowWidth + headerHeight + 10 }}>
          <TicTacToe
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
          />
        </View>

        <View
          style={{
            flex: windowHeight - windowWidth - headerHeight,
            alignItems: "center",
          }}
        >
          <View style={styles.container}>
            <Text style={styles.text}> Choose an available player</Text>
          </View>
          <ScrollView>
            {groupmatedata.length > 0 &&
              groupmatedata.map((info, value) => (
                <View key={value}>
                  <View>
                    <View style={styles.scrollview}>
                      <Groupdata
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
                      />
                    </View>
                  </View>
                </View>
              ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = ScaledSheet.create({
  container1: {
    backgroundColor: "black",
  },

  container2: {
    flex: 1,
    flexDirection: "column",
  },

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
  text5: {
    color: "white",
    fontSize: "15@s",
    marginRight: "5@s",
  },
});
