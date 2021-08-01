import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const PasswordForgetScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Password Forget Screen</Text>
    </View>
  );
};

export default PasswordForgetScreen;
