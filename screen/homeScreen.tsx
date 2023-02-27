import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import TopTabView from '../component/homescreen/tabview';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopTabView />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default HomeScreen;
