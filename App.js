import { StatusBar } from 'expo-status-bar';
import React, {useState} from "react";
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen from "./screen/HomeScreen/HomeScreen";
import DetailScreen from "./screen/DetailScreen/DetailScreen";
import MapScreen from "./screen/MapScreen/MapScreen";








const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  return (
      <NavigationContainer initialRouteName={"Home"}>
          <Tab.Navigator>
              <Tab.Screen name="Home" component={HomeScreen} options={{animation:  'slide_from_bottom'}}/>
              <Tab.Screen name='Map' component={MapScreen} options={{animation:  'slide_from_bottom'}}/>
              <Tab.Screen name='DetailScreen' component={DetailScreen} options={{animation:  'slide_from_bottom'}}/>

          </Tab.Navigator>
      </NavigationContainer>

  );
}


