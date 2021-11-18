import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import LanguageSelect from './pages/LanguageSelect'
import HomePage from './pages/HomePage'
import ListPage from './pages/ListPage'
import TextPage from './pages/TextPage'
import TestVid from './pages/TestVid'

const Stack = createNativeStackNavigator()

export default function App() {
  var startScreen = "lang"
  var lang = "1"
  useEffect(() => {
	const asyncCheck = async () => { 
		await AsyncStorage.getItem("lang").then((value) => { 
			if (value != null) {
				startScreen = "home"
				lang = value
			}
		})
	}
	asyncCheck()
  }, [])
  return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName={startScreen} screenOptions={{ headerShown: false }}>
				<Stack.Screen name="lang" component={LanguageSelect}/>
				<Stack.Screen name="home" component={HomePage} initialParams={{ Language: lang }}/>
				<Stack.Screen name="listPage" component={ListPage} initialParams={{ Language: lang }}/>
				<Stack.Screen name="textPage" component={TextPage} initialParams={{ Language: lang }}/>
				<Stack.Screen name="vidTest" component={TestVid} initialParams={{ Language: lang}}/>
			</Stack.Navigator>
		</NavigationContainer>
	)
}
