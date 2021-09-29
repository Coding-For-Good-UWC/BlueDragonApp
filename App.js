import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import LanguageSelect from './pages/LanguageSelect'
import HomePage from './pages/HomePage'
import ListPage from './pages/ListPage'
export default function App() {
  const [ nav, setNav ] = useState("lang")
  useEffect(() => {
	const asyncCheck = async () => { 
		await AsyncStorage.getItem("firstLaunch").then((value) => { 
			if (value == null) {
	  			AsyncStorage.setItem("firstLaunch", "0")
			} else {
				setNav("lang")
			}
		})
	}
	asyncCheck()
  }, [])
  switch(nav){
    case "lang":
	return (
		<LanguageSelect navTo={setNav}></LanguageSelect>
	)
    case "home": 
	return (
		<HomePage navTo={setNav}></HomePage>	    
	)
    case "traffick":
	return (
                <ListPage navTo={setNav} content="traffick"></ListPage>
	)
    case "safety":
	return (
		<ListPage navTo={setNav} content="safety"></ListPage>
	)
    case "findHelp":
	return (
	        <ListPage navTo={setNav} content="help"></ListPage>
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
