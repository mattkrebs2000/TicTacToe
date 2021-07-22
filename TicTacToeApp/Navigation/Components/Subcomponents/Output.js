import React from "react";
import { StyleSheet, View, Text,Image } from "react-native";

import { AppLoading, Font } from "expo";

const Output = ({height, width, username, email, group, number}) => (
    
  <View>
    <View style={styles.container}  maxWidth={650}>
      <View style={styles.container5}>
        <View style={styles.container7}>
          <View style={styles.face}>
            
          </View>
        </View>
        <View style={styles.container8}>
          <View style={styles.container10}>
            <Text style={styles.text2}>EMAIl {email}</Text>
          </View>
          <View style={styles.container11}>
            <Text style={styles.text3}>
              Height:{email} Weight:{username}
            </Text>
          </View>
        </View>
        <View style={styles.container9}>
          <Text style={styles.text4}>Size of Group: {number}</Text>
        </View>
      </View>
      <View style={styles.container6}>
        <Text style={styles.text3}>
          Size of Group: {number}
        </Text>
      </View>
    </View>
  </View>
);

export default Output;

const styles = StyleSheet.create({
  container: {
    width: 340,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    borderColor: "red",
    borderWidth: 2,
  },

  container5: {
    flex: 20,
    flexDirection: "row",
  },
  container6: {
    flex: 5,
    width: "100%",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "black",
  },
  container7: {
    flex: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  container8: {
    flex: 20,
    flexDirection: "column",
  },
  container9: {
    flex: 6,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },

  container10: {
    flex: 20,
    justifyContent: "center",
  },

  container11: {
    flex: 13,
  },
  text: {
    color: "white",
  },
  face: {
    width: 60,
    height: 55,
    borderWidth: 2,
    borderColor: "white",
    borderRadius: 50,

    overflow: "hidden",
  },
  text2: {
    color: "white",
    fontSize: 23,
  },

  text3: {
    color: "white",
    fontSize: 15,
  },

  text4: {
    fontSize: 18,

    color: "white",
  },
  faces: {
    width:60,
    height: 50,
  },
});
