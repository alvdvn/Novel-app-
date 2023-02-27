import React from 'react';
import {View, Text, StyleSheet, ViewBase} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const LayoutReview = () => {
  return (
    <View style={styles.container}>
      <Text>Layout Review</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default LayoutReview;
