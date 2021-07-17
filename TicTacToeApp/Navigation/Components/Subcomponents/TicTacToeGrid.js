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

const TicTacToeGrid = () => {
  const [WidthHeight, setWidthHeight] = useState(0);

  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const getWidthHeightOfGrid = () => {
    if (windowWidth > windowHeight) {
      console.log(WidthHeight), setWidthHeight((windowHeight) * .90);
    } else {
      console.log(WidthHeight), setWidthHeight(windowWidth);
    }
  };

  useEffect(() => {
    getWidthHeightOfGrid();
  }, [Dimensions]);

  return (
    <Grid style={{ width: WidthHeight }}>
      <Row style={{ height: WidthHeight / 3 }}>
        <Col style={{ backgroundColor: "black" }}>
          <TouchableOpacity>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#8959DF",
                height: "100%",
              }}
            >
              <Text
                style={{ fontSize: 100, marginTop: -10 }}
              >
                x
              </Text>
            </View>
          </TouchableOpacity>
        </Col>

        <Col style={{ backgroundColor: "black", width: 6 }}></Col>

        <Col style={{ backgroundColor: "black" }}>
          <TouchableOpacity>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#8959DF",
                height: "100%",
              }}
            >
              <Text
                style={{ fontSize: 100, marginTop: -10 }}
              >
                x
              </Text>
            </View>
          </TouchableOpacity>
        </Col>

        <Col style={{ backgroundColor: "black", width: 6 }}></Col>

        <Col style={{ backgroundColor: "black" }}>
          <TouchableOpacity>
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#8959DF",
                height: "100%",
              }}
            >
              <Text
                style={{ fontSize: 100, marginTop: -10 }}
              >
                x
              </Text>
            </View>
          </TouchableOpacity>
        </Col>
      </Row>

      <Row style={{ backgroundColor: "black", height: 6 }}>
        <Col style={{ backgroundColor: "black", width: "100%" }}></Col>
      </Row>
      <Row style={{ height: WidthHeight / 3 }}>
      <Col style={{ backgroundColor: "black" }}>
        <TouchableOpacity>
          <View
            style={{
              alignItems: "center",
             
              backgroundColor: "#8959DF",
              height: "100%",
            }}
          >
            <Text
              style={{ fontSize: 100, marginTop: -10 }}
            >
              x
            </Text>
          </View>
        </TouchableOpacity>
      </Col>

      <Col style={{ backgroundColor: "black", width: 6 }}></Col>

      <Col style={{ backgroundColor: "black" }}>
        <TouchableOpacity>
          <View
            style={{
              alignItems: "center",
            
              backgroundColor: "#8959DF",
              height: "100%",
            }}
          >
            <Text
              style={{ fontSize: 100, marginTop: -10 }}
            >
              x
            </Text>
          </View>
        </TouchableOpacity>
      </Col>

      <Col style={{ backgroundColor: "black", width: 6 }}></Col>

      <Col style={{ backgroundColor: "black" }}>
        <TouchableOpacity>
          <View
            style={{
              alignItems: "center",
            
              backgroundColor: "#8959DF",
              height: "100%",
            }}
          >
            <Text
              style={{ fontSize: 100, marginTop: -10 }}
            >
              x
            </Text>
          </View>
        </TouchableOpacity>
      </Col>
    </Row>
    <Row style={{ backgroundColor: "black", height: 6 }}>
        <Col style={{ backgroundColor: "black", width: "100%" }}></Col>
      </Row>
    <Row style={{ height: WidthHeight / 3 }}>
    <Col style={{ backgroundColor: "black" }}>
      <TouchableOpacity>
        <View
          style={{
            alignItems: "center",
            
            backgroundColor: "#8959DF",
            height: "100%",
          }}
        >
          <Text
            style={{ fontSize: 100, marginTop: -10 }}
          >
            x
          </Text>
        </View>
      </TouchableOpacity>
    </Col>

    <Col style={{ backgroundColor: "black", width: 6 }}></Col>

    <Col style={{ backgroundColor: "black" }}>
      <TouchableOpacity>
        <View
          style={{
            alignItems: "center",
           
            backgroundColor: "#8959DF",
            height: "100%",
          }}
        >
          <Text
            style={{ fontSize: 100, marginTop: -10 }}
          >
            x
          </Text>
        </View>
      </TouchableOpacity>
    </Col>

    <Col style={{ backgroundColor: "black", width: 6 }}></Col>

    <Col style={{ backgroundColor: "black" }}>
      <TouchableOpacity>
        <View
          style={{
            alignItems: "center",
           
            backgroundColor: "#8959DF",
            height: "100%",
          }}
        >
          <Text
            style={{ fontSize: 100, marginTop: -10 }}
          >
            o
          </Text>
        </View>
      </TouchableOpacity>
    </Col>
  </Row>
    </Grid>
  );
};

export default TicTacToeGrid;
