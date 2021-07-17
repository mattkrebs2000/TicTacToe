import React, {useState, useEffect} from 'react';
import { Dimensions, StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import TicTacToe from "./Subcomponents/TicTacToeGrid"

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

import  { Col, Row, Grid } from 'react-native-easy-grid';

 
const App = () => {
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
 

