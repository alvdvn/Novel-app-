import React, {useState} from 'react';

import {useNavigation} from '@react-navigation/native';
import {NavigationScreenProp} from 'react-navigation';
import auth from '@react-native-firebase/auth';
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Dimensions} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
export interface Props {
  screen: 'Main';
}
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const FireBaseLogin: React.FC<Props> = props => {
  const navigation = useNavigation();

  const [textUserName, setTextUserName] = useState<string>('');
  const [textPassWord, setTextPassWord] = useState<string>('');
  const onPressBtnLogin = () => {
    // if (textUserName == 'alvdvn' && textPassWord == '852456') {
    // }
    auth()
      .signInWithEmailAndPassword(textUserName, textPassWord)
      .then(() => {
        navigation.navigate('Main');
      })
      .catch(error => {
        if (error.code === 'auth/invalid-email') {
          console.log('That email wrong!');
        }
        if (error.code === 'auth/wrong-password') {
          console.log('Wrong password entered!');
        }
        console.error(error);
      });
  };
  return (
    <SafeAreaView style={styles.LoginContainer}>
      <Image
        source={require('../images/userprofile.png')}
        style={styles.imageLogin}
      />
      <Text style={styles.LoginTitle}>Login Your Novel Account</Text>

      <TextInput
        style={styles.inputUserName}
        onChangeText={setTextUserName}
        value={textUserName}
        placeholder="  username"
        maxLength={20}
      />
      <TextInput
        style={styles.inputPassWord}
        onChangeText={setTextPassWord}
        value={textPassWord}
        placeholder="  PassWord"
        secureTextEntry={true}
        maxLength={20}
      />
      <TouchableOpacity style={styles.btnLogin} onPress={onPressBtnLogin}>
        <Text style={styles.TextBtnLogin}>Login</Text>
      </TouchableOpacity>
      <View style={styles.siginInTite}>
        <TouchableOpacity>
          <Text style={styles.Signin}>Sign In? </Text>
        </TouchableOpacity>
        <Text>if you don't have account</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  LoginContainer: {
    backgroundColor: '#b2b3c2',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  inputUserName: {
    padding: 10,
    width: width - 80,
    borderColor: '#1f1f1f',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  inputPassWord: {
    width: width - 80,
    padding: 10,
    borderColor: '#1f1f1f',
    borderWidth: 1,
    borderRadius: 20,
    marginTop: 20,
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  LoginTitle: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
  },
  btnLogin: {
    width: width * 0.5,
    borderWidth: 1,
    alignItems: 'center',
    padding: 10,
    borderRadius: 16,
    backgroundColor: '#3f4bf2',
    marginTop: 30,
  },
  imageLogin: {
    marginTop: height / 7,
    width: 100,
    height: 100,
    borderWidth: 1,
    borderRadius: 50,
  },
  TextBtnLogin: {
    color: '#ffffff',
    fontWeight: 'bold',
  },
  siginInTite: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 50,
  },
  Signin: {
    color: '#ffe9ad',
  },
});
export default FireBaseLogin;
