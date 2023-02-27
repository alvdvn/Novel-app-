import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
const ChatUser = () => {
  return (
    <View style={styles.ContainerUser}>
      <Image
        source={require('../../../images/userprofile.png')}
        style={styles.userAvatar}
      />
      <Text style={styles.userName}>DTxNHD</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  ContainerUser: {
    flexDirection: 'row',
  },
  userAvatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 0.5,
  },
  userName: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
export default ChatUser;
