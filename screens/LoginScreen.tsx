import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ImageBackground,
} from 'react-native';

export default function LoginScreen() {
  return (
    <ImageBackground
      source={require('../assests/bg.jpg')}
      style={styles.backgroundImage}>
      <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
        <View style={{marginTop: 130}}>
          <Text style={{color: 'white', fontSize: 50, fontWeight: '700'}}>
            Sabbhe
          </Text>
        </View>
        <View>
          <Text style={{color: 'white', marginTop: 300, fontSize: 16}}>
            Register or Login with Mobile Number
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              alignContent: 'center',
              backgroundColor: '#ffffff',
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
              minWidth: 340,
              justifyContent: 'center',
            }}>
            <TextInput
              style={{fontSize: 16}}
              placeholder="Enter your mobile number"
            />
          </View>
        </View>
        <View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
