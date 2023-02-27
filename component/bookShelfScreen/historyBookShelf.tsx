import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const LayoutHistoryBookShelf = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>List History novel</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default LayoutHistoryBookShelf;
