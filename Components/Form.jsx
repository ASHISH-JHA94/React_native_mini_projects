import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function Form() {
  const [Name,SetName]=useState("");
  const [email,setemail]=useState("");
  const [password,setPassword]=useState("");
  const [display,setdisplay]=useState(false);

  const resetFormData=()=>{
    setdisplay(false);
    setemail("");
    SetName("");
    setPassword("");
  }
  
  return (
    <View margin={30}>
      <Text style={{fontSize:20,margin:30}}>Simple form in React Native</Text>
      <TextInput placeholder='Enter your name' style={styles.inp} onChangeText={(text)=>{SetName(text)}} value={Name}></TextInput>

      <TextInput placeholder='Enter your email' style={styles.inp} onChangeText={(text)=>{setemail(text)}} value={email}></TextInput>

      <TextInput placeholder='Enter your password' style={styles.inp} onChangeText={(text)=>{setPassword(text)}} value={password} secureTextEntry={true}></TextInput>

      
        { display ?<View>
          <Text>username:{Name}</Text>
          <Text>userEmail:{email}</Text>
          <Text>password:{password}</Text>
        </View>
        : null }
      

      
      <View style={{display:'flex',gap:20}}>
      <Button title='print details' color="green" onPress={()=>{setdisplay(true)}}></Button>

      <Button title='edit details' onPress={resetFormData}></Button>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  
    inp:{
      borderColor:'blue',
      borderWidth:2,
      fontSize:18,
      margin:10,
      padding:10,
    }
  });
