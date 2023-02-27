import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

import TopComunity from '../component/comunityScreen/tabview';
const ComunityScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopComunity />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ComunityScreen;
