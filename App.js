import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import modelX from "./assets/images/ModelX.jpeg";
import CarItem from "./components/CarItem";
import StyledButton from "./components/StyledButton";

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

});
