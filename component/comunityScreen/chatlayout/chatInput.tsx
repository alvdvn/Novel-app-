import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
} from 'react-native';
import {Dimensions} from 'react-native';
export interface Props {
  onPressSendMessage: (a: string) => void;
}
const width = Dimensions.get('window').width;

const ChatInput: React.FC<Props> = props => {
  const [message, setMessage] = useState<string>('please enter message');
  const onPressSendMessage = () => {
    props.onPressSendMessage && props.onPressSendMessage(message);
  };
  return (
    <View style={styles.containerInput}>
      <TextInput
        maxLength={1000}
        multiline={true}
        onChangeText={newtext => {
          setMessage(newtext);
        }}
        keyboardType={'name-phone-pad'}
        value={message}
        style={styles.textMessage}
        placeholder={'input your message'}
      />
      <TouchableOpacity
        style={styles.btnSendMessage}
        onPress={onPressSendMessage}>
        <Image
          source={require('../../../images/send.png')}
          style={styles.iconSend}
        />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  containerInput: {
    flex: 1,
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    borderWidth: 1,
    width: width - 20,
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginLeft: 10,
  },
  textMessage: {},
  btnSendMessage: {
    position: 'absolute',
    right: 10,
  },
  iconSend: {
    width: 25,
    height: 25,
  },
});
export default ChatInput;
