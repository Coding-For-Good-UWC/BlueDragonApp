import React, { useState } from 'react'
import { Text, View, SafeAreaView, Pressable } from 'react-native'
import { styles } from '../styles'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default function HomePage() {
	const [lang, setLang] = useState(0);
	
	if (lang) {
                return (
                        <View>
                                <View style={styles.unsafeBlueFill}/>
                                <SafeAreaView style={styles.mainContainer}>
                                        <View style={styles.roundedBox}>
                                                <Pressable onPress={() => console.log("go back")}>
                                                        <FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={36}/>
                                                </Pressable>
                                                <Text style={styles.title}>Select a Language</Text>
                                        </View>
                                        <View style={styles.container}>
                                                <Pressable style={(lang==1)?[styles.buttonContainer, styles.selectedButtonContainer]:styles.buttonContainer} onPress={() => setLang(1)}>
                                                        <Text style={styles.buttonText}>English</Text>
                                                </Pressable>
                                                <Pressable style={(lang==1)?styles.buttonContainer:[styles.buttonContainer, styles.selectedButtonContainer]} onPress={() => setLang(2)}>
                                                        <Text style={styles.buttonText}>Tiếng Việt</Text>
                                                </Pressable>
						<Pressable style={styles.buttonContainer} onPress={() => console.log("switch to homepage")}>
							<Text style={styles.buttonText}>Next</Text>
						</Pressable>
                                        </View>
                                </SafeAreaView>
                        </View>
                )	
	} else {
		return (
			<View>
				<View style={styles.unsafeBlueFill}/>
				<SafeAreaView style={styles.mainContainer}>
					<View style={styles.roundedBox}>
						<Pressable onPress={() => console.log("test")}>
							<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={36}/>
						</Pressable>
						<Text style={styles.title}>Select a Language</Text>
					</View>
					<View style={styles.container}>
						<Pressable style={styles.buttonContainer} onPress={() => setLang(1)}>
							<Text style={styles.buttonText}>English</Text>
						</Pressable>
						<Pressable style={styles.buttonContainer} onPress={() => setLang(2)}>
							<Text style={styles.buttonText}>Tiếng Việt</Text>
						</Pressable>
					</View>
				</SafeAreaView>
			</View>
		)
	}
}
