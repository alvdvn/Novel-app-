import React, {FC, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TouchableHighlight,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Dimensions} from 'react-native';
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
let ListCate = [
  {
    id: 1,
    des: 'Toàn bộ',
  },
  {
    id: 2,
    des: 'Tên truyện',
  },
  {
    id: 3,
    des: 'Tác giả',
  },
];
let ListStatus = [
  {id: 1, des: 'Toàn bộ'},
  {id: 2, des: 'Đã full'},
  {id: 3, des: 'Đang ra'},
  {id: 4, des: 'Đã dừng'},
];
let ListCategory = [
  {
    id: 1,
    des: 'Truyện FULL',
  },
  {
    id: 2,
    des: 'Truyện Mới',
  },
  {
    id: 3,
    des: 'Truyện mới cập nhật',
  },
  {
    id: 4,
    des: 'Truyện Đọc Nhiều',
  },
  {
    id: 5,
    des: 'Tiên Hiệp',
  },
  {
    id: 6,
    des: 'Khoa Huyễn',
  },
  {
    id: 7,
    des: 'Huyền Huyễn',
  },
  {
    id: 8,
    des: 'Dị Năng',
  },
  {
    id: 9,
    des: 'Quan Trường',
  },
  {
    id: 10,
    des: 'Xuyên Nhanh',
  },
  {
    id: 11,
    des: 'Trinh Thám',
  },
  {
    id: 12,
    des: 'Linh Dị',
  },
  {
    id: 13,
    des: 'Sủng ',
  },
  {
    id: 14,
    des: 'Nữ Cường',
  },
  {
    id: 15,
    des: 'Đông Phương',
  },
  {
    id: 16,
    des: 'Bách Hợp',
  },
  {
    id: 17,
    des: 'Lịch Sử',
  },
  {
    id: 18,
    des: 'Mạt Thế ',
  },
  {
    id: 19,
    des: 'Nữ Phụ',
  },
  {
    id: 20,
    des: 'Việt Nam',
  },
  {
    id: 21,
    des: 'Khác',
  },
  {
    id: 22,
    des: 'Thám Hiểm',
  },
  {
    id: 23,
    des: 'Ngôn Tình',
  },
  {
    id: 24,
    des: 'Kiếm Hiệp',
  },
  {
    id: 25,
    des: 'Đam Mỹ',
  },
  {
    id: 26,
    des: 'Võng du',
  },
  {
    id: 27,
    des: 'hệ Thống',
  },
  {
    id: 28,
    des: 'Dị Giới',
  },
  {
    id: 29,
    des: 'Quân Sự',
  },
  {
    id: 30,
    des: 'Xuyên Không',
  },
  {
    id: 31,
    des: 'Trọng Sinh',
  },
  {
    id: 32,
    des: 'Điền Văn',
  },
  {
    id: 33,
    des: 'Ngược',
  },
  {
    id: 34,
    des: 'Cung Đấu',
  },
  {
    id: 35,
    des: 'Gia Đấu',
  },
  {
    id: 36,
    des: 'Đô Thị',
  },
  {
    id: 37,
    des: 'Hài Hước',
  },
  {
    id: 38,
    des: 'Cổ Đại',
  },
  {
    id: 39,
    des: 'Truyện Teen',
  },
  {
    id: 40,
    des: 'Phương Tây',
  },
  {
    id: 41,
    des: 'Light Novel',
  },
  {
    id: 42,
    des: 'Đoản Văn ',
  },
  {
    id: 43,
    des: 'Linh Di',
  },
];
let ListChapter = [
  {id: 1, des: 'Toàn bộ'},
  {id: 2, des: 'ít hơn 50'},
  {id: 3, des: 'ít hơn 100'},
  {id: 4, des: '100-200'},
  {id: 5, des: 'ít hơn 200'},
  {id: 6, des: '200-500'},
  {id: 7, des: 'ít hơn 500'},
  {id: 8, des: '500-1000'},
  {id: 9, des: 'ít hơn 1000'},
  {id: 10, des: 'lớn hơn 1000'},
];
export interface MyItem {
  cate: any;
  selectID: number;
  onPressItem: () => void;
}
export interface Props {
  AllowSimpleSearch: (display: string) => void;
  display: string;
}
const Item: FC<MyItem> = ({cate, selectID, onPressItem}) => {
  return (
    <TouchableHighlight
      style={
        cate.id === selectID ? styles.containerItemPick : styles.containerItem
      }
      onPress={onPressItem}
      underlayColor={'#545c69'}>
      <Text style={[styles.textItem, {color: '#ffffff'}]}>{cate.des}</Text>
    </TouchableHighlight>
  );
};

