import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import LanguageSelect from './pages/LanguageSelect';
import HomePage from './pages/HomePage';

export default function App() {
  const [firstLaunch, setFirstLaunch ] = useState(false);
  useEffect(() => {
	const asyncCheck = async () => { 
		await AsyncStorage.getItem("firstLaunch").then((value) => { 
			if (value == null) {
				setFirstLaunch(true)
	  			AsyncStorage.setItem("firstLaunch", "0")
			} else {
				setFirstLaunch(false)
			}
		})
	}
	asyncCheck()
  }, [])
  
  if (firstLaunch) {
    return (
      <LanguageSelect></LanguageSelect>
    )
  } else {
    return (
      <HomePage></HomePage>	    
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})
