import React, {useState, useEffect} from "react";
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
        placeholder="Search Here"
        placeholderTextColor="white"
        style={styles.input}
        onChangeText={(event) => props.setInputentry({searchtext: event})}
        value={props.inputentry}
      />
      <Button
        onPress={() => props.textsearched(props.inputentry)}
        title="Filter!"
        color="white"
      />
    </View>
  </View>
)};
export default Input;

const styles = StyleSheet.create({
  input: {
    width:"80%",
    marginHorizontal: 0,
    color: "white",
    fontSize: 28,
    paddingStart: 8,
    
  },
  button: {
    color: "white",
    width: "30%",
    marginEnd: 0,
    
  },
  container: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems:"center",
  },
});
