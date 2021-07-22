import React, { useEffect, useState } from "react";
import { scale, ScaledSheet } from 'react-native-size-matters';

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



  

const ResultsContainer = ({textsearched, posts, email,username, group, setGroup, setSearching, number, setNumber, onlyadmin, setOnlyadmin}) => {



  useEffect(() => {
  const filtered = posts.filter(instance => instance.admin === true)

  setOnlyadmin(filtered)
  }, [posts])
 

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
  onlyadmin.length > 0 && 
  onlyadmin.map((info, value) => (


    <View style={styles.container} key={value}>
      <TouchableOpacity onPress={() => setGroup(info.group)}>
        <Output
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

const styles = ScaledSheet.create({
  container: {

  
  },

});
