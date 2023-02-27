import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import TopBookShelf from '../component/bookShelfScreen/tabview';
const BookShelfScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopBookShelf />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default BookShelfScreen;
