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

useEffect(() => {

  modeMaker()
}, [dimensions])


  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  
  const getSpace = () => {
  if (dimensions.screen.width > dimensions.screen.height) {
    setSpacing(dimensions.screen.width - ((dimensions.screen.height) * .9))
    console.log("Here is spacing - width is bigger", spacing)
  }
  else {
setSpacing(dimensions.screen.height - dimensions.screen.width)
console.log("Here is spacing - height is bigger", spacing)
  }
 
}
  
  useEffect(() => {
 
      getSpace()
  }, [dimensions])

      return (
   
       
       <SafeAreaView>
        
     <TouchableOpacity>
      <TicTacToe />
      </TouchableOpacity>
    
      <View>
      </View> 
      </SafeAreaView>
  
        
      )
    }



  export default App;
 

