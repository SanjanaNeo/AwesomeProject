import React from 'react'
import { Text, View, Button,StyleSheet } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

const LoginScreen=({navigation})=>{
    return (
      <View style={{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
      }}>
        <AntDesign name="user" size={25} color="#666"/>
        <Text style={{fontFamily:'Kufam-SemiBoldItalic'}}>Login Screen</Text>
        <Button title="Click here"
        onPress={()=>navigation.navigate('Signup')}  
        >

        </Button>
      </View>
    )
  
}

export default LoginScreen
