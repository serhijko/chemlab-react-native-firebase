import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AdminScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Protected Admin Screen</Text>
    </View>
  );
};

export default AdminScreen;
