import { Image, SafeAreaView, StyleSheet, Text, TextInput, View,} from 'react-native'
import React from 'react'

export default function LoginScreen() {
  return (
    <SafeAreaView style={{flex:1,backgroundColor:"white",alignItems:"center"}}>
      <View>
        <Image
        style={{width:160, height:80}}
        source={require('../assests/logo.png')}
        height={100} width={150}
        />
      </View>
      <View>
        <Text>Register or Login with Mobile Number</Text>
      </View>
      <View style={{marginTop:70}}>
        <View style={{flexDirection:'row',alignItems:'center',gap:5,backgroundColor:'#D0D0D0',paddingVertical:5,borderRadius:5,marginTop:30}}>
          <TextInput placeholder='Enter your mobile number'/>

        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})