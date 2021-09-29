import React, { useState } from 'react'
import { Text, View, SafeAreaView, Pressable } from 'react-native'
import { styles } from '../styles'

export default function HomePage({ navTo }) {
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
}
