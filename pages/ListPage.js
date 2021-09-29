import React, { useState } from 'react'
import { Text, View, SafeAreaView, Pressable } from 'react-native'
import { styles } from '../styles'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default function ListPage({ navTo, content }) {
	//switch (content){
	//	case "traffick":
			return (
				<View>
					<View style={styles.unsafeBlueFill}/>
					<SafeAreaView style={styles.mainContainer}>
						<View style={[styles.roundedBox, styles.bottomRoundedBox]}>
							<Pressable onPress={() => navTo("home")}>
								<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
							</Pressable>
							<Text style={styles.title}>Blue Dragon</Text>
						</View>
					</SafeAreaView>
				</View>
			)
	//}
}
