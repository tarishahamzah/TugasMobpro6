import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

const Textfield = ({Label, teksBantuan, isi, setisi}) => {
  return (
    <View style={{marginVertical: 7}}>
      <Text style={{marginBottom: 5, fontWeight: 'bold'}}>{Label}</Text>
      <TextInput style={{borderWidth: 1, borderRadius: 9, paddingVertical: 3, paddingLeft: 10, borderColor: '#C4C4C4'}} placeholder= {teksBantuan} value={isi} onChangeText={setisi}/>
    </View>
  )
}

const Tombol = ({Label, fungsi}) => {
  return (
    <TouchableOpacity style = {{backgroundColor: '#C237CE', paddingVertical: 10, borderRadius: 25, alignItems: 'center', marginTop: 25}} onPress={fungsi}>
      <Text style= {{color: 'white'}} >{Label}</Text>
    </TouchableOpacity>
  )
}

const RegistrationPage = ({changePageHandler}) => {
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const phoneNumberHandler = (nilai) => {
    nilai = nilai.replace(/\D/g, '');
    setPhoneNumber(nilai)
  }

  const registerHandler = () => {
    console.log(`Name = ${name}`)
    console.log(`Username = ${username}`)
    console.log(`Email = ${email}`)
    console.log(`Address = ${address}`)
    console.log(`Phone Number = ${phoneNumber}`)
    changePageHandler()
  }

  return (
    <View style={{padding: 15}}>
      <Text style={{fontSize: 36, fontWeight: 'bold', marginBottom: 20}}>Registration</Text>
      <Textfield Label='Name' teksBantuan='Masukkan nama lengkap anda' isi={name} setisi={setName}/>
      <Textfield Label='Username' teksBantuan='Masukkan username anda' isi={username} setisi={setUsername}/>
      <Textfield Label='Email' teksBantuan='Masukkan email anda' isi={email} setisi={setEmail}/>
      <Textfield Label='Address' teksBantuan='Masukkan alamat anda' isi={address} setisi={setAddress}/>
      <Textfield Label='Phone Number' teksBantuan='Masukkan nomor telepon anda' isi={phoneNumber} setisi={phoneNumberHandler}/>
      <Tombol Label='Register' fungsi={registerHandler}/>
    </View>
  )
}

export default RegistrationPage