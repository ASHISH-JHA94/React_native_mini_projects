import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Form from './Components/Form';
import FlatListComp from './Components/FlatListComp';
import Grid from './Components/Grid';
import SectionListComp from './Components/SectionListComp';
// In App.js in a new project



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen(props) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="go to Login" onPress={()=>props.navigation.navigate("Login")}></Button>
    </View>
  );
}

function Login() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Login</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component=
        {Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
