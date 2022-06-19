import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';

export const Home = () => (
  <SafeAreaView style={styles.safeAreaView}>
    <StatusBar barStyle={'dark-content'} />
    <View style={styles.container}>
      <Text style={styles.test}>Hello</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  test: {
    fontSize: 24,
    fontWeight: '600',
  },
});
