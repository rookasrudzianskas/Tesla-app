import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, ImageBackground, FlatList} from 'react-native';
import CarsList from "./components/CarsList";
import Header from "./components/Header";

export default function App() {

  return (
    <View style={styles.container}>
        <Header />
        <CarsList />
        <StatusBar style="auto" />
      {/*<CarItem name={cars.name} tagline={cars.tagline} image={cars.image}/>*/}
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
