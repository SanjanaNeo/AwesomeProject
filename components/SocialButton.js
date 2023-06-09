import React, { Component } from 'react'
import { Text, View,TouchableOpacity,StyleSheet } from 'react-native'
import {windowWidth,windowHeight} from '../utils/Dimensions'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const SocialButton=({buttonTitle,
    btnType,
    color,
    backgroundColor,
    ...rest})=>{
        let bgColor=backgroundColor;
    return (
     <TouchableOpacity {...rest}
     style={[styles.buttonContainer,{backgroundColor:bgColor}]}
     >
        <View style={styles.iconWrapper}> 
            <FontAwesome style={styles.icon} name={btnType} size={22} color={color}/>
        </View>
        <View>
        <Text style={[styles.buttonText,{color:color}]}>{buttonTitle}</Text>
        </View>
        
     </TouchableOpacity>
    )
  
}

export default SocialButton

const styles = StyleSheet.create({
    buttonContainer: {
      marginTop: 10,
      width: '100%',
      height: windowHeight / 15,
      backgroundColor: '#2e64e5',
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 3,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#ffffff',
      fontFamily: 'Lato-Regular',
    },
    iconWrapper: {
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
      },
      icon: {
        fontWeight: 'bold',
      },
      btnTxtWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
  });
  
