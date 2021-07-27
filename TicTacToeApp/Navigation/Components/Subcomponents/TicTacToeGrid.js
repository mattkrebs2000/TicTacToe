import React, { useState, useEffect } from "react";

import {
  Dimensions,
  StyleSheet,
  View,
  Text,
  SafeAreaView, 
} from "react-native";

import {
  TouchableOpacity,
} from 'react-native-gesture-handler';

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
  gameon,
  setGameon,
}) => {
  const [method1, setMethod1] = useState(false);
  const [method2, setMethod2] = useState(false);
  const [method3, setMethod3] = useState(false);
  const [method4, setMethod4] = useState(false);
  const [method5, setMethod5] = useState(false);
  const [method6, setMethod6] = useState(false);
  const [method7, setMethod7] = useState(false);
  const [method8, setMethod8] = useState(false);

  useEffect(() => {
    checkwinner();
  }, [box1, box2, box3, box4, box5, box6, box7, box8, box9]);

  useEffect(() => {
    console.log(box1, box2, box3, box4, box5, box6, box7, box8, box9);
  }, [turnx]);

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
    setMethod1(false);
    setMethod2(false);
    setMethod3(false);
    setMethod4(false);
    setMethod5(false);
    setMethod6(false);
    setMethod7(false);
    setMethod8(false);
    setGameon(true);
  };

  const checkwinner = () => {
    if (box1 === "x" && box2 === "x" && box3 === "x") {
      setMethod1(true);
      setGameon(false);

      setTimeout(() => {
        reset();
      }, 2000);
    }
    if (box1 === "o" && box2 === "o" && box3 === "o") {
      setMethod1(true);
      setGameon(false);

      setTimeout(() => {
        reset();
      }, 2000);
    }
    if (box4 === "x" && box5 === "x" && box6 === "x") {
      setMethod2(true);
      setGameon(false);

      setTimeout(() => {
        reset();
      }, 2000);
    }
    if (box4 === "o" && box5 === "o" && box6 === "o") {
      setMethod2(true);
      setGameon(false);

      setTimeout(() => {
        reset();
      }, 2000);
    }
    if (box7 === "x" && box8 === "x" && box9 === "x") {
      setMethod3(true);
      setGameon(false);

      setTimeout(() => {
        reset();
      }, 2000);
    }
    if (box7 === "o" && box8 === "o" && box9 === "o") {
      setMethod3(true);
      setGameon(false);

      setTimeout(() => {
        reset();
      }, 2000);
    }
    if (box1 === "x" && box4 === "x" && box7 === "x") {
      setMethod4(true);
      setGameon(false);

      setTimeout(() => {
        reset();
      }, 2000);
    }
    if (box1 === "o" && box4 === "o" && box7 === "o") {
      setMethod4(true);
      setGameon(false);

      setTimeout(() => {
        reset();
      }, 2000);
    }
    if (box2 === "x" && box5 === "x" && box8 === "x") {
      setMethod5(true);
      setGameon(false);

      setTimeout(() => {
        reset();
      }, 2000);
    }
    if (box2 === "o" && box5 === "o" && box8 === "o") {
      setMethod5(true);
      setGameon(false);

      setTimeout(() => {
        reset();
      }, 2000);
    }
    if (box3 === "x" && box6 === "x" && box9 === "x") {
      setMethod6(true);
      setGameon(false);

      setTimeout(() => {
        reset();
      }, 2000);
    }
    if (box3 === "o" && box6 === "o" && box9 === "o") {
      setMethod6(true);
      setGameon(false);

      setTimeout(() => {
        reset();
      }, 2000);
    }
    if (box1 === "x" && box5 === "x" && box9 === "x") {
      setMethod7(true);
      setGameon(false);

      setTimeout(() => {
        reset();
      }, 2000);
    }
    if (box1 === "o" && box5 === "o" && box9 === "o") {
      setMethod7(true);
      setGameon(false);

      setTimeout(() => {
        reset();
      }, 2000);
    }
    if (box3 === "x" && box5 === "x" && box7 === "x") {
      setMethod8(true);
      setGameon(false);

      setTimeout(() => {
        reset();
      }, 2000);
    }
    if (box3 === "o" && box5 === "o" && box7 === "o") {
      setMethod8(true);
      setGameon(false);

      setTimeout(() => {
        reset();
      }, 2000);
    }
    if (
      box1.length > 0 &&
      box2.length > 0 &&
      box3.length > 0 &&
      box4.length > 0 &&
      box5.length > 0 &&
      box6.length > 0 &&
      box7.length > 0 &&
      box8.length > 0 &&
      box9.length > 0
    ) {
      setTimeout(() => {
        reset();
      }, 2000);
    } else {
      setTurnx(!turnx);
    }
  };

  const determine1xo = () => {
    if (gameon) {
      if (box1.length === 0) {
        if (turnx === true) {
          setBox1("x");
        } else {
          setBox1("o");
        }
      } else {
        null;
      }
    } else {
      null;
    }
  };
  const determine2xo = () => {
    if (gameon) {
      if (box2.length === 0) {
        if (turnx === true) {
          setBox2("x");
        } else {
          setBox2("o");
        }
      } else {
        null;
      }
    } else {
      null;
    }
  };

  const determine3xo = () => {
    if (gameon) {
      if (box3.length === 0) {
        if (turnx === true) {
          setBox3("x");
        } else {
          setBox3("o");
        }
      } else {
        null;
      }
    } else {
      null;
    }
  };

  const determine4xo = () => {
    if (gameon) {
      if (box4.length === 0) {
        if (turnx === true) {
          setBox4("x");
        } else {
          setBox4("o");
        }
      } else {
        null;
      }
    } else {
      null;
    }
  };
  const determine5xo = () => {
    if (gameon) {
      if (box5.length === 0) {
        if (turnx === true) {
          setBox5("x");
        } else {
          setBox5("o");
        }
      } else {
        null;
      }
    } else {
      null;
    }
  };
  const determine6xo = () => {
    if (gameon) {
      if (box6.length === 0) {
        if (turnx === true) {
          setBox6("x");
        } else {
          setBox6("o");
        }
      } else {
        null;
      }
    } else {
      null;
    }
  };

  const determine7xo = () => {
    if (gameon) {
      if (box7.length === 0) {
        if (turnx === true) {
          setBox7("x");
        } else {
          setBox7("o");
        }
      } else {
        null;
      }
    } else {
      null;
    }
  };
  const determine8xo = () => {
    if (gameon) {
      if (box8.length === 0) {
        if (turnx === true) {
          setBox8("x");
        } else {
          setBox8("o");
        }
      } else {
        null;
      }
    } else {
      null;
    }
  };

  const determine9xo = () => {
    if (gameon) {
      if (box9.length === 0) {
        if (turnx === true) {
          setBox9("x");
        } else {
          setBox9("o");
        }
      } else {
        null;
      }
    } else {
      null;
    }
  };

  const windowWidth = Dimensions.get("window").width;

  return (
    <Grid style={{ width: windowWidth }}>
      <Row style={{ height: windowWidth / 3 }}>
        <Col style={{ backgroundColor: "white" }}>
          <TouchableOpacity
            onPress={() => {
              determine1xo();
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#8959DF",
                height: "100%",
              }}
            >
              <Text
                style={
                  method1 || method4 || method7
                    ? { fontSize: 100, color: "white" }
                    : { fontSize: 100, color: "black" }
                }
              >
                {box1}
              </Text>
            </View>
          </TouchableOpacity>
        </Col>

        <Col style={{ backgroundColor: "black", width: 6 }}></Col>

        <Col style={{ backgroundColor: "white" }}>
          <TouchableOpacity
            onPress={() => {
              determine2xo();
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#8959DF",
                height: "100%",
              }}
            >
              <Text
                style={
                  method1 || method5
                    ? { fontSize: 100, color: "white" }
                    : { fontSize: 100, color: "black" }
                }
              >
                {box2}
              </Text>
            </View>
          </TouchableOpacity>
        </Col>

        <Col style={{ backgroundColor: "black", width: 6 }}></Col>

        <Col style={{ backgroundColor: "white" }}>
          <TouchableOpacity
            onPress={() => {
              determine3xo();
            }}
          >
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#8959DF",
                height: "100%",
              }}
            >
              <Text
                style={
                  method1 || method6 || method8
                    ? { fontSize: 100, color: "white" }
                    : { fontSize: 100, color: "black" }
                }
              >
                {box3}
              </Text>
            </View>
          </TouchableOpacity>
        </Col>
      </Row>

      <Row style={{ backgroundColor: "black", height: 6 }}>
        <Col style={{ backgroundColor: "black", width: "100%" }}></Col>
      </Row>
      <Row style={{ height: windowWidth / 3 }}>
        <Col style={{ backgroundColor: "white" }}>
          <TouchableOpacity
            onPress={() => {
              determine4xo();
            }}
          >
            <View
              style={{
                alignItems: "center",

                backgroundColor: "#8959DF",
                height: "100%",
              }}
            >
              <Text
                style={
                  method2 || method4
                    ? { fontSize: 100, color: "white" }
                    : { fontSize: 100, color: "black" }
                }
              >
                {box4}
              </Text>
            </View>
          </TouchableOpacity>
        </Col>

        <Col style={{ backgroundColor: "black", width: 6 }}></Col>

        <Col style={{ backgroundColor: "white" }}>
          <TouchableOpacity
            onPress={() => {
              determine5xo();
            }}
          >
            <View
              style={{
                alignItems: "center",

                backgroundColor: "#8959DF",
                height: "100%",
              }}
            >
              <Text
                style={
                  method2 || method5 || method7 || method8
                    ? { fontSize: 100, color: "white" }
                    : { fontSize: 100, color: "black" }
                }
              >
                {box5}
              </Text>
            </View>
          </TouchableOpacity>
        </Col>

        <Col style={{ backgroundColor: "black", width: 6 }}></Col>

        <Col style={{ backgroundColor: "white" }}>
          <TouchableOpacity
            onPress={() => {
              determine6xo();
            }}
          >
            <View
              style={{
                alignItems: "center",

                backgroundColor: "#8959DF",
                height: "100%",
              }}
            >
              <Text
                style={
                  method2 || method6
                    ? { fontSize: 100, color: "white" }
                    : { fontSize: 100, color: "black" }
                }
              >
                {box6}
              </Text>
            </View>
          </TouchableOpacity>
        </Col>
      </Row>
      <Row style={{ backgroundColor: "black", height: 6 }}>
        <Col style={{ backgroundColor: "black", width: "100%" }}></Col>
      </Row>
      <Row style={{ height: windowWidth / 3 }}>
        <Col style={{ backgroundColor: "white" }}>
          <TouchableOpacity
            onPress={() => {
              determine7xo();
            }}
          >
            <View
              style={{
                alignItems: "center",

                backgroundColor: "#8959DF",
                height: "100%",
              }}
            >
              <Text
                style={
                  method3 || method4 || method8
                    ? { fontSize: 100, color: "white" }
                    : { fontSize: 100, color: "black" }
                }
              >
                {box7}
              </Text>
            </View>
          </TouchableOpacity>
        </Col>

        <Col style={{ backgroundColor: "black", width: 6 }}></Col>

        <Col style={{ backgroundColor: "white" }}>
          <TouchableOpacity
            onPress={() => {
              determine8xo();
            }}
          >
            <View
              style={{
                alignItems: "center",

                backgroundColor: "#8959DF",
                height: "100%",
              }}
            >
              <Text
                style={
                  method3 || method5
                    ? { fontSize: 100, color: "white" }
                    : { fontSize: 100, color: "black" }
                }
              >
                {box8}
              </Text>
            </View>
          </TouchableOpacity>
        </Col>

        <Col style={{ backgroundColor: "black", width: 6 }}></Col>

        <Col style={{ backgroundColor: "white" }}>
          <TouchableOpacity
            onPress={() => {
              determine9xo();
            }}
          >
            <View
              style={{
                alignItems: "center",

                backgroundColor: "#8959DF",
                height: "100%",
              }}
            >
              <Text
                style={
                  method3 || method6 || method7
                    ? { fontSize: 100, color: "white" }
                    : { fontSize: 100, color: "black" }
                }
              >
                {box9}
              </Text>
            </View>
          </TouchableOpacity>
        </Col>
      </Row>
    </Grid>
  );
};

export default TicTacToeGrid;
