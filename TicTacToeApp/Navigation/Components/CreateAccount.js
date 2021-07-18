import React, { useState, useEffect } from "react";
import { scale, ScaledSheet } from 'react-native-size-matters';
import Mainpage from "./Game";
import Selecting from "./Subcomponents/SelectingContainer";
import Results from "./Subcomponents/ResultsContainer";
import CryptoES from "crypto-es";

import {
  useNavigation,
  NavigationContainer,
  DrawerActions,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";


import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  ActivityIndicator,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from "react-native";

import firebase from "../Firebase/Config.js";
// import CryptoES from "crypto-es";

const SignUp = ({ navigation }) => {

  const [filteredposts, setfilteredposts] = useState([]);
  const [posts, setposts] = useState([]);
  const [todos, setTodos] = useState([]);

  // useEffect(() => {
  //   var request = new Request("https://swapi.dev/api/people/");
 
  //   fetch(request)
  //     .then((res) => res.json())
  //     .then((data) => setfilteredposts(data.results));
  // }, []);
 


//  useEffect(() => {
//   var request = new Request("https://swapi.dev/api/people/");

//   fetch(request)
//     .then((res) => res.json())
//     .then((data) => setposts(data.results)), console.log("these are the posts",posts);
// }, []);

textsearched = (value) => {
 
  let postss = [];
  for (let i in posts) {
    let match = false;
    let postt = posts[i];

    for (let prop in postt) {
    
      let lower = JSON.stringify(postt[prop]).toLowerCase();
      ("1", value )
      if (value.searchtext && lower.startsWith(value.searchtext.toString().toLowerCase(),1)) {
        match = true;
      }
    }
    if (match === true) {
      postss.push(postt);
    }
  }

  setfilteredposts( postss );
};










  console.log("SignUp");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [encrypt, setEncrypt] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [age, setAge] = useState(0);
  const [group, setgroup] = useState("");

  // const [group, setGroup] = useState("");


  useEffect(() => {
    setEncrypt(CryptoES.AES.encrypt(password, "Your Password").toString());
  }, [password]);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => 
            navigation.navigate("PrimaryPage")}
            >
          <Text accessibilityLabel="Guest" style={styles.text5}>
            Guest
          </Text>
        </TouchableOpacity>
      ),
    });
  }, []);

  const usersRef = firebase
  .firestore()
  .collection("users");


  const onRegisterPress = () => {
    if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;

        const data = {
          id: uid,
          email,
          password: encrypt,
          group,
        };

        const usersRef = firebase
  .firestore()
  .collection("users");

        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            navigation.navigate("SignIn", { user: data });
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };


const newfunctio = () => {
  const usersRef = firebase
  .firestore()
  .collection("users");
  
  usersRef
  .get()
  .then(function (querySnapshot) {
  querySnapshot.forEach(function (doc) {
  let newData = doc.data();

  console.log("The data", doc.data().email);
  
    if (todos.indexOf(newData.id) === -1) {
setTodos((arr) => {
            return [...arr, newData];
          });
          } else {
          console.log("this is a duplicate");
          }
          console.log("here are all of the todos", todos, "here are all of the todos");
        });
      })
      .catch((e) => console.log(e));
  };


  useEffect(() => {
    newfunctio()
  },[]);


  return (
    <SafeAreaView style={styles.container}>
      {/* App Header */}

      {/* Sign Up Form */}
      <KeyboardAvoidingView style={styles.form} behavior="height">
        <TextInput
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          value={email}
          style={styles.input}
          placeholderTextColor="gray"
        />

        <TextInput
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          style={styles.input}
          placeholderTextColor="gray"
        />

        <TextInput
          placeholder="Re-enter password"
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          style={styles.input}
          placeholderTextColor="gray"
        />   
        <Selecting
        textsearched={(value) => textsearched(value)}
      group={group}
        setgroup={setgroup}
      />
      <ScrollView>
        <Results
          style={styles.input}
          height={50}
          width= {300}
         posts={filteredposts}      
         group={group}
         setgroup={setgroup}  
         textsearched={(value) => textsearched(value)}   
        />
        </ScrollView>
   
      </KeyboardAvoidingView>

      {/* Sign Up Button */}
      <KeyboardAvoidingView style={styles.btn} >
        <TouchableOpacity onPress={() => onRegisterPress()}>
          <Text accessibilityLabel="Sign up" style={styles.text}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>

      {/* Log In */}
      <Text style={styles.lastsection}
        accessibilityLabel="Link to Sign In page"
        style={{ color: "#167bff", padding: scale(20), fontSize: scale(10)}}
        onPress={() => {
          navigation.navigate("SignIn");
        }}
      >
        Already have an account? Sign In
      </Text>
    </SafeAreaView>
  );
};

export default SignUp;
const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
    color: "white",
    flexDirection: "column",
  },
  form: {
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    flex: 1,
  },
  input: {
    borderWidth: "2@s",
    borderColor: "#004fff",
    padding: "7@s",
    width: "300@s",
    marginBottom: "12@s",
    borderRadius: "10@s",
    shadowColor: "white",
    shadowOffset: { width: "0.5@s", height: "0.5@s" },
    shadowOpacity: "1@s",
    shadowRadius: "0.5@s",
    color: "white",
    lineHeight: "24@s",
    fontSize: "20@s",
  },
  input2: {
    borderWidth: "2@s",
    borderColor: "#004fff",
    padding: "7@s",
    width: "300@s",
    marginBottom: "25@s",
    borderRadius: "10@s",
    shadowOpacity: "1@s",
    shadowRadius: "0.5@s",
    color: "white",
    height: "43@s",
  },
  input3: {
    fontSize: "20@s",
    color: "white",
    opacity: "0.8@s",
  },
  btn: {
    width: "300@s",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#004fff",
    borderRadius: "10@s",
    shadowColor: "white",
    shadowOffset: { width: "1@s", height: "1@s" },
    shadowOpacity: "1@s",
    shadowRadius: "3@s",
    color: "white",
    flex: .1,
  },
  text: {
    color: "white",
    fontSize: "15@s",
    textAlign: "center",
  },
  middle: {
    width: "150@s",
    alignItems: "center",
    justifyContent: "center",
  marginTop:0,
   flex: .26, 
  },

  img: {
    width: "130@vs",
    height: "100@vs",
    borderRadius: 5,
  },
  text2: {
    color: "white",
    textAlign: "center",
  },

  modal: {
    color: "white",
    fontSize: "35@s",
    textAlign: "center",
    backgroundColor: "red",
    width: "20@s",
  },
  text5: {
    color: "#004fff",
    fontSize: "12@s",
    marginRight: "5@s"
  },
  last: {
color: "#167bff", 

fontSize: "10@s", 
},
lastsection: {
  flex: .1,
  justifyContent:"center",
}, 

  center: {
    width: "40%",
    height: "20%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  selecting: {
    flex: 1,
  },
  Results: {
    flex: 2,
  },
});

