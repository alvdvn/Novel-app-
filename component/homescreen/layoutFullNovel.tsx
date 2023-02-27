import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
export interface INovel {
  id: number;
  novelAvatar: any;
  novelName: string;
  authorName: string;
  novelStatus: string;
  novelUpdateTime: string;
}
let ListNovel = [
  {
    id: 1,
    novelAvatar: require('../../images/vudongcankhon.png'),
    novelName: 'Vũ Động Càn khôn',
    authorName: 'Thiên tàm thổ đậu',
    novelStatus: 'full',
    novelUpdateTime: '1-1-2014 9:00 AM',
  },
  {
    id: 2,
    novelAvatar: require('../../images/vudongcankhon.png'),
    novelName: 'Vũ Động Càn khôn',
    authorName: 'Thiên tàm thổ đậu',
    novelStatus: 'full',
    novelUpdateTime: '1-1-2014 9:00 AM',
  },
  {
    id: 3,
    novelAvatar: require('../../images/vudongcankhon.png'),
    novelName: 'Vũ Động Càn khôn',
    authorName: 'Thiên tàm thổ đậu',
    novelStatus: 'full',
    novelUpdateTime: '1-1-2014 9:00 AM',
  },
  {
    id: 4,
    novelAvatar: require('../../images/vudongcankhon.png'),
    novelName: 'Vũ Động Càn khôn',
    authorName: 'Thiên tàm thổ đậu',
    novelStatus: 'full',
    novelUpdateTime: '1-1-2014 9:00 AM',
  },
  {
    id: 5,
    novelAvatar: require('../../images/vudongcankhon.png'),
    novelName: 'Vũ Động Càn khôn',
    authorName: 'Thiên tàm thổ đậu',
    novelStatus: 'full',
    novelUpdateTime: '1-1-2014 9:00 AM',
  },
  {
    id: 6,
    novelAvatar: require('../../images/vudongcankhon.png'),
    novelName: 'Vũ Động Càn khôn',
    authorName: 'Thiên tàm thổ đậu',
    novelStatus: 'full',
    novelUpdateTime: '1-1-2014 9:00 AM',
  },
  {
    id: 7,
    novelAvatar: require('../../images/vudongcankhon.png'),
    novelName: 'Vũ Động Càn khôn',
    authorName: 'Thiên tàm thổ đậu',
    novelStatus: 'full',
    novelUpdateTime: '1-1-2014 9:00 AM',
  },
  {
    id: 8,
    novelAvatar: require('../../images/vudongcankhon.png'),
    novelName: 'Vũ Động Càn khôn',
    authorName: 'Thiên tàm thổ đậu',
    novelStatus: 'full',
    novelUpdateTime: '1-1-2014 9:00 AM',
  },
];

const Item = ({novel}: {novel: INovel}) => {
  return (
    <TouchableOpacity style={styles.containerItem}>
      <View style={styles.bg_avatar}>
        <Image source={novel.novelAvatar} style={styles.novelAvatar} />
      </View>
      <View style={styles.NovelInfo}>
        <Text style={styles.textnovelName}>{novel.novelName}</Text>
        <Text style={styles.textauthorName}>{novel.authorName}</Text>
        <Text style={styles.textnovelStatus}>{novel.novelStatus}</Text>
        <Text style={styles.textnovelUpdateTime}>{novel.novelUpdateTime}</Text>
      </View>
    </TouchableOpacity>
  );
};
const LayoutFullNovel = () => {
  const [listNovelUpdate, SetListNovelUpdate] = useState(ListNovel);
  const [SelectedID, SetSelectID] = useState(null);

  return (
    <View style={styles.container}>
      <Text style={styles.layoutDescription}>
        Danh sách truyện đã cập nhật :
      </Text>
      <FlatList
        data={listNovelUpdate}
        renderItem={({item}) => <Item novel={item} />}
        keyExtractor={(item: INovel) => String(item.id)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: width,
  },
  layoutDescription: {
    fontSize: 20,
    color: '#1f1f1f',
    marginTop: 24,
    marginLeft: 16,
    fontWeight: 'bold',
  },
  containerItem: {
    flexDirection: 'row',
    width: width - 20,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 16,
    borderWidth: 0.5,
    borderColor: '#f8f6f7',
    backgroundColor: '#f8f6f7',
    alignItems: 'center',
  },
  bg_avatar: {
    margin: 8,
    borderRadius: 8,
    backgroundColor: '#f4f2f5',
  },
  novelAvatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  NovelInfo: {
    flexDirection: 'column',
    marginLeft: 10,
  },
  textnovelName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#161415',
  },
  textauthorName: {
    fontSize: 12,
    color: '#1f1f1f',
  },
  textnovelStatus: {
    fontSize: 12,
    color: '#1f1f1f',
  },
  textnovelUpdateTime: {
    fontSize: 12,
    color: '#1f1f1f',
  },
});
export default LayoutFullNovel;
