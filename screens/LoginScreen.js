import React,{useState} from 'react'
import { Text, View, Button,TouchableOpacity,Image,StyleSheet } from 'react-native'
import FormButton from '../components/FormButton'
import SocialButton from '../components/SocialButton'
import {windowWidth,windowHeight} from '../utils/Dimensions'
import FormInput from '../components/FormInput'
import Icon from 'react-native-vector-icons/FontAwesome'
const LoginScreen=({navigation})=>{
    const[email,setEmail]=useState()
    const[password,setPassword]=useState()
    return (
      <View style={styles.container}>
        <Image source={require('../assets/rn-social-logo.png')
        
    } style={styles.logo}/>
      <Text style={styles.text}>RN Social App</Text>  

        <FormInput
        labelValue={email}
        onChangeText={(userEmail)=>setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        />        
      </View>
    )
  
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50
    },
    logo: {
      height: 150,
      width: 150,
      resizeMode: 'cover',
    },
    text: {
      fontFamily: 'Kufam-SemiBoldItalic',
      fontSize: 28,
      marginBottom: 10,
      color: '#051d5f',
    },
    navButton: {
      marginTop: 15,
    },
    forgotButton: {
      marginVertical: 35,
    },
    navButtonText: {
      fontSize: 18,
      fontWeight: '500',
      color: '#2e64e5',
      fontFamily: 'Lato-Regular',
    },
  });
