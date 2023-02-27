import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-navigation';
const LayoutDownloaded = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>List Downloaded novel</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default LayoutDownloaded;
