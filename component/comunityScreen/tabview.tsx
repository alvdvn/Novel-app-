import React, {useState} from 'react';
import {View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import LayoutChat from './layoutChat';
import LayoutReview from './layoutReview';

const ChatLayout = () => {
  return (
    <SafeAreaView style={[{flex: 1}, {backgroundColor: '#ffffff'}]}>
      <LayoutChat />
    </SafeAreaView>
  );
};
const ReviewLayout = () => {
  return (
    <SafeAreaView style={[{flex: 1}, {backgroundColor: '#ffffff'}]}>
      <LayoutReview />
    </SafeAreaView>
  );
};
const renderScene = SceneMap({
  chat: ChatLayout,
  review: ReviewLayout,
});

const TopComunity = () => {
  const [index, setIndex] = useState(0);
  const layout = useWindowDimensions();
  const [routes] = useState([
    {key: 'chat', title: 'Nhắn tin'},
    {key: 'review', title: 'Review'},
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
export default TopComunity;
