import React, { useState, useEffect } from "react";
import { scale } from "react-native-size-matters";
import { Button, Text, LogBox } from "react-native";
import {
  useNavigation,
  NavigationContainer,
  DrawerActions,
} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

import emailContext from "./Emailcontext";
import groupContext from "./Groupcontext";
import idContext from "./Idcontext";
import SignIn from "./Components/SignIn";
import CreateAccount from "./Components/CreateAccount";
import PrimaryPage from "./Components/Game";

const headerStyle = {
  backgroundColor: "black",
};

const IconBar = () => {
  <View style={{ backgroundColor: "black", fontSize: scale(12) }}>
    <Icon name="add" />
  </View>;
};

// YellowBox.ignoreWarnings(['Setting a timer']);

LogBox.ignoreLogs(['Setting a timer']);

export const Navigation = ({ navigation }) => {
  const [emailGlobal, setEmailGlobal] = useState("");
  const [groupGlobal, setGroupGlobal] = useState("");
  const [idGlobal, setIdGlobal] = useState("");

  const AuthStack = createStackNavigator();
  const AuthStackScreen = () => (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="SignIn"
        component={SignIn}
        options={{
          title: "Sign In",
          headerTitleAlign: "center",
          headerStyle,
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: scale(15),
          },
        }}
      />
      <AuthStack.Screen
        name="CreateAccount"
        component={CreateAccount}
        options={{
          title: "Sign Up",
          headerTitleAlign: "center",
          headerStyle,
          headerTitleStyle: {
            fontSize: scale(15),
          },
          headerTintColor: "white",
        }}
      />
      <AuthStack.Screen
        name="PrimaryPage"
        component={PrimaryPage}
        options={{
          title: "Tic Tac Toe",
          headerLeft: null,
          headerTitleAlign: "center",
          headerStyle,
          headerTintColor: "white",
          headerTitleStyle: {
            fontSize: scale(15),
          },
        }}
      />
    </AuthStack.Navigator>
  );

  //   const Drawer = createDrawerNavigator();

  //   const DrawerScreen = () => (
  //     <Drawer.Navigator
  //       drawerStyle={{
  //         backgroundColor: "black",
  //         width: scale(320),
  //         opacity: 0.85,
  //       }}
  //       drawerContentOptions={{
  //         inactiveTintColor: "white",
  //         activeTintColor: "#167bff",
  //         itemStyle: { marginVertical: scale(20) },
  //       }}
  //       drawerContent={(props) => <DrawerContent {...props} />}
  //     >
  //       <Drawer.Screen name="Return" component={Profile} />
  //       <Drawer.Screen name="Age" component={Age} />
  //       <Drawer.Screen name="Agemanage" component={Agemanage} />
  //       <Drawer.Screen name="Mood" component={Mood} />
  //       <Drawer.Screen name="Moodmanage" component={Moodmanage} />
  //       <Drawer.Screen name="Appetite" component={Appetite} />
  //       <Drawer.Screen name="Appetitemanage" component={Appetitemanage} />

  //       <Drawer.Screen name="Exercise" component={Exercise} />
  //       <Drawer.Screen name="Exercisemanage" component={Exercisemanage} />
  //       <Drawer.Screen name="Sleep" component={Sleep} />
  //       <Drawer.Screen name="Sleepmanage" component={Sleepmanage} />
  //       <Drawer.Screen name="TimeOfDay" component={TimeOfDay} />
  //       <Drawer.Screen name="TimeOfDayManage" component={TimeOfDayManage} />
  //       <Drawer.Screen name="TimeOfWeek" component={TimeOfWeek} />
  //       <Drawer.Screen name="TimeOfWeekManage" component={TimeOfWeekManage} />
  //       <Drawer.Screen name="TimeOfYear" component={TimeOfYear} />
  //       <Drawer.Screen name="TimeOfYearManage" component={TimeOfYearManage} />
  //     </Drawer.Navigator>
  //   );

  return (
    <idContext.Provider
    value={{
      idGlobal,
      setIdGlobal,
    }}
  >
    <groupContext.Provider
      value={{
        groupGlobal,
        setGroupGlobal,
      }}
    >
      <emailContext.Provider
        value={{
          emailGlobal,
          setEmailGlobal,
        }}
      >
        <NavigationContainer>
          <AuthStackScreen emailGlobal={emailGlobal} />
        </NavigationContainer>
      </emailContext.Provider>
    </groupContext.Provider>
    </idContext.Provider>
  );
};
