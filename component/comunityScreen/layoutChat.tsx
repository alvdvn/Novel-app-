import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import ChatInput from './chatlayout/chatInput';
import Conversation from './chatlayout/conversation';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const LayoutChat: React.FC = () => {
  const [message, setMessage] = useState<string>('');
  const onPressSendMessage = (message: string) => {
    setMessage(message);
  };
  return (
    <View style={styles.container}>
      <Conversation message={message} />
      <ChatInput
        onPressSendMessage={txtMessage => onPressSendMessage(txtMessage)}
      />
      <TouchableOpacity style={styles.btnLogin}>
        <Text>Đăng nhập</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  btnLogin: {
    backgroundColor: '#347aeb',
    alignItems: 'center',
    borderWidth: 0.1,
    width: width / 2,
    padding: 10,
    borderRadius: 16,
    display: 'none',
  },
});
export default LayoutChat;
