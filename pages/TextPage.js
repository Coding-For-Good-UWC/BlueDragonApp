import React, { useState } from 'react'
import { Text, View, SafeAreaView, Pressable } from 'react-native'
import { styles } from '../styles'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default function TextPage({ route, navigation }) {
	
	switch (route.params.Language){
		case "1":
			switch (route.params.content){
				case "traffick1":
					return (
						<View>
							<SafeAreaView style={styles.mainContainer}>
								<View style={styles.contentsHeader}>
									<Pressable onPress={() => navigation.navigate("home", {Language: route.params.Language})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={styles.title}>Human Trafficking 1</Text>
								</View>
								<View style={styles.contentsBody}>
									<Pressable onPress={() => navigation.navigate("listPage", {Language: route.params.Language, content: "traffick"})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={[styles.title, styles.contentTitle, styles.contentHeader]}>Definition</Text>
									<Text style={styles.contentText}>Human Trafficking is when men, women, or children are decieved, coerced or sold, domestically and abroad, into “slave-like” situations contrary to their desires, including sexual exploitation, forced labor, forced marriage, and other inhumane purposes.</Text>
								</View>
							</SafeAreaView>
						</View>
					)
				case "traffick2":
					return (
						<View>
							<SafeAreaView style={styles.mainContainer}>
								<View style={styles.contentsHeader}>
									<Pressable onPress={() => navigation.navigate("home", {Language: route.params.Language})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={styles.title}>Human Trafficking 2</Text>
								</View>
								<View style={styles.contentsBody}>
									<Pressable onPress={() => navigation.navigate("listPage", {Language: route.params.Language, content: "traffick"})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={[styles.title, styles.contentTitle, styles.contentHeader]}>The Victims</Text>
									<Text style={[styles.title, styles.contentTitle, styles.subContentHeader]}>Personal Risk Factors</Text>
									<Text style={styles.contentText}>	-Gender{"\n"}	-Age{"\n"} -Ethnic Minority{"\n"}</Text>
								</View>
							</SafeAreaView>
						</View>
					)
				case "traffick3":
					return (
						<View>
							<SafeAreaView style={styles.mainContainer}>
								<View style={styles.contentsHeader}>
									<Pressable onPress={() => navigation.navigate("home", {Language: route.params.Language})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={styles.title}>Human Trafficking 3</Text>
								</View>
								<View style={styles.contentsBody}>
									<Pressable onPress={() => navigation.navigate("listPage", {Language: route.params.Language, content: "traffick"})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={[styles.title, styles.contentTitle, styles.contentHeader]}>Definition</Text>
									<Text style={styles.contentText}>Lorem Ipsum</Text>
								</View>
							</SafeAreaView>
						</View>
					)
				case "traffick4":
					return (
						<View>
							<SafeAreaView style={styles.mainContainer}>
								<View style={styles.contentsHeader}>
									<Pressable onPress={() => navigation.navigate("home", {Language: route.params.Language})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={styles.title}>Human Trafficking 4</Text>
								</View>
								<View style={styles.contentsBody}>
									<Pressable onPress={() => navigation.navigate("listPage", {Language: route.params.Language, content: "traffick"})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={[styles.title, styles.contentTitle, styles.contentHeader]}>Definition</Text>
									<Text style={styles.contentText}>Lorem Ipsum</Text>
								</View>
							</SafeAreaView>
						</View>
					)
				case "traffick5":
					return (
						<View>
							<SafeAreaView style={styles.mainContainer}>
								<View style={styles.contentsHeader}>
									<Pressable onPress={() => navigation.navigate("home", {Language: route.params.Language})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={styles.title}>Human Trafficking 5</Text>
								</View>
								<View style={styles.contentsBody}>
									<Pressable onPress={() => navigation.navigate("listPage", {Language: route.params.Language, content: "traffick"})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={[styles.title, styles.contentTitle, styles.contentHeader]}>Definition</Text>
									<Text style={styles.contentText}>Lorem Ipsum</Text>
								</View>
							</SafeAreaView>
						</View>
					)
				case "safe1":
					return (
						<View>
							<SafeAreaView style={styles.mainContainer}>
								<View style={styles.contentsHeader}>
									<Pressable onPress={() => navigation.navigate("home", {Language: route.params.Language})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={styles.title}>Safe1</Text>
								</View>
								<View style={styles.contentsBody}>
									<Pressable onPress={() => navigation.navigate("listPage", {Language: route.params.Language, content: "safe"})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={[styles.title, styles.contentTitle, styles.contentHeader]}>Definition</Text>
									<Text style={styles.contentText}>Lorem Ipsum</Text>
								</View>
							</SafeAreaView>
						</View>
					)
				case "safe2":
					return (
						<View>
							<SafeAreaView style={styles.mainContainer}>
								<View style={styles.contentsHeader}>
									<Pressable onPress={() => navigation.navigate("home", {Language: route.params.Language})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={styles.title}>Safe2</Text>
								</View>
								<View style={styles.contentsBody}>
									<Pressable onPress={() => navigation.navigate("listPage", {Language: route.params.Language, content: "safe"})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={[styles.title, styles.contentTitle, styles.contentHeader]}>Definition</Text>
									<Text style={styles.contentText}>Lorem Ipsum</Text>
								</View>
							</SafeAreaView>
						</View>
					)
				case "safe3":
					return (
						<View>
							<SafeAreaView style={styles.mainContainer}>
								<View style={styles.contentsHeader}>
									<Pressable onPress={() => navigation.navigate("home", {Language: route.params.Language})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={styles.title}>Safe3</Text>
								</View>
								<View style={styles.contentsBody}>
									<Pressable onPress={() => navigation.navigate("listPage", {Language: route.params.Language, content: "safe"})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={[styles.title, styles.contentTitle, styles.contentHeader]}>Definition</Text>
									<Text style={styles.contentText}>Lorem Ipsum</Text>
								</View>
							</SafeAreaView>
						</View>
					)
			}
		case "2":
			switch (route.params.content){
				case "traffick1":
					return (
						<View>
							<SafeAreaView style={styles.mainContainer}>
								<View style={styles.contentsHeader}>
									<Pressable onPress={() => navigation.navigate("home", {Language: route.params.Language})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={styles.title}>Human Trafficking1v</Text>
								</View>
								<View style={styles.contentsBody}>
									<Pressable onPress={() => navigation.navigate("listPage", {Language: route.params.Language, content: "traffick"})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={[styles.title, styles.contentTitle, styles.contentHeader]}>Definition</Text>
									<Text style={styles.contentText}>Lorem Ipsum</Text>
								</View>
							</SafeAreaView>
						</View>
					)
				case "traffick2":
					return (
						<View>
							<SafeAreaView style={styles.mainContainer}>
								<View style={styles.contentsHeader}>
									<Pressable onPress={() => navigation.navigate("home", {Language: route.params.Language})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={styles.title}>Human Trafficking2v</Text>
								</View>
								<View style={styles.contentsBody}>
									<Pressable onPress={() => navigation.navigate("listPage", {Language: route.params.Language, content: "traffick"})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={[styles.title, styles.contentTitle, styles.contentHeader]}>Definition</Text>
									<Text style={styles.contentText}>Lorem Ipsum</Text>
								</View>
							</SafeAreaView>
						</View>
					)
				case "traffick3":
					return (
						<View>
							<SafeAreaView style={styles.mainContainer}>
								<View style={styles.contentsHeader}>
									<Pressable onPress={() => navigation.navigate("home", {Language: route.params.Language})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={styles.title}>Human Trafficking3v</Text>
								</View>
								<View style={styles.contentsBody}>
									<Pressable onPress={() => navigation.navigate("listPage", {Language: route.params.Language, content: "traffick"})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={[styles.title, styles.contentTitle, styles.contentHeader]}>Definition</Text>
									<Text style={styles.contentText}>Lorem Ipsum</Text>
								</View>
							</SafeAreaView>
						</View>
					)
				case "traffick4":
					return (
						<View>
							<SafeAreaView style={styles.mainContainer}>
								<View style={styles.contentsHeader}>
									<Pressable onPress={() => navigation.navigate("home", {Language: route.params.Language})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={styles.title}>Human Trafficking4v</Text>
								</View>
								<View style={styles.contentsBody}>
									<Pressable onPress={() => navigation.navigate("listPage", {Language: route.params.Language, content: "traffick"})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={[styles.title, styles.contentTitle, styles.contentHeader]}>Definition</Text>
									<Text style={styles.contentText}>Lorem Ipsum</Text>
								</View>
							</SafeAreaView>
						</View>
					)
				case "traffick5":
					return (
						<View>
							<SafeAreaView style={styles.mainContainer}>
								<View style={styles.contentsHeader}>
									<Pressable onPress={() => navigation.navigate("home", {Language: route.params.Language})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={styles.title}>Human Trafficking5v</Text>
								</View>
								<View style={styles.contentsBody}>
									<Pressable onPress={() => navigation.navigate("listPage", {Language: route.params.Language, content: "traffick"})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={[styles.title, styles.contentTitle, styles.contentHeader]}>Definition</Text>
									<Text style={styles.contentText}>Lorem Ipsum</Text>
								</View>
							</SafeAreaView>
						</View>
					)
				case "safe1":
					return (
						<View>
							<SafeAreaView style={styles.mainContainer}>
								<View style={styles.contentsHeader}>
									<Pressable onPress={() => navigation.navigate("home", {Language: route.params.Language})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={styles.title}>Safe1v</Text>
								</View>
								<View style={styles.contentsBody}>
									<Pressable onPress={() => navigation.navigate("listPage", {Language: route.params.Language, content: "safe"})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={[styles.title, styles.contentTitle, styles.contentHeader]}>Definition</Text>
									<Text style={styles.contentText}>Lorem Ipsum</Text>
								</View>
							</SafeAreaView>
						</View>
					)
				case "safe2":
					return (
						<View>
							<SafeAreaView style={styles.mainContainer}>
								<View style={styles.contentsHeader}>
									<Pressable onPress={() => navigation.navigate("home", {Language: route.params.Language})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={styles.title}>Safe2v</Text>
								</View>
								<View style={styles.contentsBody}>
									<Pressable onPress={() => navigation.navigate("listPage", {Language: route.params.Language, content: "safe"})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={[styles.title, styles.contentTitle, styles.contentHeader]}>Definition</Text>
									<Text style={styles.contentText}>Lorem Ipsum</Text>
								</View>
							</SafeAreaView>
						</View>
					)
				case "safe3":
					return (
						<View>
							<SafeAreaView style={styles.mainContainer}>
								<View style={styles.contentsHeader}>
									<Pressable onPress={() => navigation.navigate("home", {Language: route.params.Language})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={styles.title}>Safe3v</Text>
								</View>
								<View style={styles.contentsBody}>
									<Pressable onPress={() => navigation.navigate("listPage", {Language: route.params.Language, content: "safe"})}>
										<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
									</Pressable>
									<Text style={[styles.title, styles.contentTitle, styles.contentHeader]}>Definition</Text>
									<Text style={styles.contentText}>Lorem Ipsum</Text>
								</View>
							</SafeAreaView>
						</View>
					)
			}
	}
}
