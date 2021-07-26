import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
      <View style={styles.carContainer}>
      <StatusBar style="auto" />
        <View style={styles.titles}>
          <Text style={styles.title}>Model S</Text>
          <Text style={styles.subtitle}>Starting at $69.000</Text>
        </View>

      </View>
  );
}

const styles = StyleSheet.create({
  carContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titles: {

  },
  title: {

  },
  subtitle: {

  },
});
