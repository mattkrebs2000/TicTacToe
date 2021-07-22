import React, { useEffect, useState } from "react";

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



  

const ResultsContainer = ({textsearched, height, width, posts, email,username, group, setGroup, setSearching, number, setNumber}) => {
 

  var occurrence = function (posts, group) {
  console.log("Hi", posts.length)
   let postss = [];
   for (let i in posts) {
     let match = false;
     let postt = posts[i];
 
     for (let prop in postt) {
     
       let lower = JSON.stringify(postt[prop]).toLowerCase();
       if (lower.match(group.toString().toLowerCase(),1)) {
         match = true;
       }
     }
     if (match === true ) {
       
       postss.push(postt)
       
     }
   }
 setNumber(postss.length)
   console.log("HelloThere", postss.length)
   };


useEffect(() => {
  occurrence(posts, group)
}, [group])
 

    const selectItem = item => {
      setGroup(item)
}
      


return (
  posts.length > 0 && 
  posts.map((info, value) => (



    <View style={styles.container} key={value}>
      <TouchableOpacity onPress={() => setGroup(info.email)}>
        <Output
          height={info.height}
          width={info.width}
          email={info.email}
          username={info.username}
          group={info.group}
          number={number}
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
    backgroundColor: "pink",
  },

  help: {
   
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    alignItems: "flex-start",
    justifyContent: "center",
    color: "red",
    fontSize: 20,
  },
});
