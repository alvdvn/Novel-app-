import React, {useState} from 'react';
import {View, useWindowDimensions, Text, StyleSheet} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import LayoutUpdate from './layoutUpdate';
import LayoutComposed from './layoutComposed';
import LayoutYourNovel from './layoutYourNovel';
import LayoutFullNovel from './layoutFullNovel';
import Category from './layoutCategory';
import {SafeAreaView} from 'react-native-safe-area-context';

const CapNhat = () => {
  return (
    <View style={[{backgroundColor: '#ffffff'}, {flex: 1}]}>
      <LayoutUpdate />
    </View>
  );
};
const DanhMuc = () => {
  return (
    <View style={[{backgroundColor: '#ffffff'}, {flex: 1}]}>
      <Category />
    </View>
  );
};
const DaFull = () => {
  return (
    <View style={[{backgroundColor: '#ffffff'}, {flex: 1}]}>
      <LayoutFullNovel />
    </View>
  );
};
const SangTac = () => {
  return (
    <View style={[{backgroundColor: '#ffffff'}, {flex: 1}]}>
      <LayoutComposed />
    </View>
  );
};
const CuaBan = () => {
  return (
    <View style={[{backgroundColor: '#ffffff'}, {flex: 1}]}>
      <LayoutYourNovel />
    </View>
  );
};
const renderScene = SceneMap({
  update: CapNhat,
  category: DanhMuc,
  listfull: DaFull,
  composed: SangTac,
  yournovel: CuaBan,
});

const TopTabView = () => {
  const [index, setIndex] = useState(0);
  const layout = useWindowDimensions();
  const [routes] = useState([
    {key: 'update', title: 'Cập nhật'},
    {key: 'category', title: 'Danh mục'},
    {key: 'listfull', title: 'Đã full'},
    {key: 'composed', title: 'Sáng tác'},
    {key: 'yournovel', title: 'Của bạn'},
  ]);

  return (
    <TabView
      renderTabBar={props => (
        <TabBar
          scrollEnabled={true}
          {...props}
          activeColor={'#2082d3'}
          pressColor={'#2082d3'}
          inactiveColor={'#2082d3'}
          labelStyle={{fontSize: 18}}
          style={{backgroundColor: 'white'}}
          indicatorStyle={{borderBottomColor: '#2082d3', borderBottomWidth: 2}}
        />
      )}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{width: layout.width * (1 / 2)}}
      style={{width: layout.width}}
    />
  );
};
const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: '#ffffff',
  },
});
export default TopTabView;
