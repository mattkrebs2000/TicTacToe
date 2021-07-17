import React, {useState, useEffect} from 'react';
import { Dimensions, StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import TicTacToe from "./Subcomponents/TicTacToeGrid"

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
  if (windowWidth > windowHeight) {
    setSpacing(windowWidth - ((windowHeight) * .90))
  }
  else {
setSpacing(windowHeight - windowWidth)
  }
  console.log("Here is spacing", spacing)
}
  
  useEffect(() => {
      getSpace()
  }, [dimensions])

      return (
        <>
       {mode === "portrait" ? 
       (<SafeAreaView>
        
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
     
     
     
      

      <View style = {{backgroundColor: "black", height: (windowHeight / 5) * 5, justifyContent:"center", alignItems: "center"}}>
      <Text style = {{color:"white"}}>
      lakj;dlsakjf;lkjsa;lkfj;lksajd;ls
      </Text>
      
      </View> 
      
      </View>
      <View style = {{flex: windowWidth - spacing }}>
      <TicTacToe />
      </View>
      </View> )
    
  
    
    }

     </>
        
      )
    }



  export default App;
 
