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
import Records from "./Subcomponents/Records";
import Everyonesrecords from "./Subcomponents/Everyonesrecords"
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
  const [recordsdata, setRecordsdata] = useState([]);
  const [allrecordsdata, setAllrecordsdata] = useState([]);

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
  const [turnx, setTurnx] = useState(false);
  const [gameon, setGameon] = useState(true);
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const [gameId, setGameId] = useState("");
  const [whourplaying, setWhourplaying] = useState("");
  const [grouponly, setGrouponly] = useState(true);
  const { emailGlobal, setEmailGlobal } = useContext(emailContext);
  const { groupGlobal, setGroupGlobal } = useContext(groupContext);
  const { idGlobal, setIdGlobal } = useContext(idContext);




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
  const [active] = useCollectionData(query, { idField: "active" });

  useEffect(() => {
    if (active) {
      // console.log("this one got activated",gameId, idGlobal, groupGlobal, active, "this one got activated");
      getOtherusers();
    }
  }, [active]);

  const gameRef = firestore.collection("game");
  const query2 = gameRef;
  const [checkGame] = useCollectionData(query2, { idField: "id" });

  useEffect(() => {
    if (checkGame) {
      populate();
    }
  }, [checkGame]);
 
  const query3 = gameRef;
  const [gameon2] = useCollectionData(query3, { idField: "gameon" });

  useEffect(() => {
    if (gameon == true && gameId.length>2) {
   
    getRecords();
    getAllrecords();
    
  }
}, [gameon]);



const getRecords = () => {
  setRecordsdata([]);
  const usersRef = firebase.firestore().collection("users");
  usersRef
    .where("group", "==", groupGlobal)
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        let newData = doc.data();
        if (recordsdata.indexOf(newData.id)=== -1) {
          // console.log("include this in the data", newData.id);
          setRecordsdata((arr) => {
            return [...arr, newData];
          });
        } else {
          console.log("this is a duplicate");
        }
      });
    })
    .catch((e) => console.log(e));
};


