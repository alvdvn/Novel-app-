/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {createContext, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import LayoutUpdate from './component/homescreen/layoutUpdate';
import Category from './component/homescreen/layoutCategory';
import LayoutFullNovel from './component/homescreen/layoutFullNovel';
import LayoutYourNovel from './component/homescreen/layoutYourNovel';
import TopTabView from './component/homescreen/tabview';
import MainScreen from './component/bottomTabview';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FireBaseLogin from './screen/loginscreen';
import HomeScreen from './screen/homeScreen';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}
export interface Props {
  children: any;
}
const AuthenticationContext = createContext({});
const Stack = createNativeStackNavigator();
const AuthenticationProvider: React.FC<Props> = props => {
  const [user, setUser] = useState(null);
  return (
    <AuthenticationContext.Provider value={{user, setUser}}>
      {props.children}
    </AuthenticationContext.Provider>
  );
};
const LoginStack = () => {
  <Stack.Navigator
    initialRouteName="UserLogin"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="UserLogin" component={FireBaseLogin} />
    <Stack.Screen name="Main" component={MainScreen} />
  </Stack.Navigator>;
};
const NovelHomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Main" component={MainScreen} />
    </Stack.Navigator>
  );
};
function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <LoginStack />
      <NovelHomeStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
