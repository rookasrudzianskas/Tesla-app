import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import modelX from "./assets/images/ModelX.jpeg";
import modelY from "./assets/images/ModelS.jpeg";
import modelS from "./assets/images/ModelY.jpeg";
import model3 from "./assets/images/Model3.jpeg";
import CarItem from "./components/CarItem";
import StyledButton from "./components/StyledButton";

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem name={"Model X"} tagline={"Starting from $95.000"} image={modelX}/>
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
