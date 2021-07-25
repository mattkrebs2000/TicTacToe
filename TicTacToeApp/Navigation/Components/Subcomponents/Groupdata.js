import React from "react";
import { StyleSheet, View, Text,Image } from "react-native";
import { scale, ScaledSheet } from 'react-native-size-matters';

import { AppLoading, Font } from "expo";

const Groupdata = ({ username, email, group}) => (
    
  <View>
    <View >
     <Text style={styles.container} >{group} -- By:{username}</Text>
    </View>
  </View>
);

export default Groupdata;

const styles = ScaledSheet.create({
  container: {
    borderWidth: "2@s",
    borderColor: "#8959DF",
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
  }
});
