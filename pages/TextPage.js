import React, { useState } from 'react'
import { Text, View, SafeAreaView, Pressable } from 'react-native'
import { styles } from '../styles'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default function TextPage({ navTo, content }) {
	switch (content){
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
