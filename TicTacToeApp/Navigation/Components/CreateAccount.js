import React, { useState, useEffect } from "react";
import { scale, ScaledSheet } from 'react-native-size-matters';
import Mainpage from "./Game";
import CryptoES from "crypto-es";
import Results from "./Subcomponents/ResultsContainer";

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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [encrypt, setEncrypt] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [age, setAge] = useState(0);
  const [group, setGroup] = useState("");
  const [searching, setSearching] = useState(false);
  const [filtered, setFiltered] = useState([]);
  const [username, setUsername] = useState("");
  const [number, setNumber] = useState(0);
  const [admin, setAdmin] = useState(false);


  useEffect(() => {
    newfunctio()
  },[]);

 

  const textsearched = (text) => {
   setSearching(true)
  let postss = [];
  for (let i in todos) {
    let match = false;
    let postt = todos[i];

    for (let prop in postt) {
    
      let lower = JSON.stringify(postt[prop]).toLowerCase();
      if (lower.startsWith(group.toString().toLowerCase(),1)) {
        match = true;
      }
    }
    if (match === true ) {
      if (!postss.includes(postt.id)) {
      postss.push(postt),
      console.log("NNNNN",filtered)
      }
    }
  }

  setFiltered( postss );
  }

useEffect(() => {
 console.log("here is the original array", filteredposts)
}, [filteredposts])

useEffect(() => {
  console.log("here is the filtered array", filtered)
 }, [filtered])



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
          username,
          admin,
        };

        const usersRef = firebase
  .firestore()
  .collection("users");

        usersRef
          .doc(uid)
          .set(data)
          .then(() => {
            if ( admin ) {
              alert("You've just created a new group: '"+group+"'. Invite people you know to join so you can compete against them.") 
            } else {
              alert("You've just joined the group: '"+group+"' with "+ number + " other people!")
            }
          })
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

  useEffect(() => {

    textsearched(group)
    console.log("this has been input", group)
    
  }, [group])

  useEffect(() => {
    if (number > 0){
      setAdmin(false)
    } else {
      setAdmin( true )
    }
  }, [number])


const newfunctio = () => {
  const usersRef = firebase
  .firestore()
  .collection("users");
  
  usersRef
  .get()
  .then(function (querySnapshot) {
  querySnapshot.forEach(function (doc) {
  let newData = doc.data();
  
    if (todos.indexOf(newData.id) === -1) {
setTodos((arr) => {
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
        <TextInput
        placeholder="Username"
        onChangeText={(text) => setUsername(text)}
        value={username}
        style={styles.input}
        placeholderTextColor="gray"
      /> 
        <TextInput
        style={styles.input}
        placeholder="Select a Group Or Create One"
        placeholderTextColor="gray"
        onChangeText={(text) => setGroup(text)}
        value={group}
      />
<View style={styles.scroll}>
      { searching ? 
      <ScrollView >
      <Results
        height={50}
        width= {300}
       posts={filtered}      
       group={group}
       setGroup={setGroup}  
       textsearched={(value) => textsearched(value)}     
       setSearching ={setSearching}
       number={number}
       setNumber={setNumber}
      
      />
      </ScrollView>
      : <View></View>
      }
      </View>
      
   
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

  input4: {
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
    height: 200,
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
  scroll: {
    backgroundColor: "green",
    height: 150
  }
});

