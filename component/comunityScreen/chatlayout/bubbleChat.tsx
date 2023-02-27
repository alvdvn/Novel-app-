import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;

export interface Props {
  message: string;
}
export interface Props1 {
  message: string;
}
// const Item: React.FC<Props> = props => {
//   const [message, setMessage] = React.useState<string>('');
//   useEffect(() => {
//     setMessage(props.message);
//   }, []);
//   return (
//     <View style={styles.ContainerBubble}>
//       <Text style={styles.ChatText}>{message}</Text>
//       <View style={styles.Novel}>
//         <Image
//           style={styles.NovelImage}
//           source={require('../../../images/vudongcankhon.png')}
//         />
//         <View style={styles.NovelInformation}>
//           <Text style={styles.NovelName}>Vũ động càn khôn</Text>
//           <Text style={styles.AuthorName}>Thiên Tằm Thổ Đậu</Text>
//         </View>
//       </View>
//     </View>
//   );
// };
const BubbleChat: React.FC<Props> = props => {
  const [message, setMessage] = React.useState<string>('');
  useEffect(() => {
    setMessage(props.message);
  }, []);
  return (
    <View>
      <View style={styles.ContainerBubble}>
        <Text style={styles.ChatText}>{props.message}</Text>
        <View style={styles.Novel}>
          <Image
            style={styles.NovelImage}
            source={require('../../../images/vudongcankhon.png')}
          />
          <View style={styles.NovelInformation}>
            <Text style={styles.NovelName}>Vũ động càn khôn</Text>
            <Text style={styles.AuthorName}>Thiên Tằm Thổ Đậu</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  ContainerBubble: {
    backgroundColor: 'rgba(247,246,247,0.4)',
    marginLeft: 40,
    flexDirection: 'column',
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 0.2,
    width: width * (2 / 3),
    borderColor: '#ffffff',
  },
  ChatText: {
    marginLeft: 4,
    paddingVertical: 10,
  },
  Novel: {
    borderColor: '#ffffff',
    backgroundColor: 'rgba(244,242,244,0.7)',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.5,
    width: width * (2 / 3) - 16,
  },
  NovelImage: {
    marginVertical: 4,
    marginHorizontal: 10,
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  NovelInformation: {
    flexDirection: 'column',
    marginLeft: 4,
  },
  NovelName: {},
  AuthorName: {},
});
export default BubbleChat;
