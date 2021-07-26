import React, { useState, useEffect } from "react";

import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

import { Col, Row, Grid } from "react-native-easy-grid";

const TicTacToeGrid = ({
  box1,
  setBox1,
  box2,
  setBox2,
  box3,
  setBox3,
  box4,
  setBox4,
  box5,
  setBox5,
  box6,
  setBox6,
  box7,
  setBox7,
  box8,
  setBox8,
  box9,
  setBox9,
  turnx,
  setTurnx,
}) => {

useEffect(() => {
  checkwinner()
}, [box1,box2,box3,box4,box5,box6,box7,box8,box9])

useEffect(() => {
console.log(box1,box2,box3,box4,box5,box6,box7,box8,box9)
}, [turnx])

const reset = () => {



setBox1("");
setBox2("");
setBox3("");
setBox4("");
setBox5("");
setBox6("");
setBox7("");
setBox8("");
setBox9("");
}

  const checkwinner = () => {
    if (box1 ==="x" && box2 === "x" && box3 === "x") {
      alert("'x' won");

      setTimeout(() => {
        reset()
      }, 2000);

    }
    if (box1 ==="o" && box2 === "o" && box3 === "o") {
      alert("'o' won");

      setTimeout(() => {
        reset()
      }, 2000);

    }
    if (box4 ==="x" && box5 === "x" && box6 === "x") {
      alert("'x' won");

      setTimeout(() => {
        reset()
      }, 2000);

    }
    if (box4 ==="o" && box5 === "o" && box6 === "o") {
      alert("'o' won");

      setTimeout(() => {
        reset()
      }, 2000);

    }
    if (box7 ==="x" && box8 === "x" && box9 === "x") {
      alert("'x' won");

      setTimeout(() => {
        reset()
      }, 2000);

    }
    if (box7 ==="o" && box8 === "o" && box9 === "o") {
      alert("'o' won");

      setTimeout(() => {
        reset()
      }, 2000);

    }
    if (box1 ==="x" && box4 === "x" && box7 === "x") {
      alert("'x' won");

      setTimeout(() => {
        reset()
      }, 2000);

    }
    if (box1 ==="o" && box4 === "o" && box7 === "o") {
      alert("'o' won");

      setTimeout(() => {
        reset()
      }, 2000);

    }
    if (box2 ==="x" && box5 === "x" && box8 === "x") {
      alert("'x' won");

      setTimeout(() => {
        reset()
      }, 2000);

    }
    if (box2 ==="o" && box5 === "o" && box8 === "o") {
      alert("'o' won");

      setTimeout(() => {
        reset()
      }, 2000);

    }
    if (box3 ==="x" && box6 === "x" && box9 === "x") {
      alert("'x' won");

      setTimeout(() => {
        reset()
      }, 2000);

    }
    if (box3 ==="o" && box6 === "o" && box9 === "o") {
      alert("'o' won");

      setTimeout(() => {
        reset()
      }, 2000);

    }
    if (box1 ==="x" && box5 === "x" && box9 === "x") {
      alert("'x' won");

      setTimeout(() => {
        reset()
      }, 2000);

    }
    if (box1 ==="o" && box5 === "o" && box9 === "o") {
      alert("'o' won");

      setTimeout(() => {
        reset()
      }, 2000);

    }
    if (box3 ==="x" && box5 === "x" && box7 === "x") {
      alert("'x' won");

      setTimeout(() => {
        reset()
      }, 2000);

    }
    if (box3 ==="o" && box5 === "o" && box7 === "o") {
      alert("'o' won");

      setTimeout(() => {
        reset()
      }, 2000);

    }
    if (box1.length > 0 && box2.length > 0 && box3.length > 0 && box4.length > 0 && box5.length > 0 && box6.length > 0 && box7.length > 0 && box8.length > 0 && box9.length > 0) {
      alert("This game was a tie!");

      setTimeout(() => {
        reset()
      }, 2000);
      
    }
    else {
      setTurnx(!turnx);
    }
  };


  const determine1xo = () => {
    if (box1.length === 0){
    if (turnx === true) {
      setBox1("x");
    } else {
      setBox1("o");
    }
  } else {
    null
  }
  };
  const determine2xo = () => {
    if (box2.length === 0){
      if (turnx === true) {
        setBox2("x");
      } else {
        setBox2("o");
      }
    } else {
      null
    }
  };
  const determine3xo = () => {
    if (box3.length === 0){
      if (turnx === true) {
        setBox3("x");
      } else {
        setBox3("o");
      }
    } else {
      null
    }
  };
  const determine4xo = () => {
    if (box4.length === 0){
      if (turnx === true) {
        setBox4("x");
      } else {
        setBox4("o");
      }
    } else {
      null
    }
  };
  const determine5xo = () => {
    if (box5.length === 0){
      if (turnx === true) {
        setBox5("x");
      } else {
        setBox5("o");
      }
    } else {
      null
    }
  };
  const determine6xo = () => {
    if (box6.length === 0){
      if (turnx === true) {
        setBox6("x");
      } else {
        setBox6("o");
      }
    } else {
      null
    }
  };
  const determine7xo = () => {
    if (box7.length === 0){
      if (turnx === true) {
        setBox7("x");
      } else {
        setBox7("o");
      }
    } else {
      null
    }
  };
  const determine8xo = () => {
    if (box8.length === 0){
      if (turnx === true) {
        setBox8("x");
      } else {
        setBox8("o");
      }
    } else {
      null
    }
  };
  const determine9xo = () => {
    if (box9.length === 0){
      if (turnx === true) {
        setBox9("x");
      } else {
        setBox9("o");
      }
    } else {
      null
    }
  };

  const windowWidth = Dimensions.get("window").width;

  return (
    <Grid style={{ width: windowWidth }}>
      <Row style={{ height: windowWidth / 3 }}>
        <Col style={{ backgroundColor: "white" }}>
          <TouchableOpacity onPress={() => {
            determine1xo()
          }}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#8959DF",
                height: "100%",
              }}
            >
              <Text style={{ fontSize: 100 }}>{box1}</Text>
            </View>
          </TouchableOpacity>
        </Col>

        <Col style={{ backgroundColor: "black", width: 6 }}></Col>

        <Col style={{ backgroundColor: "white" }}>
          <TouchableOpacity onPress={() => {
            determine2xo()
          }}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#8959DF",
                height: "100%",
              }}
            >
              <Text style={{ fontSize: 100 }}>{box2}</Text>
            </View>
          </TouchableOpacity>
        </Col>

        <Col style={{ backgroundColor: "black", width: 6 }}></Col>

        <Col style={{ backgroundColor: "white" }}>
          <TouchableOpacity onPress={() => {
            determine3xo()
          }}>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#8959DF",
                height: "100%",
              }}
            >
              <Text style={{ fontSize: 100 }}>{box3}</Text>
            </View>
          </TouchableOpacity>
        </Col>
      </Row>

      <Row style={{ backgroundColor: "black", height: 6 }}>
        <Col style={{ backgroundColor: "black", width: "100%" }}></Col>
      </Row>
      <Row style={{ height: windowWidth / 3 }}>
        <Col style={{ backgroundColor: "white" }}>
          <TouchableOpacity onPress={() => {
            determine4xo()
          }}>
            <View
              style={{
                alignItems: "center",

                backgroundColor: "#8959DF",
                height: "100%",
              }}
            >
              <Text style={{ fontSize: 100 }}>{box4}</Text>
            </View>
          </TouchableOpacity>
        </Col>

        <Col style={{ backgroundColor: "black", width: 6 }}></Col>

        <Col style={{ backgroundColor: "white" }}>
          <TouchableOpacity onPress={() => {
            determine5xo()
          }}>
            <View
              style={{
                alignItems: "center",

                backgroundColor: "#8959DF",
                height: "100%",
              }}
            >
              <Text style={{ fontSize: 100 }}>{box5}</Text>
            </View>
          </TouchableOpacity>
        </Col>

        <Col style={{ backgroundColor: "black", width: 6 }}></Col>

        <Col style={{ backgroundColor: "white" }}>
          <TouchableOpacity onPress={() => {
            determine6xo()
          }}>
            <View
              style={{
                alignItems: "center",

                backgroundColor: "#8959DF",
                height: "100%",
              }}
            >
              <Text style={{ fontSize: 100 }}>{box6}</Text>
            </View>
          </TouchableOpacity>
        </Col>
      </Row>
      <Row style={{ backgroundColor: "black", height: 6 }}>
        <Col style={{ backgroundColor: "black", width: "100%" }}></Col>
      </Row>
      <Row style={{ height: windowWidth / 3 }}>
        <Col style={{ backgroundColor: "white" }}>
          <TouchableOpacity onPress={() => {
            determine7xo()
          }}>
            <View
              style={{
                alignItems: "center",

                backgroundColor: "#8959DF",
                height: "100%",
              }}
            >
              <Text style={{ fontSize: 100 }}>{box7}</Text>
            </View>
          </TouchableOpacity>
        </Col>

        <Col style={{ backgroundColor: "black", width: 6 }}></Col>

        <Col style={{ backgroundColor: "white" }}>
          <TouchableOpacity onPress={() => {
            determine8xo()
          }}>
            <View
              style={{
                alignItems: "center",

                backgroundColor: "#8959DF",
                height: "100%",
              }}
            >
              <Text style={{ fontSize: 100 }}>{box8}</Text>
            </View>
          </TouchableOpacity>
        </Col>

        <Col style={{ backgroundColor: "black", width: 6 }}></Col>

        <Col style={{ backgroundColor: "white" }}>
          <TouchableOpacity onPress={() => {
            determine9xo()
          }}>
            <View
              style={{
                alignItems: "center",

                backgroundColor: "#8959DF",
                height: "100%",
              }}
            >
              <Text style={{ fontSize: 100 }}>{box9}</Text>
            </View>
          </TouchableOpacity>
        </Col>
      </Row>
    </Grid>
  );
};

export default TicTacToeGrid;
