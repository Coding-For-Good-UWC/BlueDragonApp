import React, { useState, useEffect } from 'react'
import { Text, View, SafeAreaView, Pressable } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { styles } from '../styles'
import Loading from './Loading'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default function ListPage({ route, navigation }) {
	switch (route.params.Language) {
		case "1":
			switch (route.params.content){
				case "traffick":
					return (
						<View>
							<SafeAreaView style={styles.mainContainer}>
								<View style={styles.contentsHeader}>
									<Pressable onPress={() => navigation.navigate("home", {Language: route.params.Language})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={styles.title}>Human Trafficking</Text>
								</View>
								<View style={styles.contentsBody}>
									<Text style={[styles.title, styles.contentTitle]}>Table Of Contents</Text>
									<Pressable onPress={() => navigation.navigate("textPage", { Language: route.params.Language, content: "traffick1" })}>
										<Text style={styles.contentLink}>Definition</Text>
									</Pressable>
									<Pressable onPress={() => navigation.navigate("textPage", { Language: route.params.Language, content: "traffick2" })}>
										<Text style={styles.contentLink}>The Victims</Text>
									</Pressable>
									<Pressable onPress={() => navigation.navigate("textPage", { Language: route.params.Language, content: "traffick3" })}>
										<Text style={styles.contentLink}>Consequences of Trafficking</Text>
									</Pressable>
									<Pressable onPress={() => navigation.navigate("textPage", { Language: route.params.Language, content: "traffick4" })}>
										<Text style={styles.contentLink}>Who are the Traffickers?</Text>
									</Pressable>
									<Pressable onPress={() => navigation.navigate("textPage", { Language: route.params.Language, content: "traffick5" })}>
										<Text style={styles.contentLink}>Consequences for the Traffickers</Text>
									</Pressable>
								</View>
							</SafeAreaView>
						</View>
					)
				case "safe":
					return (
						<View>
							<SafeAreaView style={styles.mainContainer}>
								<View style={styles.contentsHeader}>
                                                                        <Pressable onPress={() => navigation.navigate("home", {Language: route.params.Language})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={styles.title}>Staying Safe</Text>
								</View>
								<View style={styles.contentsBody}>
									<Text style={[styles.title, styles.contentTitle]}>Table Of Contents</Text>
									<Pressable onPress={() => navigation.navigate("textPage", { Language: route.params.Language, content: "safe1" })}>
										<Text style={styles.contentLink}>Avoid Being Trafficked</Text>
									</Pressable>
									<Pressable onPress={() => navigation.navigate("textPage", { Language: route.params.Language, content: "safe2" })}>
										<Text style={styles.contentLink}>Staying Safe While Being Trafficked</Text>
									</Pressable>
									<Pressable onPress={() => navigation.navigate("textPage", { Language: route.params.Language, content: "safe3" })}>
										<Text style={styles.contentLink}>Reporting a Trafficking Case</Text>
									</Pressable>
								</View>
							</SafeAreaView>
						</View>
					)
				case "help":
					return (
						<View>
							<SafeAreaView style={styles.mainContainer}>
								<View style={styles.contentsHeader}>
                                                                        <Pressable onPress={() => navigation.navigate("home", {Language: route.params.Language})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={styles.title}>Finding Help</Text>
								</View>
								<View style={styles.contentsBody}>
									<Text style={[styles.title, styles.contentTitle, styles.contentHeader]}>Hotlines & Service Addresses</Text>
									<Text style={styles.contentText}>Lorem Ipsum</Text>
								</View>
							</SafeAreaView>
						</View>
					)
			}
		case "2":
			switch (route.params.content){
				case "traffick":
					return (
						<View>
							<SafeAreaView style={styles.mainContainer}>
								<View style={styles.contentsHeader}>
                                                                        <Pressable onPress={() => navigation.navigate("home", {Language: route.params.Language})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={styles.title}>Humanv Trafficking</Text>
								</View>
								<View style={styles.contentsBody}>
									<Text style={[styles.title, styles.contentTitle]}>Table Of Contents</Text>
									<Pressable onPress={() => navigation.navigate("textPage", { Language: route.params.Language, content: "traffick1" })}>
										<Text style={styles.contentLink}>Definitionv</Text>
									</Pressable>
									<Pressable onPress={() => navigation.navigate("textPage", { Language: route.params.Language, content: "traffick2" })}>
										<Text style={styles.contentLink}>The Victimsv</Text>
									</Pressable>
									<Pressable onPress={() => navigation.navigate("textPage", { Language: route.params.Language, content: "traffick3" })}>
										<Text style={styles.contentLink}>Consequences of Traffickingv</Text>
									</Pressable>
									<Pressable onPress={() => navigation.navigate("textPage", { Language: route.params.Language, content: "traffick4" })}>
										<Text style={styles.contentLink}>Who are the Traffickersv?</Text>
									</Pressable>
									<Pressable onPress={() => navigation.navigate("textPage", { Language: route.params.Language, content: "traffick5" })}>
										<Text style={styles.contentLink}>Consequences for the Traffickersv</Text>
									</Pressable>
								</View>
							</SafeAreaView>
						</View>
					)
				case "safe":
					return (
						<View>
							<SafeAreaView style={styles.mainContainer}>
								<View style={styles.contentsHeader}>
                                                                        <Pressable onPress={() => navigation.navigate("home", {Language: route.params.Language})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={styles.title}>Staying Safe</Text>
								</View>
								<View style={styles.contentsBody}>
									<Text style={[styles.title, styles.contentTitle]}>Table Of Contents</Text>
									<Pressable onPress={() => navigation.navigate("textPage", { Language: route.params.Language, content: "safe1" })}>
										<Text style={styles.contentLink}>Avoid Being Trafficked</Text>
									</Pressable>
									<Pressable onPress={() => navigation.navigate("textPage", { Language: route.params.Language, content: "safe2" })}>
										<Text style={styles.contentLink}>Staying Safe While Being Trafficked</Text>
									</Pressable>
									<Pressable onPress={() => navigation.navigate("textPage", { Language: route.params.Language, content: "safe3" })}>
										<Text style={styles.contentLink}>Reporting a Trafficking Case</Text>
									</Pressable>
								</View>
							</SafeAreaView>
						</View>
					)
				case "help":
					return (
						<View>
							<SafeAreaView style={styles.mainContainer}>
								<View style={styles.contentsHeader}>
                                                                        <Pressable onPress={() => navigation.navigate("home", {Language: route.params.Language})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={styles.title}>Finding Help Viet</Text>
								</View>
								<View style={styles.contentsBody}>
									<Text style={[styles.title, styles.contentTitle, styles.contentHeader]}>Hotlines & Service Addresses</Text>
									<Text style={styles.contentText}>Lorem Ipsum</Text>
								</View>
							</SafeAreaView>
						</View>
					)
			}        
	} 
}
