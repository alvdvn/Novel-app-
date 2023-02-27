import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import {Dimensions} from 'react-native';
export interface Props {
  display: string;
  AlowAdvancedSearch: (a: string) => void;
}
const width = Dimensions.get('window').width;
const SimpleSearch: React.FC<Props> = props => {
  // const [displayname, setDisplay] = React.useState<string>('flex');
  // const [displayFlex, setDisplayFlex] = React.useState<boolean>(true);
  const displayUpdate = props.display;

  const AlowAdvancedSearch = () => {
    props.AlowAdvancedSearch && props.AlowAdvancedSearch('false');
  };
  // useEffect(() => {
  //   if (displayUpdate == 'true') {
  //     setDisplayFlex('flex');
  //   } else {
  //     setDisplay('none');
  //   }
  // }, [displayUpdate]);
  // console.log(displayname);
  return (
    <View
      style={[
        styles.container,
        {display: displayUpdate === 'true' ? 'flex' : 'none'},
      ]}>
      <TouchableHighlight
        style={styles.containerButton}
        onPress={AlowAdvancedSearch}
        underlayColor="#ffffff">
        <Text style={styles.titleButton}>Tìm kiếm nâng cao</Text>
      </TouchableHighlight>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fffbff',
    justifyContent: 'center',
  },
  containerButton: {
    paddingVertical: 12,
    borderRadius: 32,
    paddingHorizontal: 20,
    borderColor: 'blue',
    borderWidth: 1,
  },
  titleButton: {
    color: '#1f1f1f',
    fontSize: 14,
  },
});
export default SimpleSearch;
