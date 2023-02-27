import React, {useEffect} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Screen} from 'react-native-screens';
import BubbleChat from './bubbleChat';
import ChatInput from './chatInput';
import ChatUser from './user';
export interface Props {
  message: string;
}
const Conversation: React.FC<Props> = props => {
  const [message, setMessage] = React.useState<string>('');
  useEffect(() => {
    setMessage(props.message);
  }, [setMessage]);
  return (
    <View style={styles.ContainerConversation}>
      <View style={styles.contanerChat}>
        <ChatUser />
        <BubbleChat message={message} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ContainerConversation: {
    flex: 1,
    marginLeft: 10,
  },
  contanerChat: {flex: 1},
});
export default Conversation;
