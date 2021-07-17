import React from "react";
import { scale, ScaledSheet } from 'react-native-size-matters';
import { StyleSheet, View } from "react-native";
import Input from "./Input";

const SelectingContainer = (props) => (
  <View style={styles.container} >
    <View>
      <Input
        textsearched={(value) => props.textsearched(value)}
        inputentry={props.inputentry}
        setInputentry={props.setInputentry}
      />
    </View>
  </View>
);
    


export default SelectingContainer;

const styles = ScaledSheet.create({
  container: {
    borderRadius: "10@s",
    height: "43@s",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    alignItems:"center",
    justifyContent: "center",
    fontSize: "20@s",
    width: "300@s",
  },

});
