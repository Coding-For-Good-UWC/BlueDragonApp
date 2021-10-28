import React, { useState, useEffect } from 'react'
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
							<HomeSvg width={250} height={250}/>
						</View>
						<View style={[styles.container, styles.thinContainer]}>
							<Pressable style={[styles.buttonContainer, styles.thinButton]} onPress={() => navigation.navigate("listPage", { Language: route.params.Language, content: "traffick"})}>
								<Text style={styles.buttonText}>Human Trafficking</Text>
							</Pressable>
							<Pressable style={[styles.buttonContainer, styles.thinButton]} onPress={() => navigation.navigate("listPage", { content: "safe"})}>
								<Text style={styles.buttonText}>Staying Safe</Text>
							</Pressable>
							<Pressable style={[styles.buttonContainer, styles.thinButton]} onPress={() => navigation.navigate("listPage", { content: "help"})}>
								<Text style={styles.buttonText}>Finding Help</Text>
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
	}
}
