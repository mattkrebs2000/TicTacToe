import React from "react";
import { StyleSheet, View } from "react-native";
import Input from "./Input";

const SelectingContainer = (props) => (
  <View style={styles.container} width={props.width - 35} maxWidth={650}>
    <View>
      <Input
        height={props.height}
        width={props.width}
        textsearched={(value) => props.textsearched(value)}
      />
    </View>
  </View>
);
    


export default SelectingContainer;

const styles = StyleSheet.create({
  container: {
   
    height: 50,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    borderWidth: 2,
    borderColor: "red",
    margin: 10,
    alignItems:"center",
    justifyContent: "center",
  },

});
