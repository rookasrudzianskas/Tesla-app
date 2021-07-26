import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, ImageBackground, FlatList} from 'react-native';
import modelX from "./assets/images/ModelX.jpeg";
import modelY from "./assets/images/ModelS.jpeg";
import modelS from "./assets/images/ModelY.jpeg";
import model3 from "./assets/images/Model3.jpeg";
import CarItem from "./components/CarItem";
import StyledButton from "./components/StyledButton";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList />
      {/*<CarItem name={"Model Y"} tagline={"Starting from $105.000"} image={modelY}/>*/}
      {/*<CarItem name={"Model S"} tagline={"Starting from $115.000"} image={modelS}/>*/}
      {/*<CarItem name={"Model 3"} tagline={"Starting from $125.000"} image={model3}/>*/}
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
