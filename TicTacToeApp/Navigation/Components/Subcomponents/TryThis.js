
import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
} from 'react-native';
import SearchDropDown from "./Subsubcomponents/Searchdropdown";
export default function App() {
  const [dataSource] = useState(['apple', 'banana', 'cow', 'dex', 'zee', 'orange', 'air', 'bottle'])
  const [colors] = useState(['#84DCC6', '#FEC8C8', '#F7E4CF', "#E8DEF3",
  ])
  const [filtered, setFiltered] = useState(dataSource);
  const [searching, setSearching] = useState(false);
  const [inputtext, setInputtext] = useState("");
  const onSearch = (text) => {
    if (text) {
      setSearching(true)
      const temp = text.toLowerCase()

      const tempList = dataSource.filter(item => {
        if (item.match(temp))
          return item
      })
      setFiltered(tempList)
    }
    else {
      setSearching(false)
      setFiltered(dataSource)
    }

  }
  const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
  }
  
useEffect(() => {
  onSearch(inputtext)
  console.log("this has been run", inputtext)
  
}, [inputtext])



  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Search"
        placeholderTextColor='white'
        onChangeText={(text) => setInputtext(text)}
        value={inputtext}
      />

     
      {
        searching &&
        <SearchDropDown
          onPress={() => setSearching(false)}
          dataSource={filtered}
          setInputtext= {setInputtext} />
      }
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    // justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20%',
    flex: 1
  },
  textInput: {
    backgroundColor: '#BFBFBF',
    width: '80%',
    borderRadius: 5,
    height: 50,
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
  },
});

