import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const LayoutAccount = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Layout Acount</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default LayoutAccount;