const getAllrecords = () => {
  setAllrecordsdata([]);
  const usersRef = firebase.firestore().collection("users");
  usersRef
    .get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        let newData = doc.data();
       
        if (recordsdata.indexOf(newData.id)=== -1) {
          console.log("include this in the data", newData.id);
          setAllrecordsdata((arr) => {
            return [...arr, newData];
          });
        } else {
          console.log("this is a duplicate");
        }
      });
      console.log("yo", allrecordsdata, "yo");
    })
    
    .catch((e) => console.log(e));
};




  const headerHeight = useHeaderHeight();

  const leave = () => {
    // console.log("leave function was just run", gameId, "leave function was just run");
   
      let id = idGlobal;
      const itemtoupdate = firebase.firestore().collection("users").doc(id);
      itemtoupdate.update({
        active: false,
        gameId: "",
      });

      setGroupGlobal("");
      setEmailGlobal("");
      setIdGlobal("");
      navigation.navigate("SignIn");
      // console.log(
      //   "this is the email and the group",
      //   emailGlobal,
      //   groupGlobal,
      //   idGlobal,
      //   "this is the email and the group"
      // );
 
  };

  useEffect(() => {
    // if (idGlobal.length > 2 && gameon == false) {
      navigation.setOptions({
        headerLeft: () => (
          <TouchableOpacity onPress={() => leave()}>
            <Text accessibilityLabel="Sign Out" style={styles.text5}>
              Sign Out
            </Text>
          </TouchableOpacity>
        ),
      });
    // } else if (idGlobal.length < 2){
    //   navigation.setOptions({
    //     headerLeft: () => (
    //       <TouchableOpacity onPress={() => leave()}>
    //         <Text accessibilityLabel="Sign Out" style={styles.text5}>
    //           Sign In
    //         </Text>
    //       </TouchableOpacity>
    //     ),
    //   });
    // } else {
    //   null
    // }
  }, []);

  // useEffect(() => {
  //   if (idGlobal.length > 0) {
  //     let id = idGlobal;
  //     const itemtoupdate = firebase.firestore().collection("users").doc(id);

  //     itemtoupdate.update({
  //       active: true,
  //     });
  //   }
  //   getOtherusers();
  // }, []);

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
          setGameId(newData.gameId)
          // console.log(
          //   "this is the document data",
          //   doc.data(),
          //   "this is the document data"
          // );
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



  const populate = (data) => {
    const usersRef = firebase.firestore().collection("game");
    usersRef
      .where("id", "==", gameId)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          let newData = doc.data();
          // console.log(newData, "yyyyyyo");
          setBox1(newData.box1);
          setBox2(newData.box2);
          setBox3(newData.box3);
          setBox4(newData.box4);
          setBox5(newData.box5);
          setBox6(newData.box6);
          setBox7(newData.box7);
          setBox8(newData.box8);
          setBox9(newData.box9);
          setTurnx(newData.turnx);
          setPlayer1(newData.player1);
          setPlayer2(newData.player2);
          setGameon(newData.gameon);
        });
      })
      .catch((e) => console.log(e));
  };

  return (
    <SafeAreaView
      style={{ height: windowHeight - headerHeight, backgroundColor: "black" }}
    >
      <View style={styles.container2}>
        <View style={{ flex: windowWidth + headerHeight + 50 }}>
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
            setGameId={setGameId}
            player1={player1}
            player2={player2}
          />
        </View>

        {gameId.length < 1 && idGlobal.length > 2 ? (
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
                          populate={populate}
                        />
                      </View>
                    </View>
                  </View>
                ))}
            </ScrollView>
          </View>
        )   : gameId.length > 2 && idGlobal.length > 2 && grouponly ? (
          <View
            style={{
              flex: windowHeight - windowWidth - headerHeight,
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={styles.container} onPress={
              () => {setGrouponly(false)}}>
              <Text style={styles.text}>Players in your Group (W-L-T)</Text>
            </TouchableOpacity>
            <ScrollView>
              {recordsdata.length > 0 &&
                recordsdata.map((info, value) => (
                  <View key={value}>
                    <View>
                      <View style={styles.scrollview}>
                        <Records
                          email={info.email}
                          username={info.username}
                          group={info.group}
                          id={info.id}
                          wins={info.wins}
                          losses={info.losses}
                          ties={info.ties}
                          idGlobal={idGlobal}
                        />
                      </View>
                    </View>
                  </View>
                ))}
            </ScrollView>
          </View>) : gameId.length > 2 && idGlobal.length > 2 && !grouponly ? (
            <View
              style={{
                flex: windowHeight - windowWidth - headerHeight,
                alignItems: "center",
              }}
            >
              <TouchableOpacity style={styles.container} onPress={
                () => {setGrouponly(true)}}>
                <Text style={styles.text}>All Players (W-L-T)</Text>
              </TouchableOpacity>
              <ScrollView>
                {allrecordsdata.length > 0 &&
                  allrecordsdata.map((info, value) => (
                    <View key={value}>
                      <View>
                        <View style={styles.scrollview}>
                          <Everyonesrecords
                            email={info.email}
                            username={info.username}
                            group={info.group}
                            id={info.id}
                            wins={info.wins}
                            losses={info.losses}
                            ties={info.ties}
                            idGlobal={idGlobal}
                          />
                        </View>
                      </View>
                    </View>
                  ))}
              </ScrollView>
            </View>): (<View
        style={{
          flex: windowHeight - windowWidth - headerHeight,
          alignItems: "center",
        }}
      >
        <TouchableOpacity style={styles.container} onPress={() =>  navigation.navigate("SignIn")}>
          <Text style={styles.text}>Sign In to Compete</Text>
        </TouchableOpacity>
        <ScrollView>
          {groupmatedata.length > 0 &&
            groupmatedata.map((info, value) => (
              <View key={value}>
                <View>
                  <View style={styles.scrollview}>
                  
                  </View>
                </View>
              </View>
            ))}
        </ScrollView>
      </View>) }
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
