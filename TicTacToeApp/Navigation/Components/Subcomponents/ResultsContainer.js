import React from "react";

// import React, { Component } from "react";

import { StyleSheet, View, TouchableOpacity } from "react-native";
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



  

const ResultsContainer = ({textsearched, height, width, posts, group, setgroup}) => {

    const selectItem = item => {

     setgroup(item),
     textsearched(group)
     

      }
      
return (
  posts.length > 0 && 
  posts.map((info, value) => (



    <View style={styles.container} key={value}>
      <TouchableOpacity onPress={() => selectItem(info.name)}>
        <Output
          height={height}
          width={width}
          name={info.name}
          height={info.height}
          weight={info.mass}
          hair={info.hair_color}
          eyes={info.eye_color}
          gender={info.gender}
        />
      </TouchableOpacity>
    </View>
  ))
)
};
      
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
