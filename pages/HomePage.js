import React from 'react'
import { Text, View, SafeAreaView, Pressable } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'

import { styles } from '../styles'
import Loading from './Loading'

import HomeSvg from '../static/homePage.js'

export default function HomePage({ route, navigation }) {
	switch(route.params.Language){
		case "1":
			return (
				<View>
					<View style={styles.unsafeBlueFill}/>
					<SafeAreaView style={styles.mainContainer}>
						<View style={[styles.roundedBox, styles.bottomRoundedBox]}>
							<Text style={styles.title}>Blue Dragon</Text>
							<HomeSvg width={250} height={250} style={styles.svg}/>
						</View>
						<View style={[styles.container, styles.thinContainer]}>
							<Pressable style={[styles.buttonContainer, styles.thinButton]} onPress={() => navigation.navigate("listPage", { Language: route.params.Language, content: "traffick"})}>
								<Text style={styles.buttonText}>Human Trafficking</Text>
							</Pressable>
							<Pressable style={[styles.buttonContainer, styles.thinButton]} onPress={() => navigation.navigate("listPage", { Language: route.params.Language, content: "safe"})}>
								<Text style={styles.buttonText}>Staying Safe</Text>
							</Pressable>
							<Pressable style={[styles.buttonContainer, styles.thinButton]} onPress={() => navigation.navigate("listPage", { Language: route.params.Language, content: "help"})}>
								<Text style={styles.buttonText}>Finding Help</Text>
							</Pressable>
							<Pressable style={[styles.buttonContainer, styles.thinButton]} onPress={() => navigation.navigate("vidTest", { Language: route.params.Language })}>
								<Text style={styles.buttonText}>Video Test</Text>
							</Pressable>
						</View>
					</SafeAreaView>
				</View>
			)
		case "2":
			return (
				<View>
					<View style={styles.unsafeBlueFill}/>
					<SafeAreaView style={styles.mainContainer}>
						<View style={[styles.roundedBox, styles.bottomRoundedBox]}>
							<Text style={styles.title}>Blue Dragon</Text>
							<HomeSvg width={250} height={250} style={styles.svg}/>
						</View>
						<View style={[styles.container, styles.thinContainer]}>
							<Pressable style={[styles.buttonContainer, styles.thinButton]} onPress={() => navigation.navigate("listPage", { Language: route.params.Language, content: "traffick"})}>
								<Text style={styles.buttonText}>Human Trafficking Viet</Text>
							</Pressable>
							<Pressable style={[styles.buttonContainer, styles.thinButton]} onPress={() => navigation.navigate("listPage", { Language: route.params.Language, content: "safe"})}>
								<Text style={styles.buttonText}>Staying Safe Viet</Text>
							</Pressable>
							<Pressable style={[styles.buttonContainer, styles.thinButton]} onPress={() => navigation.navigate("listPage", { Language: route.params.Language, content: "help"})}>
								<Text style={styles.buttonText}>Finding Help Viet</Text>
							</Pressable>
						</View>
					</SafeAreaView>
				</View>
			)
	}
}
