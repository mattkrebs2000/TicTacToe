import React, {useState, useEffect} from "react";
import { scale, ScaledSheet } from 'react-native-size-matters';
import { StyleSheet, View, TextInput, Button } from "react-native";


function Input (props) {

// const [inputentry, setInputentry] = useState("");

useEffect(() => {
    console.log("this one is running", props.inputentry),
     props.textsearched(props.inputentry)
}, [props.inputentry])

return (

  <View>
    <View style={styles.container}>
      <TextInput
        placeholder="Select Group OR Create One"
        placeholderTextColor="gray"
        style={styles.input}
        onChangeText={(event) => props.setInputentry({searchtext: event})}
        value={props.inputentry}
      />
    
    </View>
  </View>
)};
export default Input;

const styles = ScaledSheet.create({
  input: {
    borderWidth: "2@s",
    borderColor: "#004fff",
    
    width: "300@s",
   
    borderRadius: "10@s",
    shadowColor: "white",
    shadowOffset: { width: "0.5@s", height: "0.5@s" },
    shadowOpacity: "1@s",
    shadowRadius: "0.5@s",
    color: "white",
    lineHeight: "24@s",
    fontSize: "20@s",
    padding: "7@s"
  },
 
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
  },
});
