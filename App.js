import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is Felix Kojo Otchere </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow', // Change the background color here
  },
  text: {
    fontSize: 24, // Increase font size to 24
    fontWeight: 'bold', // Make the name bold
  },
});

