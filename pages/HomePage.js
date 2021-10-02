import React, { useState, useEffect } from 'react'
import { Text, View, SafeAreaView, Pressable } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { styles } from '../styles'
import Loading from './Loading'

export default function HomePage({ navTo }) {
	[lang, setLang] = useState(0)
        useEffect(() => {
		const asyncCheck = async () => {
			await AsyncStorage.getItem("lang").then((value) => {
				setLang(value)
			})
		}
		asyncCheck()
  	}, [])
	
	if (lang == "1"){ 
		return (
			<View>
				<View style={styles.unsafeBlueFill}/>
				<SafeAreaView style={styles.mainContainer}>
					<View style={[styles.roundedBox, styles.bottomRoundedBox]}>
						<Text style={styles.title}>Blue Dragon</Text>
					</View>
					<View style={[styles.container, styles.thinContainer]}>
						<Pressable style={[styles.buttonContainer, styles.thinButton]} onPress={() => navTo("traffick")}>
							<Text style={styles.buttonText}>Human Trafficking</Text>
						</Pressable>
						<Pressable style={[styles.buttonContainer, styles.thinButton]} onPress={() => navTo("safety")}>
							<Text style={styles.buttonText}>Staying Safe</Text>
						</Pressable>
						<Pressable style={[styles.buttonContainer, styles.thinButton]} onPress={() => navTo("findHelp")}>
							<Text style={styles.buttonText}>Finding Help</Text>
						</Pressable>
					</View>
				</SafeAreaView>
			</View>
		)
	} else if (lang == "2"){ 
		return (
                        <View>
                                <View style={styles.unsafeBlueFill}/>
                                <SafeAreaView style={styles.mainContainer}>
                                        <View style={[styles.roundedBox, styles.bottomRoundedBox]}>
                                                <Text style={styles.title}>Blue Dragon: Vietnamese version</Text>
                                        </View>
                                        <View style={[styles.container, styles.thinContainer]}>
                                                <Pressable style={[styles.buttonContainer, styles.thinButton]} onPress={() => navTo("traffick")}>
                                                        <Text style={styles.buttonText}>Human Trafficking</Text>
                                                </Pressable>
                                                <Pressable style={[styles.buttonContainer, styles.thinButton]} onPress={() => navTo("safety")}>
                                                        <Text style={styles.buttonText}>Staying Safe</Text>
                                                </Pressable>
                                                <Pressable style={[styles.buttonContainer, styles.thinButton]} onPress={() => navTo("findHelp")}>
                                                        <Text style={styles.buttonText}>Finding Help</Text>
                                                </Pressable>
                                        </View>
                                </SafeAreaView>
                        </View>
		)
	} else {
		return (
			<Loading/>
		)
	}
}
