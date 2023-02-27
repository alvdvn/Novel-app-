import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Button,
  ScrollView,
  SectionList,
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
    novelStatus: '1280 chương',
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

const LayoutYourNovel = () => {
  const [listNovelUpdate, SetListNovelUpdate] = useState(ListNovel);
  const [SelectedID, SetSelectID] = useState(null);
  const Description =
    'Đây là truyện do độc giả đăng tải lên \n' +
    'ứng dụng \n' +
    'Nếu gặp nội dung vi phạm chính sách, vui lòng \n' +
    'Chặn và tố cáo cho quản trị viên!';

  const renderItem = ({item}: {item: INovel}) => {
    return <Item novel={item} />;
  };
  const ListHeader = () => {
    return (
      <View style={styles.contanerDes}>
        <Text style={styles.textDescription}>{Description}</Text>
      </View>
    );
  };
  return (
    <View style={styles.containerListNovel}>
      <FlatList
        ListHeaderComponent={ListHeader}
        data={listNovelUpdate}
        renderItem={renderItem}
        keyExtractor={(item: INovel) => String(item.id)}
        extraData={SelectedID}
      />
      <View style={styles.containerFooter}>
        <TouchableOpacity style={styles.buttonComposed}>
          <Text style={{color: '#ffffff'}}>Đăng nhập</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerListNovel: {
    flex: 1,
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
  contanerDes: {
    alignItems: 'center',
  },
  textDescription: {
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#f8f6f7',
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 15,
    color: '#161415',
  },
  buttonComposed: {
    backgroundColor: '#0784e5',
    borderRadius: 24,
    overflow: 'hidden',
    paddingHorizontal: 30,
    paddingVertical: 16,
  },
  containerFooter: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});
export default LayoutYourNovel;
