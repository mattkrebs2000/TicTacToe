import React, { useState, useEffect, useContext } from "react";

import firebase from "../../Firebase/Config.js";

import { Dimensions, StyleSheet, View, Text, SafeAreaView } from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";

import idContext from "../../Idcontext.js";

import { Col, Row, Grid } from "react-native-easy-grid";

const TicTacToeGrid = ({
  box1,
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
  setGameon,
  gameId,
  setGameId,
  player1,
  player2,
  idglobal2,
  namethisuser,
}) => {
  const [method1, setMethod1] = useState(false);
  const [method2, setMethod2] = useState(false);
  const [method3, setMethod3] = useState(false);
  const [method4, setMethod4] = useState(false);
  const [method5, setMethod5] = useState(false);
  const [method6, setMethod6] = useState(false);
  const [method7, setMethod7] = useState(false);
  const [method8, setMethod8] = useState(false);
  const [remaining, setRemaining] = useState([]);
  const [newnumber, setNewnumber] = useState(-1);
  const [output, setOutput] = useState(0);

  const { idGlobal, setIdGlobal } = useContext(idContext);

  useEffect(() => {
    console.log("is this the last thing to be run?");
    if (remaining.length < 8) {
      checkwinner();
    }
  }, [box1, box2, box3, box4, box5, box6, box7, box8, box9]);

  useEffect(() => {
    if (idGlobal.length < 2 && turnx == false) {
      setOutput(0);
      random();
    }
  }, [turnx]);

  const random = () => {
    setNewnumber(-1);
    setRemaining([]);
    if (box1.length < 1) {
      remaining.push(1);
    }
    if (box2.length < 1) {
      remaining.push(2);
    }
    if (box3.length < 1) {
      remaining.push(3);
    }
    if (box4.length < 1) {
      remaining.push(4);
    }
    if (box5.length < 1) {
      remaining.push(5);
    }
    if (box6.length < 1) {
      remaining.push(6);
    }
    if (box7.length < 1) {
      remaining.push(7);
    }
    if (box8.length < 1) {
      remaining.push(8);
    }
    if (box9.length < 1) {
      remaining.push(9);
    }

    if (
      box1.length > 0 ||
      (remaining.includes(1) && box2.length > 0) ||
      (remaining.includes(2) && box3.length > 0) ||
      (remaining.includes(3) && box4.length > 0) ||
      (remaining.includes(4) && box5.length > 0) ||
      (remaining.includes(5) && box6.length > 0) ||
      (remaining.includes(6) && box7.length > 0) ||
      (remaining.includes(7) && box8.length > 0) ||
      (remaining.includes(8) && box9.length > 0) ||
      remaining.includes(9)
    ) {
      console.log("here is the remaining length", remaining.length);

      setTimeout(() => {
        setNewnumber(Math.floor(Math.random() * remaining.length));

        if (remaining[newnumber] == null) {
          setOutput(remaining[0]);

          console.log(
            "AA this is the remaining",
            remaining,
            "this is the remaining",
            "This is the newNumber",
            newnumber,
            "This is the newNumber",
            "this is the newValue",
            remaining[newnumber],
            "This is the newValue"
          );
        } else {
          const newValue = remaining[newnumber];
          setOutput(newValue);

          console.log(
            "BB this is the remaining",
            remaining,
            "this is the remaining",
            "This is the newNumber",
            newnumber,
            "This is the newNumber",
            "this is the newValue",
            newValue,
            "This is the newValue"
          );
        }
      }, 250);
    }
  };

  useEffect(() => {
    console.log("is this the last thing to get run", output);

    if (output > 0) {
      setNewnumber(-1);
      setRemaining([]);

      if (turnx == false && idGlobal.length < 2 && remaining.length < 9) {
        if (box1 == "o" && box2 == "o" && box3 == "") {
          setBox3("o");
        } else if (box2 == "o" && box3 == "o" && box1 == "") {
          setBox1("o");
        } else if (box1 == "o" && box3 == "o" && box2 == "") {
          setBox2("o");
        } else if (box4 == "o" && box5 == "o" && box6 == "") {
          setBox6("o");
        } else if (box5 == "o" && box6 == "o" && box4 == "") {
          setBox4("o");
        } else if (box4 == "o" && box6 == "o" && box5 == "") {
          setBox5("o");
        } else if (box7 == "o" && box8 == "o" && box9 == "") {
          setBox9("o");
        } else if (box8 == "o" && box9 == "o" && box7 == "") {
          setBox7("o");
        } else if (box7 == "o" && box9 == "o" && box8 == "") {
          setBox8("o");
        } else if (box1 == "o" && box4 == "o" && box7 == "") {
          setBox7("o");
        } else if (box4 == "o" && box7 == "o" && box1 == "") {
          setBox1("o");
        } else if (box1 == "o" && box7 == "o" && box4 == "") {
          setBox4("o");
        } else if (box2 == "o" && box5 == "o" && box8 == "") {
          setBox8("o");
        } else if (box5 == "o" && box8 == "o" && box2 == "") {
          setBox2("o");
        } else if (box2 == "o" && box8 == "o" && box5 == "") {
          setBox5("o");
        } else if (box3 == "o" && box6 == "o" && box9 == "") {
          setBox9("o");
        } else if (box6 == "o" && box9 == "o" && box3 == "") {
          setBox3("o");
        } else if (box3 == "o" && box9 == "o" && box6 == "") {
          setBox6("o");
        } else if (box1 == "o" && box5 == "o" && box9 == "") {
          setBox9("o");
        } else if (box5 == "o" && box9 == "o" && box1 == "") {
          setBox1("o");
        } else if (box1 == "o" && box9 == "o" && box5 == "") {
          setBox5("o");
        } else if (box3 == "o" && box5 == "o" && box7 == "") {
          setBox7("o");
        } else if (box5 == "o" && box7 == "o" && box3 == "") {
          setBox3("o");
        } else if (box3 == "o" && box7 == "o" && box5 == "") {
          setBox5("o");
        } else if (box1 == "x" && box2 == "x" && box3 == "") {
          setBox3("o");
        } else if (box2 == "x" && box3 == "x" && box1 == "") {
          setBox1("o");
        } else if (box1 == "x" && box3 == "x" && box2 == "") {
          setBox2("o");
        } else if (box4 == "x" && box5 == "x" && box6 == "") {
          setBox6("o");
        } else if (box5 == "x" && box6 == "x" && box4 == "") {
          setBox4("o");
        } else if (box4 == "x" && box6 == "x" && box5 == "") {
          setBox5("o");
        } else if (box7 == "x" && box8 == "x" && box9 == "") {
          setBox9("o");
        } else if (box8 == "x" && box9 == "x" && box7 == "") {
          setBox7("o");
        } else if (box7 == "x" && box9 == "x" && box8 == "") {
          setBox8("o");
        } else if (box1 == "x" && box4 == "x" && box7 == "") {
          setBox7("o");
        } else if (box4 == "x" && box7 == "x" && box1 == "") {
          setBox1("o");
        } else if (box1 == "x" && box7 == "x" && box4 == "") {
          setBox4("o");
        } else if (box2 == "x" && box5 == "x" && box8 == "") {
          setBox8("o");
        } else if (box5 == "x" && box8 == "x" && box2 == "") {
          setBox2("o");
        } else if (box2 == "x" && box8 == "x" && box5 == "") {
          setBox5("o");
        } else if (box3 == "x" && box6 == "x" && box9 == "") {
          setBox9("o");
        } else if (box6 == "x" && box9 == "x" && box3 == "") {
          setBox3("o");
        } else if (box3 == "x" && box9 == "x" && box6 == "") {
          setBox6("o");
        } else if (box1 == "x" && box5 == "x" && box9 == "") {
          setBox9("o");
        } else if (box5 == "x" && box9 == "x" && box1 == "") {
          setBox1("o");
        } else if (box1 == "x" && box9 == "x" && box5 == "") {
          setBox5("o");
        } else if (box3 == "x" && box5 == "x" && box7 == "") {
          setBox7("o");
        } else if (box5 == "x" && box7 == "x" && box3 == "") {
          setBox3("o");
        } else if (box3 == "x" && box7 == "x" && box5 == "") {
          setBox5("o");
        } else {
          if (output == 1) {
            setBox1("o");
          } else if (output == 2) {
            setBox2("o");
          } else if (output == 3) {
            setBox3("o");
          } else if (output == 4) {
            setBox4("o");
          } else if (output == 5) {
            setBox5("o");
          } else if (output == 6) {
            setBox6("o");
          } else if (output == 7) {
            setBox7("o");
          } else if (output == 8) {
            setBox8("o");
          } else {
            setBox9("o");
          }
        }
        console.log("this is the output", output, "this is the output");
      }
      setOutput(0);
    } else {null}
   
  }, [output]);

  useEffect(() => {
    if (gameId.length > 2) {
      const itemtoupdate = firebase.firestore().collection("game").doc(gameId);
      itemtoupdate.update({
        turnx: turnx,
      });
    }
  }, [turnx]);

  useEffect(() => {
    if (gameId.length > 2) {
      if (!gameon) {
        const itemtoupdate = firebase
          .firestore()
          .collection("game")
          .doc(gameId);
        itemtoupdate.update({
          gameon: false,
        });
      }
    }
  }, [gameon]);

  const reset = () => {
    setBox1("");
    setBox2("");
    setBox3("");
    setBox4("");
    setBox5("");
    setBox6("");
    setBox7("");
    setBox8("");
    setBox9("");
    setMethod1(false);
    setMethod2(false);
    setMethod3(false);
    setMethod4(false);
    setMethod5(false);
    setMethod6(false);
    setMethod7(false);
    setMethod8(false);
    setGameId("");

    if (idGlobal.length < 2) {
      setTurnx(true);
    }
    console.log("YO, YO, YO")
  };

  const checkwinner = () => {
    if (!method1 && !method2 && !method3 && !method4 && !method5 && !method6 && !method7 && !method8){

    if (box1 === "x" && box2 === "x" && box3 === "x") {
      setMethod1(true);
      setGameon(false);
      setRemaining([]);
      setOutput(0);
      setNewnumber(-1);
      if (idGlobal.length < 2) {
        setTimeout(() => {
          alert("You Won!");
        }, 500);
      } else if (idGlobal.length > 2 && gameId.length > 2) {


        if (player1 == idglobal2){
          alert(namethisuser + " you won!");
        } else {
          alert(namethisuser + " you lost!")
        }
        



        const itemtoupdate4 = firebase
          .firestore()
          .collection("users")
          .doc(player1);
        const itemtoupdate5 = firebase
          .firestore()
          .collection("users")
          .doc(player2);
        console.log("seeing if this was run");

        itemtoupdate4.update({
          wins: firebase.firestore.FieldValue.increment(0.5),
        });
        itemtoupdate5.update({
          losses: firebase.firestore.FieldValue.increment(0.5),
        });
      } else {null};

      setTimeout(() => {
        reset();
      }, 2000);
    } else if (box1 === "o" && box2 === "o" && box3 === "o") {
      setMethod1(true);
      setGameon(false);
      setRemaining([]);
      setOutput(0);
      setNewnumber(-1);

      if (idGlobal.length < 2) {
        setTimeout(() => {
          alert("You Lost!")
        }, 500);
      } else if (idGlobal.length > 2 && gameId.length > 2) {if (player1 == idglobal2){
          alert(namethisuser + " you lost!");
        } else {
          alert(namethisuser + " you won!")
        }

        
        




        const itemtoupdate4 = firebase
          .firestore()
          .collection("users")
          .doc(player1);
        const itemtoupdate5 = firebase
          .firestore()
          .collection("users")
          .doc(player2);
        console.log("seeing if this was run");

        itemtoupdate5.update({
          wins: firebase.firestore.FieldValue.increment(0.5),
        });
        itemtoupdate4.update({
          losses: firebase.firestore.FieldValue.increment(0.5),
        });
      }

      setTimeout(() => {
        reset();
      }, 2000);
    } else if (box4 === "x" && box5 === "x" && box6 === "x") {
      setMethod2(true);
      setGameon(false);
      setRemaining([]);
      setOutput(0);
      setNewnumber(-1);

      if (idGlobal.length < 2) {
        setTimeout(() => {
          alert("You Won!");
        }, 500);
      } else if (idGlobal.length > 2 && gameId.length > 2) {

        if (player1 == idglobal2){
          alert(namethisuser + " you won!");
        } else {
          alert(namethisuser + " you lost!")
        }
        


        const itemtoupdate4 = firebase
          .firestore()
          .collection("users")
          .doc(player1);
        const itemtoupdate5 = firebase
          .firestore()
          .collection("users")
          .doc(player2);
        console.log("seeing if this was run");

        itemtoupdate4.update({
          wins: firebase.firestore.FieldValue.increment(0.5),
        });
        itemtoupdate5.update({
          losses: firebase.firestore.FieldValue.increment(0.5),
        });
      } else {null};

      setTimeout(() => {
        reset();
      }, 2000);
    } else if (box4 === "o" && box5 === "o" && box6 === "o") {
      setMethod2(true);
      setGameon(false);
      setRemaining([]);
      setOutput(0);
      setNewnumber(-1);

      if (idGlobal.length < 2) {
        setTimeout(() => {
          alert("You Lost!")
        }, 500);
      } else if (idGlobal.length > 2 && gameId.length > 2) {if (player1 == idglobal2){
          alert(namethisuser + " you lost!");
        } else {
          alert(namethisuser + " you won!")
        }
        const itemtoupdate4 = firebase
          .firestore()
          .collection("users")
          .doc(player1);
        const itemtoupdate5 = firebase
          .firestore()
          .collection("users")
          .doc(player2);
        console.log("seeing if this was run");

        itemtoupdate5.update({
          wins: firebase.firestore.FieldValue.increment(0.5),
        });
        itemtoupdate4.update({
          losses: firebase.firestore.FieldValue.increment(0.5),
        });
      }

      setTimeout(() => {
        reset();
      }, 2000);
    } else if (box7 === "x" && box8 === "x" && box9 === "x") {
      setMethod3(true);
      setGameon(false);
      setRemaining([]);
      setOutput(0);
      setNewnumber(-1);

      if (idGlobal.length < 2) {
        setTimeout(() => {
          alert("You Won!");
        }, 500);
      } else if (idGlobal.length > 2 && gameId.length > 2) {

        if (player1 == idglobal2){
          alert(namethisuser + " you won!");
        } else {
          alert(namethisuser + " you lost!")
        }
        

        const itemtoupdate4 = firebase
          .firestore()
          .collection("users")
          .doc(player1);
        const itemtoupdate5 = firebase
          .firestore()
          .collection("users")
          .doc(player2);
        console.log("seeing if this was run");

        itemtoupdate4.update({
          wins: firebase.firestore.FieldValue.increment(0.5),
        });
        itemtoupdate5.update({
          losses: firebase.firestore.FieldValue.increment(0.5),
        });
      } else {null};

      setTimeout(() => {
        reset();
      }, 2000);
    } else if (box7 === "o" && box8 === "o" && box9 === "o") {
      setMethod3(true);
      setGameon(false);
      setRemaining([]);
      setOutput(0);
      setNewnumber(-1);

      if (idGlobal.length < 2) {
        setTimeout(() => {
          alert("You Lost!")
        }, 500);
      } else if (idGlobal.length > 2 && gameId.length > 2) {if (player1 == idglobal2){
          alert(namethisuser + " you lost!");
        } else {
          alert(namethisuser + " you won!")
        }
        const itemtoupdate4 = firebase
          .firestore()
          .collection("users")
          .doc(player1);
        const itemtoupdate5 = firebase
          .firestore()
          .collection("users")
          .doc(player2);
        console.log("seeing if this was run");

        itemtoupdate5.update({
          wins: firebase.firestore.FieldValue.increment(0.5),
        });
        itemtoupdate4.update({
          losses: firebase.firestore.FieldValue.increment(0.5),
        });
      }

      setTimeout(() => {
        reset();
      }, 2000);
    } else if (box1 === "x" && box4 === "x" && box7 === "x") {
      setMethod4(true);
      setGameon(false);
      setRemaining([]);
      setOutput(0);
      setNewnumber(-1);

      if (idGlobal.length < 2) {
        setTimeout(() => {
          alert("You Won!");
        }, 500);
      } else if (idGlobal.length > 2 && gameId.length > 2) {

        if (player1 == idglobal2){
          alert(namethisuser + " you won!");
        } else {
          alert(namethisuser + " you lost!")
        }
        


        const itemtoupdate4 = firebase
          .firestore()
          .collection("users")
          .doc(player1);
        const itemtoupdate5 = firebase
          .firestore()
          .collection("users")
          .doc(player2);
        console.log("seeing if this was run");

        itemtoupdate4.update({
          wins: firebase.firestore.FieldValue.increment(0.5),
        });
        itemtoupdate5.update({
          losses: firebase.firestore.FieldValue.increment(0.5),
        });
      } else {null};

      setTimeout(() => {
        reset();
      }, 2000);
    } else if (box1 === "o" && box4 === "o" && box7 === "o") {
      setMethod4(true);
      setGameon(false);
      setRemaining([]);
      setOutput(0);
      setNewnumber(-1);

      if (idGlobal.length < 2) {
        setTimeout(() => {
          alert("You Lost!")
        }, 500);
      } else if (idGlobal.length > 2 && gameId.length > 2) {if (player1 == idglobal2){
          alert(namethisuser + " you lost!");
        } else {
          alert(namethisuser + " you won!")
        }
        const itemtoupdate4 = firebase
          .firestore()
          .collection("users")
          .doc(player1);
        const itemtoupdate5 = firebase
          .firestore()
          .collection("users")
          .doc(player2);
        console.log("seeing if this was run");

        itemtoupdate5.update({
          wins: firebase.firestore.FieldValue.increment(0.5),
        });
        itemtoupdate4.update({
          losses: firebase.firestore.FieldValue.increment(0.5),
        });
      }

      setTimeout(() => {
        reset();
      }, 2000);
    } else if (box2 === "x" && box5 === "x" && box8 === "x") {
      setMethod5(true);
      setGameon(false);
      setRemaining([]);
      setOutput(0);
      setNewnumber(-1);

      if (idGlobal.length < 2) {
        setTimeout(() => {
          alert("You Won!");
        }, 500);
      } else if (idGlobal.length > 2 && gameId.length > 2) {

        if (player1 == idglobal2){
          alert(namethisuser + " you won!");
        } else {
          alert(namethisuser + " you lost!")
        }
        

        const itemtoupdate4 = firebase
          .firestore()
          .collection("users")
          .doc(player1);
        const itemtoupdate5 = firebase
          .firestore()
          .collection("users")
          .doc(player2);
        console.log("seeing if this was run");

        itemtoupdate4.update({
          wins: firebase.firestore.FieldValue.increment(0.5),
        });
        itemtoupdate5.update({
          losses: firebase.firestore.FieldValue.increment(0.5),
        });
      } else {null};

      setTimeout(() => {
        reset();
      }, 2000);
    } else if (box2 === "o" && box5 === "o" && box8 === "o") {
      setMethod5(true);
      setGameon(false);
      setRemaining([]);
      setOutput(0);
      setNewnumber(-1);

      if (idGlobal.length < 2) {
        setTimeout(() => {
          alert("You Lost!")
        }, 500);
      } else if (idGlobal.length > 2 && gameId.length > 2) {if (player1 == idglobal2){
          alert(namethisuser + " you lost!");
        } else {
          alert(namethisuser + " you won!")
        }
        const itemtoupdate4 = firebase
          .firestore()
          .collection("users")
          .doc(player1);
        const itemtoupdate5 = firebase
          .firestore()
          .collection("users")
          .doc(player2);
        console.log("seeing if this was run");

        itemtoupdate5.update({
          wins: firebase.firestore.FieldValue.increment(0.5),
        });
        itemtoupdate4.update({
          losses: firebase.firestore.FieldValue.increment(0.5),
        });
      }

      setTimeout(() => {
        reset();
      }, 2000);
    } else if (box3 === "x" && box6 === "x" && box9 === "x") {
      setMethod6(true);
      setGameon(false);
      setRemaining([]);
      setOutput(0);
      setNewnumber(-1);

      if (idGlobal.length < 2) {
        setTimeout(() => {
          alert("You Won!");
        }, 500);
      } else if (idGlobal.length > 2 && gameId.length > 2) {

        if (player1 == idglobal2){
          alert(namethisuser + " you won!");
        } else {
          alert(namethisuser + " you lost!")
        }
        

        const itemtoupdate4 = firebase
          .firestore()
          .collection("users")
          .doc(player1);
        const itemtoupdate5 = firebase
          .firestore()
          .collection("users")
          .doc(player2);
        console.log("seeing if this was run");

        itemtoupdate4.update({
          wins: firebase.firestore.FieldValue.increment(0.5),
        });
        itemtoupdate5.update({
          losses: firebase.firestore.FieldValue.increment(0.5),
        });
      } else {null};
      setTimeout(() => {
        reset();
      }, 2000);
    } else if (box3 === "o" && box6 === "o" && box9 === "o") {
      setMethod6(true);
      setGameon(false);
      setRemaining([]);
      setOutput(0);
      setNewnumber(-1);

      if (idGlobal.length < 2) {
        setTimeout(() => {
          alert("You Lost!")
        }, 500);
      } else if (idGlobal.length > 2 && gameId.length > 2) {if (player1 == idglobal2){
          alert(namethisuser + " you lost!");
        } else {
          alert(namethisuser + " you won!")
        }
        const itemtoupdate4 = firebase
          .firestore()
          .collection("users")
          .doc(player1);
        const itemtoupdate5 = firebase
          .firestore()
          .collection("users")
          .doc(player2);
        console.log("seeing if this was run");

        itemtoupdate5.update({
          wins: firebase.firestore.FieldValue.increment(0.5),
        });
        itemtoupdate4.update({
          losses: firebase.firestore.FieldValue.increment(0.5),
        });
      }

      setTimeout(() => {
        reset();
      }, 2000);
    } else if (box1 === "x" && box5 === "x" && box9 === "x") {
      setMethod7(true);
      setGameon(false);
      setRemaining([]);
      setOutput(0);
      setNewnumber(-1);

      if (idGlobal.length < 2) {
        setTimeout(() => {
          alert("You Won!");
        }, 500);
      } else if (idGlobal.length > 2 && gameId.length > 2) {

        if (player1 == idglobal2){
          alert(namethisuser + " you won!");
        } else {
          alert(namethisuser + " you lost!")
        }
        

        const itemtoupdate4 = firebase
          .firestore()
          .collection("users")
          .doc(player1);
        const itemtoupdate5 = firebase
          .firestore()
          .collection("users")
          .doc(player2);
        console.log("seeing if this was run");

        itemtoupdate4.update({
          wins: firebase.firestore.FieldValue.increment(0.5),
        });
        itemtoupdate5.update({
          losses: firebase.firestore.FieldValue.increment(0.5),
        });
      } else {null};

      setTimeout(() => {
        reset();
      }, 2000);
    } else if (box1 === "o" && box5 === "o" && box9 === "o") {
      setMethod7(true);
      setGameon(false);
      setRemaining([]);
      setOutput(0);
      setNewnumber(-1);

      if (idGlobal.length < 2) {
        setTimeout(() => {
          alert("You Lost!")
        }, 500);
      } else if (idGlobal.length > 2 && gameId.length > 2) {if (player1 == idglobal2){
          alert(namethisuser + " you lost!");
        } else {
          alert(namethisuser + " you won!")
        }
        const itemtoupdate4 = firebase
          .firestore()
          .collection("users")
          .doc(player1);
        const itemtoupdate5 = firebase
          .firestore()
          .collection("users")
          .doc(player2);
        console.log("seeing if this was run");

        itemtoupdate5.update({
          wins: firebase.firestore.FieldValue.increment(0.5),
        });
        itemtoupdate4.update({
          losses: firebase.firestore.FieldValue.increment(0.5),
        });
      }

      setTimeout(() => {
        reset();
      }, 2000);
    } else if (box3 === "x" && box5 === "x" && box7 === "x") {
      setMethod8(true);
      setGameon(false);
      setRemaining([]);
      setOutput(0);
      setNewnumber(-1);

      if (idGlobal.length < 2) {
        setTimeout(() => {
          alert("You Won!");
        }, 500);
      } else if (idGlobal.length > 2 && gameId.length > 2) {

        if (player1 == idglobal2){
          alert(namethisuser + " you won!");
        } else {
          alert(namethisuser + " you lost!")
        }
        

        const itemtoupdate4 = firebase
          .firestore()
          .collection("users")
          .doc(player1);
        const itemtoupdate5 = firebase
          .firestore()
          .collection("users")
          .doc(player2);
        console.log("seeing if this was run");

        itemtoupdate4.update({
          wins: firebase.firestore.FieldValue.increment(0.5),
        });
        itemtoupdate5.update({
          losses: firebase.firestore.FieldValue.increment(0.5),
        });
      } else {null};

      setTimeout(() => {
        reset();
      }, 2000);
    } else if (box3 === "o" && box5 === "o" && box7 === "o") {
      setMethod8(true);
      setGameon(false);
      setRemaining([]);
      setOutput(0);
      setNewnumber(-1);

      if (idGlobal.length < 2) {
        setTimeout(() => {
          alert("You Lost!")
        }, 500);
      } else if (idGlobal.length > 2 && gameId.length > 2) {if (player1 == idglobal2){
          alert(namethisuser + " you lost!");
        } else {
          alert(namethisuser + " you won!")
        }
        const itemtoupdate4 = firebase
          .firestore()
          .collection("users")
          .doc(player1);
        const itemtoupdate5 = firebase
          .firestore()
          .collection("users")
          .doc(player2);
        console.log("seeing if this was run");

        itemtoupdate5.update({
          wins: firebase.firestore.FieldValue.increment(0.5),
        });
        itemtoupdate4.update({
          losses: firebase.firestore.FieldValue.increment(0.5),
        });
      }

      setTimeout(() => {
        reset();
      }, 2000);
    } else if (
      box1.length > 0 &&
      box2.length > 0 &&
      box3.length > 0 &&
      box4.length > 0 &&
      box5.length > 0 &&
      box6.length > 0 &&
      box7.length > 0 &&
      box8.length > 0 &&
      box9.length > 0
    ) {
      setGameon(false);
      setRemaining([]);
      setOutput(0);
      setNewnumber(-1);

      if (idGlobal.length < 2) {
        setTimeout(() => {
          alert("You Tied!");
        }, 500);
      } else if (idGlobal.length > 2 && gameId.length > 2) {

        if (player1 == idglobal2){
          alert(namethisuser + " you tied!");
        } else {
          alert(namethisuser + " you tied!")
        }
        


        const itemtoupdate4 = firebase
          .firestore()
          .collection("users")
          .doc(player1);
        const itemtoupdate5 = firebase
          .firestore()
          .collection("users")
          .doc(player2);

        itemtoupdate4.update({
          ties: firebase.firestore.FieldValue.increment(0.5),
        });
        itemtoupdate5.update({
          ties: firebase.firestore.FieldValue.increment(0.5),
        });
      }

      setTimeout(() => {
        reset();
      }, 2000);
    } else {
      setTurnx(!turnx);
    }
  }
  };

  const auto1xo = () => {
    if (box1.length === 0 && turnx == true) {
      setBox1("x");
    } else {
      null;
    }
  };

  const auto2xo = () => {
    if (box2.length === 0 && turnx == true) {
      setBox2("x");
    } else {
      null;
    }
  };

  const auto3xo = () => {
    if (box3.length === 0 && turnx == true) {
      setBox3("x");
    } else {
      null;
    }
  };

  const auto4xo = () => {
    if (box4.length === 0 && turnx == true) {
      setBox4("x");
    } else {
      null;
    }
  };

  const auto5xo = () => {
    if (box5.length === 0 && turnx == true) {
      setBox5("x");
    } else {
      null;
    }
  };

  const auto6xo = () => {
    if (box6.length === 0 && turnx == true) {
      setBox6("x");
    } else {
      null;
    }
  };

  const auto7xo = () => {
    if (box7.length === 0 && turnx == true) {
      setBox7("x");
    } else {
      null;
    }
  };

  const auto8xo = () => {
    if (box8.length === 0 && turnx == true) {
      setBox8("x");
    } else {
      null;
    }
  };

  const auto9xo = () => {
    if (box9.length === 0 && turnx == true) {
      setBox9("x");
    } else {
      null;
    }
  };

  const determine1xo = () => {
    if (gameon) {
      if (box1.length === 0) {
        if (turnx === true) {
          setBox1("x");
        } else {
          setBox1("o");
        }
      } else {
        null;
      }
    } else {
      null;
    }
  };

  useEffect(() => {
    if (idGlobal.length > 2) {
      let id = gameId;
      if (box1.length > 0) {
        let box = box1;
        const itemtoupdate = firebase.firestore().collection("game").doc(id);

        itemtoupdate.update({
          box1: box,
        });
      }
    }
  }, [box1]);

  const determine2xo = () => {
    if (gameon) {
      if (box2.length === 0) {
        if (turnx === true) {
          setBox2("x");
        } else {
          setBox2("o");
        }
      } else {
        null;
      }
    } else {
      null;
    }
  };

  useEffect(() => {
    if (idGlobal.length > 2) {
      let id = gameId;
      if (box2.length > 0) {
        let box = box2;
        const itemtoupdate = firebase.firestore().collection("game").doc(id);

        itemtoupdate.update({
          box2: box,
        });
      }
    }
  }, [box2]);

  const determine3xo = () => {
    if (gameon) {
      if (box3.length === 0) {
        if (turnx === true) {
          setBox3("x");
        } else {
          setBox3("o");
        }
      } else {
        null;
      }
    } else {
      null;
    }
  };

  useEffect(() => {
    if (idGlobal.length > 2) {
      let id = gameId;
      if (box3.length > 0) {
        let box = box3;
        const itemtoupdate = firebase.firestore().collection("game").doc(id);

        itemtoupdate.update({
          box3: box,
        });
      }
    }
  }, [box3]);

  const determine4xo = () => {
    if (gameon) {
      if (box4.length === 0) {
        if (turnx === true) {
          setBox4("x");
        } else {
          setBox4("o");
        }
      } else {
        null;
      }
    } else {
      null;
    }
  };

  useEffect(() => {
    if (idGlobal.length > 2) {
      let id = gameId;
      if (box4.length > 0) {
        let box = box4;
        const itemtoupdate = firebase.firestore().collection("game").doc(id);

        itemtoupdate.update({
          box4: box,
        });
      }
    }
  }, [box4]);

  const determine5xo = () => {
    if (gameon) {
      if (box5.length === 0) {
        if (turnx === true) {
          setBox5("x");
        } else {
          setBox5("o");
        }
      } else {
        null;
      }
    } else {
      null;
    }
  };

  useEffect(() => {
    if (idGlobal.length > 2) {
      let id = gameId;
      if (box5.length > 0) {
        let box = box5;
        const itemtoupdate = firebase.firestore().collection("game").doc(id);

        itemtoupdate.update({
          box5: box,
        });
      }
    }
  }, [box5]);

  const determine6xo = () => {
    if (gameon) {
      if (box6.length === 0) {
        if (turnx === true) {
          setBox6("x");
        } else {
          setBox6("o");
        }
      } else {
        null;
      }
    } else {
      null;
    }
  };

  useEffect(() => {
    if (idGlobal.length > 2) {
      let id = gameId;
      if (box6.length > 0) {
        let box = box6;
        const itemtoupdate = firebase.firestore().collection("game").doc(id);

        itemtoupdate.update({
          box6: box,
        });
      }
    }
  }, [box6]);

  const determine7xo = () => {
    if (gameon) {
      if (box7.length === 0) {
        if (turnx === true) {
          setBox7("x");
        } else {
          setBox7("o");
        }
      } else {
        null;
      }
    } else {
      null;
    }
  };

  useEffect(() => {
    if (idGlobal.length > 2) {
      let id = gameId;
      if (box7.length > 0) {
        let box = box7;
        const itemtoupdate = firebase.firestore().collection("game").doc(id);

        itemtoupdate.update({
          box7: box,
        });
      }
    }
  }, [box7]);

  const determine8xo = () => {
    if (gameon) {
      if (box8.length === 0) {
        if (turnx === true) {
          setBox8("x");
        } else {
          setBox8("o");
        }
      } else {
        null;
      }
    } else {
      null;
    }
  };

  useEffect(() => {
    if (idGlobal.length > 2) {
      let id = gameId;
      if (box8.length > 0) {
        let box = box8;
        const itemtoupdate = firebase.firestore().collection("game").doc(id);

        itemtoupdate.update({
          box8: box,
        });
      }
    }
  }, [box8]);

  const determine9xo = () => {
    if (gameon) {
      if (box9.length === 0) {
        if (turnx === true) {
          setBox9("x");
        } else {
          setBox9("o");
        }
      } else {
        null;
      }
    } else {
      null;
    }
  };

  useEffect(() => {
    if (idGlobal.length > 2) {
      let id = gameId;
      if (box9.length > 0) {
        let box = box9;
        const itemtoupdate = firebase.firestore().collection("game").doc(id);

        itemtoupdate.update({
          box9: box,
        });
      }
    }
  }, [box9]);

  const windowWidth = Dimensions.get("window").width;

  return (
    <View>
      {idGlobal.length < 2 ? (
        <Grid style={{ width: windowWidth }}>
          <Row style={{ height: windowWidth / 3 }}>
            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  auto1xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method1 || method4 || method7
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box1}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  auto2xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method1 || method5
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box2}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  auto3xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method1 || method6 || method8
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box3}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>
          </Row>

          <Row style={{ backgroundColor: "black", height: 6 }}>
            <Col style={{ backgroundColor: "black", width: "100%" }}></Col>
          </Row>

          <Row style={{ height: windowWidth / 3 }}>
            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  auto4xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method2 || method4
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box4}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  auto5xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method2 || method5 || method7 || method8
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box5}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  auto6xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method2 || method6
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box6}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>
          </Row>
          <Row style={{ backgroundColor: "black", height: 6 }}>
            <Col style={{ backgroundColor: "black", width: "100%" }}></Col>
          </Row>
          <Row style={{ height: windowWidth / 3 }}>
            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  auto7xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method3 || method4 || method8
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box7}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  auto8xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method3 || method5
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box8}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  auto9xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method3 || method6 || method7
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box9}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>
          </Row>
        </Grid>
      ) : idGlobal == player1 && turnx == true ? (
        <Grid style={{ width: windowWidth }}>
          <Row style={{ height: windowWidth / 3 }}>
            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  determine1xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method1 || method4 || method7
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box1}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  determine2xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method1 || method5
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box2}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  determine3xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method1 || method6 || method8
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box3}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>
          </Row>

          <Row style={{ backgroundColor: "black", height: 6 }}>
            <Col style={{ backgroundColor: "black", width: "100%" }}></Col>
          </Row>

          <Row style={{ height: windowWidth / 3 }}>
            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  determine4xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method2 || method4
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box4}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  determine5xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method2 || method5 || method7 || method8
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box5}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  determine6xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method2 || method6
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box6}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>
          </Row>
          <Row style={{ backgroundColor: "black", height: 6 }}>
            <Col style={{ backgroundColor: "black", width: "100%" }}></Col>
          </Row>
          <Row style={{ height: windowWidth / 3 }}>
            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  determine7xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method3 || method4 || method8
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box7}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  determine8xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method3 || method5
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box8}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  determine9xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method3 || method6 || method7
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box9}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>
          </Row>
        </Grid>
      ) : idGlobal == player1 && turnx == false ? (
        <Grid style={{ width: windowWidth }}>
          <Row style={{ height: windowWidth / 3 }}>
            <Col style={{ backgroundColor: "white" }}>
              <View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method1 || method4 || method7
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box1}
                  </Text>
                </View>
              </View>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method1 || method5
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box2}
                  </Text>
                </View>
              </View>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method1 || method6 || method8
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box3}
                  </Text>
                </View>
              </View>
            </Col>
          </Row>

          <Row style={{ backgroundColor: "black", height: 6 }}>
            <Col style={{ backgroundColor: "black", width: "100%" }}></Col>
          </Row>
          <Row style={{ height: windowWidth / 3 }}>
            <Col style={{ backgroundColor: "white" }}>
              <View>
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method2 || method4
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box4}
                  </Text>
                </View>
              </View>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <View>
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method2 || method5 || method7 || method8
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box5}
                  </Text>
                </View>
              </View>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <View>
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method2 || method6
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box6}
                  </Text>
                </View>
              </View>
            </Col>
          </Row>
          <Row style={{ backgroundColor: "black", height: 6 }}>
            <Col style={{ backgroundColor: "black", width: "100%" }}></Col>
          </Row>
          <Row style={{ height: windowWidth / 3 }}>
            <Col style={{ backgroundColor: "white" }}>
              <View>
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method3 || method4 || method8
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box7}
                  </Text>
                </View>
              </View>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <View>
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method3 || method5
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box8}
                  </Text>
                </View>
              </View>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <View>
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method3 || method6 || method7
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box9}
                  </Text>
                </View>
              </View>
            </Col>
          </Row>
        </Grid>
      ) : idGlobal == player2 && turnx == true ? (
        <Grid style={{ width: windowWidth }}>
          <Row style={{ height: windowWidth / 3 }}>
            <Col style={{ backgroundColor: "white" }}>
              <View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method1 || method4 || method7
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box1}
                  </Text>
                </View>
              </View>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method1 || method5
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box2}
                  </Text>
                </View>
              </View>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <View>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method1 || method6 || method8
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box3}
                  </Text>
                </View>
              </View>
            </Col>
          </Row>

          <Row style={{ backgroundColor: "black", height: 6 }}>
            <Col style={{ backgroundColor: "black", width: "100%" }}></Col>
          </Row>
          <Row style={{ height: windowWidth / 3 }}>
            <Col style={{ backgroundColor: "white" }}>
              <View>
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method2 || method4
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box4}
                  </Text>
                </View>
              </View>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <View>
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method2 || method5 || method7 || method8
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box5}
                  </Text>
                </View>
              </View>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <View>
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method2 || method6
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box6}
                  </Text>
                </View>
              </View>
            </Col>
          </Row>
          <Row style={{ backgroundColor: "black", height: 6 }}>
            <Col style={{ backgroundColor: "black", width: "100%" }}></Col>
          </Row>
          <Row style={{ height: windowWidth / 3 }}>
            <Col style={{ backgroundColor: "white" }}>
              <View>
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method3 || method4 || method8
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box7}
                  </Text>
                </View>
              </View>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <View>
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method3 || method5
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box8}
                  </Text>
                </View>
              </View>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <View>
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method3 || method6 || method7
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box9}
                  </Text>
                </View>
              </View>
            </Col>
          </Row>
        </Grid>
      ) : idGlobal == player2 && turnx == false ? (
        <Grid style={{ width: windowWidth }}>
          <Row style={{ height: windowWidth / 3 }}>
            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  determine1xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method1 || method4 || method7
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box1}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  determine2xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method1 || method5
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box2}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  determine3xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method1 || method6 || method8
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box3}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>
          </Row>

          <Row style={{ backgroundColor: "black", height: 6 }}>
            <Col style={{ backgroundColor: "black", width: "100%" }}></Col>
          </Row>
          <Row style={{ height: windowWidth / 3 }}>
            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  determine4xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method2 || method4
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box4}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  determine5xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method2 || method5 || method7 || method8
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box5}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  determine6xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method2 || method6
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box6}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>
          </Row>
          <Row style={{ backgroundColor: "black", height: 6 }}>
            <Col style={{ backgroundColor: "black", width: "100%" }}></Col>
          </Row>
          <Row style={{ height: windowWidth / 3 }}>
            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  determine7xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method3 || method4 || method8
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box7}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  determine8xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method3 || method5
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box8}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity
                onPress={() => {
                  determine9xo();
                }}
              >
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method3 || method6 || method7
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box9}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>
          </Row>
        </Grid>
      ) : (
        <Grid style={{ width: windowWidth }}>
          <Row style={{ height: windowWidth / 3 }}>
            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method1 || method4 || method7
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box1}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method1 || method5
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box2}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method1 || method6 || method8
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box3}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>
          </Row>

          <Row style={{ backgroundColor: "black", height: 6 }}>
            <Col style={{ backgroundColor: "black", width: "100%" }}></Col>
          </Row>
          <Row style={{ height: windowWidth / 3 }}>
            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity>
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method2 || method4
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box4}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity>
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method2 || method5 || method7 || method8
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box5}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity>
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method2 || method6
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box6}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>
          </Row>
          <Row style={{ backgroundColor: "black", height: 6 }}>
            <Col style={{ backgroundColor: "black", width: "100%" }}></Col>
          </Row>
          <Row style={{ height: windowWidth / 3 }}>
            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity>
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method3 || method4 || method8
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box7}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity>
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method3 || method5
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box8}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>

            <Col style={{ backgroundColor: "black", width: 6 }}></Col>

            <Col style={{ backgroundColor: "white" }}>
              <TouchableOpacity>
                <View
                  style={{
                    alignItems: "center",

                    backgroundColor: "#8959DF",
                    height: "100%",
                  }}
                >
                  <Text
                    style={
                      method3 || method6 || method7
                        ? { fontSize: 100, color: "white" }
                        : { fontSize: 100, color: "black" }
                    }
                  >
                    {box9}
                  </Text>
                </View>
              </TouchableOpacity>
            </Col>
          </Row>
        </Grid>
      )}
    </View>
  );
};

export default TicTacToeGrid;
