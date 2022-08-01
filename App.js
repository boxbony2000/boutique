import React from 'react';
import {useState} from 'react'
import { Button, View, StyleSheet, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SRinfo from './pantallas/SRinfo';
import SRimagenes from './pantallas/SRimagenes';

const logo = {
  uri: 'https://i.ibb.co/1MLKF1P/logo-1.png',
  width: 400,
  height: 320,
  marginTop: 30,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
  },
  Boton: {
    margin: 10,
    minWidth: "70%",
    textAlign: "center",
    padding: 40,
  },
});

function HomeScreen({ navigation }) {
  return (
    <View
    style={styles.container} >
      <Image source={logo} />
      <View  style={styles.Boton}>
      <Button
        title="INFORMACIÓN DE LA ROPA"
        color="#47b596"
        onPress={() => navigation.navigate('Informacion')}
      />
      </View>
      <View  style={styles.Boton1}>
      <Button
        title="IMAGENES DE LA ROPA"
        color="#47b596"
        onPress={() => navigation.navigate('Imagenes')}
      />
      </View>
    </View>
  );
}

function InforScreen({ navigation }) {
  return (
    <SRinfo/>
  );
}
function ImagenesScreen({ navigation }) {
  return (
    <SRimagenes/>
  );
}

const Stack = createNativeStackNavigator();

function SRMain() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Informacion" component={InforScreen} />
        <Stack.Screen name="Imagenes" component={ImagenesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default SRMain;