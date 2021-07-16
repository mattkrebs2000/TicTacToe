import React from "react";

// import React, { Component } from "react";

import { StyleSheet, View } from "react-native";
import Output from "./Output";

// import React, { Component } from "react";
// class ResultsContainer extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View>
//           <Output />
//         </View>
//       </View>
//     );
//   }
// }

const ResultsContainer = (props) =>




  props.posts.length > 0 && 
  props.posts.map((info, value) => (
    <View style={styles.container} key={value}>
      <View>
        <Output
          height={props.height}
          width={props.width}
          name={info.name}
          height={info.height}
          weight={info.mass}
          hair={info.hair_color}
          eyes={info.eye_color}
          gender={info.gender}
        />
      </View>
    </View>
  ));
      
export default ResultsContainer;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    height: 80,
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    alignItems: "center",
    justifyContent: "center",
  },

  help: {
   
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    alignItems: "flex-start",
    justifyContent: "center",
    color: "red",
    fontSize: 20,
  },
});
