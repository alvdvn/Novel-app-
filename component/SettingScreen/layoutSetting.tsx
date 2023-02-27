import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {Dimensions} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const width = Dimensions.get('window').width;
const LayoutSetting = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.TextTitle}>Setting</Text>
      <View style={styles.containerButtonLogout}>
        <Button title="Logout" />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  TextTitle: {
    fontSize: 50,
    color: '#1f1f1f',
  },
  containerButtonLogout: {
    width: width - 200,
  },
});
export default LayoutSetting;
