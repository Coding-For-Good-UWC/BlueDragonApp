import React, { useState } from 'react'
import { Text, View, SafeAreaView, Pressable } from 'react-native'
import { styles } from '../styles'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default function HomePage() {
	return (
		<View>
			<View style={styles.unsafeBlueFill}/>
			<SafeAreaView style={styles.mainContainer}>
				<View style={[styles.roundedBox, styles.bottomRoundedBox]}>
					<Text style={styles.title}>Blue Dragon</Text>
				</View>
				<View style={[styles.container, styles.thinContainer]}>
					<Pressable style={[styles.buttonContainer, styles.thinButton]} onPress={() => console.log("human trafficking")}>
						<Text style={styles.buttonText}>Human Trafficking</Text>
					</Pressable>
                                        <Pressable style={[styles.buttonContainer, styles.thinButton]} onPress={() => console.log("staying safe")}>
                                                <Text style={styles.buttonText}>Staying Safe</Text>
                                        </Pressable>
                                        <Pressable style={[styles.buttonContainer, styles.thinButton]} onPress={() => console.log("finding help")}>
                                                <Text style={styles.buttonText}>Finding Help</Text>
                                        </Pressable>
				</View>
			</SafeAreaView>
		</View>
	)
}
