import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Public Landing Screen</Text>
    </View>
  );
};

export default LandingScreen;
