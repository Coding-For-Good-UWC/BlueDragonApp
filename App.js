import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [firstLaunch, setFirstLaunch ] = useState(false);
  useEffect(() => {
	console.log("._.")
	const asyncCheck = async () => { 
		await AsyncStorage.getItem("firstLaunch").then((value) => { 
			if (value == null) {
				setFirstLaunch(true)
	  			AsyncStorage.setItem("firstLaunch", false)
			} else {
				setFirstLaunch(false)
			}
		})
	}
	asyncCheck()
  }, [])
  
  if (firstLaunch) {
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