const AdvancedSearch: React.FC<Props> = props => {
  const [selectID, setSelectID] = useState(1);
  const [selectStatusID, setSelectStatusID] = useState(1);
  const [selectCategoryID, setSelectCategoryID] = useState(1);
  const [selectChapterID, setSelectChapterID] = useState(1);
  const [display, setDisplay] = useState<string>('none');
  const displayUpdate = props.display;
  const AllowSimpleSearch = () => {
    props.AllowSimpleSearch && props.AllowSimpleSearch('true');
  };
  const onPressReset = () => {
    setSelectID(1);
    setSelectStatusID(1);
    setSelectCategoryID(1);
    setSelectChapterID(1);
  };
  // useEffect(() => {
  //   if (displayUpdate == 'false') {
  //     setDisplay('flex');
  //   } else {
  //     setDisplay('none');
  //   }
  // }, [displayUpdate]);

  const ItemCateList = ListCate.map(cate => {
    return (
      <Item
        key={cate.id}
        cate={cate}
        selectID={selectID}
        onPressItem={() => setSelectID(cate.id)}
      />
    );
  });
  const ItemStatusList = ListStatus.map(status => {
    return (
      <Item
        key={status.id}
        cate={status}
        selectID={selectStatusID}
        onPressItem={() => setSelectStatusID(status.id)}
      />
    );
  });
  const ItemCategoryList = ListCategory.map(category => {
    return (
      <Item
        key={category.id}
        cate={category}
        selectID={selectCategoryID}
        onPressItem={() => setSelectCategoryID(category.id)}
      />
    );
  });
  const ItemListChapter = ListChapter.map(chapter => {
    return (
      <Item
        key={chapter.id}
        cate={chapter}
        selectID={selectChapterID}
        onPressItem={() => setSelectChapterID(chapter.id)}
      />
    );
  });

  return (
    <View
      style={[
        styles.container,
        {display: displayUpdate === 'false' ? 'flex' : 'none'},
      ]}>
      <ScrollView
        style={[styles.containerCategory]}
        contentContainerStyle={{alignItems: 'center'}}>
        <TouchableOpacity style={styles.btnReset} onPress={onPressReset}>
          <Text>Reset</Text>
        </TouchableOpacity>
        <View style={styles.conTainerListchoice}>
          <Text style={[styles.titleListChoice]}>Danh mục</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {ItemCateList}
          </View>
        </View>
        <View style={styles.conTainerListchoice}>
          <Text style={[styles.titleListChoice]}>Trạng thái</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {ItemStatusList}
          </View>
        </View>
        <View style={styles.conTainerListchoice}>
          <Text style={[styles.titleListChoice]}>Trạng thái</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {ItemCategoryList}
          </View>
        </View>
        <View style={styles.conTainerListchoice}>
          <Text style={[styles.titleListChoice]}>Trạng thái</Text>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            {ItemListChapter}
          </View>
        </View>
        <TouchableHighlight
          style={[styles.containerButton]}
          onPress={AllowSimpleSearch}
          underlayColor={'#ffffff'}>
          <Text style={styles.titleButton}>Số chương</Text>
        </TouchableHighlight>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fffbff',
  },
  containerButton: {
    alignItems: 'center',
    marginVertical: 20,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 32,
    borderColor: 'blue',
    borderWidth: 1,
    flex: 1,
  },
  conTainerListchoice: {
    alignSelf: 'baseline',
    backgroundColor: '#f8f6f7',
    marginTop: 40,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderRadius: 16,
  },
  containerCategory: {
    flex: 1,
    width: width - 16,
    borderRadius: 30,
    padding: 10,
  },
  containerItem: {
    backgroundColor: '#545c69',
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginLeft: 8,
    borderRadius: 8,
  },
  containerItemPick: {
    backgroundColor: '#0784e5',
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginLeft: 8,
    borderRadius: 8,
  },
  textItem: {
    fontSize: 14,
  },
  titleButton: {
    color: '#1f1f1f',
    fontSize: 14,
  },
  btnReset: {
    position: 'absolute',
    top: 0,
    right: 16,
  },
  titleListChoice: {
    fontSize: 20,
    color: '#1f1f1f',
    fontWeight: 'bold',
  },
});
export default AdvancedSearch;
