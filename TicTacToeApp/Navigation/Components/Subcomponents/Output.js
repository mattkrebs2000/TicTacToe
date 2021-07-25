import React from "react";
import { StyleSheet, View, Text,Image } from "react-native";
import { scale, ScaledSheet } from 'react-native-size-matters';

import { AppLoading, Font } from "expo";

const Output = ({ username, email, group, number}) => (
    
  <View>
    <View style= {styles.container}>
     <Text style={styles.text} >{group}-{username}</Text>
    </View>
  </View>
);

export default Output;

const styles = ScaledSheet.create({
  container: {
    backgroundColor:"white",
    borderWidth: "4@s",
    borderColor: "#8959DF",
    padding: "7@s",
    width: "225@s",
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
  fontSize: "20@s" , 
  color: "#8959DF",
  }
});
