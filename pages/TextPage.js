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
									<Text style={styles.title}>Human Trafficking</Text>
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
			}
		case "2":
		case "traffick1":
			return (
				<View>
					<SafeAreaView style={styles.mainContainer}>
						<View style={styles.contentsHeader}>
							<Pressable onPress={() => navTo("home")}>
								<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
							</Pressable>
							<Text style={styles.title}>Human Trafficking</Text>
						</View>
						<View style={styles.contentsBody}>
				                        <Pressable onPress={() => navTo("traffick")}>
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
