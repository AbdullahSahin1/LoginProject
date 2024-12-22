import { StyleSheet, Text, View,KeyboardAvoidingView, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder='E mail adresinizi Giriniz'></TextInput>
        <TextInput style={styles.input} placeholder='Şifreyi Giriniz'></TextInput>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
             <Text style={styles.buttonText}>Giriş Yap</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button,styles.outlineButton]}>
          <Text style={styles.outlineButtonText}>Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#eee",
  },
  inputContainer:{
    width: '80%',
  },
  input:{
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 20,
    marginTop: 5,
    borderRadius: 10,
  },
  buttonContainer:{
      width: '60%',
    marginTop: 40,
  },
  button:{
     backgroundColor: '#0782F9',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10
  },
  buttonText:{
     color: '#fff',
    fontSize: 16,
    fontWeight: 600,
  },
  outlineButton:{},
  outlineButtonText:{}
});
