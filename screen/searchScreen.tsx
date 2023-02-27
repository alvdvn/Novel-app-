import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import AdvancedSearch from '../component/searchScreen/advancedSearch';
import SearchBox from '../component/searchScreen/searchBox';
import SimpleSearch from '../component/searchScreen/simpleSearch';

const SearchScreen: React.FC = () => {
  const [display, setDisplay] = useState('true');

  const AlowAdvancedSearch = (display: string) => {
    setDisplay(display);
  };
  const AllowSimpleSearch = (display: string) => {
    setDisplay(display);
  };

  return (
    <SafeAreaView style={styles.container}>
      <SearchBox />
      <SimpleSearch display={display} AlowAdvancedSearch={AlowAdvancedSearch} />
      <AdvancedSearch display={display} AllowSimpleSearch={AllowSimpleSearch} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default SearchScreen;
