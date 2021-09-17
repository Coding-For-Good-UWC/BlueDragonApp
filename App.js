import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [firstLaunch, setFirstLaunch ] = useState(null);
  useEffect(() => {
	const asyncCheck = async () => { 	
		await AsyncStorage.getItem("firstLaunch").then(value => { setFirstLaunch(value == null) })
  	}
	asyncCheck()
  })
  
  if (firstLaunch == null){
	  return (
	    <View style={styles.container}>
	      <Text>Loading...</Text>
	      <StatusBar style="auto" />
	    </View>
	  )   
  } else {
	//TO-DO Call Once
	if (firstLaunch) {
	  //AsyncStorage.setItem("firstLaunch", false)
	  return (
	    <View style={styles.container}>
	      <Text>First Launch!</Text>
	      <StatusBar style="auto" />
	    </View>
	  )
	} else {
	  return (
	    <View style={styles.container}>
	      <Text>Welcome Back</Text>
	      <StatusBar style="auto" />
	    </View>
	  )
	}
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
