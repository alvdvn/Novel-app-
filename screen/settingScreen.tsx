import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import TopSetting from '../component/SettingScreen/tabView';
const SettingScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TopSetting />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default SettingScreen;
