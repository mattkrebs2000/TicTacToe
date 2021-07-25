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

  const windowWidth = Dimensions.get("window").width;

  return (
    <Grid style={{ width: windowWidth }}>
      <Row style={{ height: windowWidth / 3 }}>
        <Col style={{ backgroundColor: "white" }}>
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

        <Col style={{ backgroundColor: "white" }}>
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

        <Col style={{ backgroundColor: "white" }}>
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
      <Row style={{ height: windowWidth / 3 }}>
      <Col style={{ backgroundColor: "white" }}>
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

      <Col style={{ backgroundColor: "white" }}>
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

      <Col style={{ backgroundColor: "white" }}>
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
    <Row style={{ height: windowWidth / 3 }}>
    <Col style={{ backgroundColor: "white" }}>
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

    <Col style={{ backgroundColor: "white" }}>
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

    <Col style={{ backgroundColor: "white" }}>
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
