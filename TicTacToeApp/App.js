import React, {useState, useEffect} from 'react';
import { Dimensions, StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import TicTacToe from "./Components/TicTacToeGrid"

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

import  { Col, Row, Grid } from 'react-native-easy-grid';

 
const App = () => {
  const [spacing, setSpacing] = useState(0);
  const [dimensions, setDimensions] = useState({ window, screen });
   const [mode, setMode] = useState("portrait");

   const modeMaker = () => {
    if (dimensions.screen.width > dimensions.screen.height) {
      setMode("landscape") 
      
    } else {
      setMode("portrait") 
     
    }
    console.log(mode)
   };

 const onChange = ({ window, screen }) => {
     setDimensions({ window, screen });
   };

 useEffect(() => {
     Dimensions.addEventListener("change", onChange);

     return () => {
       Dimensions.removeEventListener("change", onChange),
      modeMaker();
     };

   });




  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
  const getSpace = () => {
  if (windowWidth > windowHeight){
    setSpacing(windowWidth - windowHeight)
  }
  else {
setSpacing(windowHeight-windowWidth)
  }
}
  
  useEffect(() => {
      getSpace()
  }, [Dimensions])

      return (
        <>
       {mode === "portrait" ? 
       (<SafeAreaView>
        <TouchableOpacity>
        <View style = {{height: spacing / 3, justifyContent:"center", alignItems: "center" }}>
        <Text style={{fontSize: 50}}>
     Tic Tac Toe
        </Text>
        
        </View>
        </TouchableOpacity>
     <TouchableOpacity>
      <TicTacToe />
      </TouchableOpacity>
     


      <View>
      
      
      </View> 
      </SafeAreaView>)
      :
   (
    <View style = {{flex: 1, flexDirection:"row"}}>
    <View style = {{flex: spacing}}>
     
      <View style = {{backgroundColor: "white", height: windowHeight / 3, justifyContent:"center", alignItems: "center" }}>
        <Text style={{fontSize: 50}}>
     Tic Tac Toe
        </Text>
        
        </View>
     
      

      <View style = {{backgroundColor: "orange", height: (windowHeight / 3) * 2, justifyContent:"center", alignItems: "center"}}>
      <Text>
      lakj;dlsakjf;lkjsa;lkfj;lksajd;ls
      </Text>
      
      </View> 
      
      </View>
      <View style = {{flex: windowHeight}}>
      <TicTacToe />
      </View>
      </View> )
    
  
    
    }

     </>
        
      )
    }



  export default App;
 
