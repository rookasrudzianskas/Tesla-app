import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View, ImageBackground, FlatList} from 'react-native';
import CarsList from "./components/CarsList";

export default function App() {
  return (
    <View style={styles.container}>
        <CarsList />
        <StatusBar style="auto" />
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
