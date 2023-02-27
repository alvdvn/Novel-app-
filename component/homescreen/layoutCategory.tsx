import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
export interface INovel {
  id: number;
  name: string;
}
let listCategory = [
  {
    id: 1,
    name: 'Truyện FULL',
  },
  {
    id: 2,
    name: 'Truyện Mới',
  },
  {
    id: 3,
    name: 'Truyện mới cập nhật',
  },
  {
    id: 4,
    name: 'Truyện Đọc Nhiều',
  },
  {
    id: 5,
    name: 'Tiên Hiệp',
  },
  {
    id: 6,
    name: 'Khoa Huyễn',
  },
  {
    id: 7,
    name: 'Huyền Huyễn',
  },
  {
    id: 8,
    name: 'Dị Năng',
  },
  {
    id: 9,
    name: 'Quan Trường',
  },
  {
    id: 10,
    name: 'Xuyên Nhanh',
  },
  {
    id: 11,
    name: 'Trinh Thám',
  },
  {
    id: 12,
    name: 'Linh Dị',
  },
  {
    id: 13,
    name: 'Sủng ',
  },
  {
    id: 14,
    name: 'Nữ Cường',
  },
  {
    id: 15,
    name: 'Đông Phương',
  },
  {
    id: 16,
    name: 'Bách Hợp',
  },
  {
    id: 17,
    name: 'Lịch Sử',
  },
  {
    id: 18,
    name: 'Mạt Thế ',
  },
  {
    id: 19,
    name: 'Nữ Phụ',
  },
  {
    id: 20,
    name: 'Việt Nam',
  },
  {
    id: 21,
    name: 'Khác',
  },
  {
    id: 22,
    name: 'Thám Hiểm',
  },
  {
    id: 23,
    name: 'Ngôn Tình',
  },
  {
    id: 24,
    name: 'Kiếm Hiệp',
  },
  {
    id: 25,
    name: 'Đam Mỹ',
  },
  {
    id: 26,
    name: 'Võng du',
  },
  {
    id: 27,
    name: 'hệ Thống',
  },
  {
    id: 28,
    name: 'Dị Giới',
  },
  {
    id: 29,
    name: 'Quân Sự',
  },
  {
    id: 30,
    name: 'Xuyên Không',
  },
  {
    id: 31,
    name: 'Trọng Sinh',
  },
  {
    id: 32,
    name: 'Điền Văn',
  },
  {
    id: 33,
    name: 'Ngược',
  },
  {
    id: 34,
    name: 'Cung Đấu',
  },
  {
    id: 35,
    name: 'Gia Đấu',
  },
  {
    id: 36,
    name: 'Đô Thị',
  },
  {
    id: 37,
    name: 'Hài Hước',
  },
  {
    id: 38,
    name: 'Cổ Đại',
  },
  {
    id: 39,
    name: 'Truyện Teen',
  },
  {
    id: 40,
    name: 'Phương Tây',
  },
  {
    id: 41,
    name: 'Light Novel',
  },
  {
    id: 42,
    name: 'Đoản Văn ',
  },
  {
    id: 43,
    name: 'Linh Di',
  },
];

const Item = ({itemCategory}: {itemCategory: INovel}) => {
  return (
    <TouchableOpacity style={styles.containerItem}>
      <Text style={styles.textCategory}>{itemCategory.name}</Text>
    </TouchableOpacity>
  );
};
const Category = () => {
  const [ListCategoryUpdate, SetListCategory] = useState(listCategory);
  const [SelectedID, SetSelectID] = useState(null);
  const renderItem = ({item}: {item: INovel}) => {
    return <Item itemCategory={item} />;
  };
  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        data={ListCategoryUpdate}
        renderItem={renderItem}
        keyExtractor={(item: INovel) => String(item.id)}
        extraData={SelectedID}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerItem: {
    width: width / 2 - 18,
    borderRadius: 8,
    backgroundColor: '#f8f6f7',
    marginTop: 5,
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginLeft: 12,
  },
  textCategory: {
    fontSize: 20,
    color: '#161415',
    textAlign: 'center',
  },
});
export default Category;
