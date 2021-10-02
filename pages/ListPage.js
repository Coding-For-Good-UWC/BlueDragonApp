import React, { useState, useEffect } from 'react'
import { Text, View, SafeAreaView, Pressable } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { styles } from '../styles'
import Loading from './Loading'

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

export default function ListPage({ navTo, content }) {
	[lang, setLang] = useState(0)
        useEffect(() => {
                const asyncCheck = async () => {
                        await AsyncStorage.getItem("lang").then((value) => {
                                setLang(value)
                        })
                }
                asyncCheck()
        }, [])
        if (lang == "1"){
		switch (content){
                        case "traffick":
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
                                                                <Text style={[styles.title, styles.contentTitle]}>Table Of Contents</Text>
                                                                <Pressable onPress={() => navTo("traffick1")}>
                                                                        <Text style={styles.contentLink}>Definition</Text>
                                                                </Pressable>
                                                                <Pressable onPress={() => navTo("traffick2")}>
                                                                        <Text style={styles.contentLink}>The Victims</Text>
                                                                </Pressable>
                                                                <Pressable onPress={() => navTo("traffick3")}>
                                                                        <Text style={styles.contentLink}>Consequences of Trafficking</Text>
                                                                </Pressable>
                                                                <Pressable onPress={() => navTo("traffick4")}>
                                                                        <Text style={styles.contentLink}>Who are the Traffickers?</Text>
                                                                </Pressable>
                                                                <Pressable onPress={() => navTo("traffick5")}>
                                                                        <Text style={styles.contentLink}>Consequences for the Traffickers</Text>
                                                                </Pressable>
                                                        </View>
                                                </SafeAreaView>
                                        </View>
                                )

                }
       } else if (lang == "2"){
	        switch (content){
			case "traffick":
				return (
					<View>
						<SafeAreaView style={styles.mainContainer}>
							<View style={styles.contentsHeader}>
								<Pressable onPress={() => navTo("home")}>
									<FontAwesomeIcon icon={ faAngleLeft } style={styles.icon} size={42}/>
								</Pressable>
								<Text style={styles.title}>Human Trafficking: Vietnamese Version</Text>
							</View>
							<View style={styles.contentsBody}>
								<Text style={[styles.title, styles.contentTitle]}>Table Of Contents</Text>
								<Pressable onPress={() => navTo("traffick1")}>
									<Text style={styles.contentLink}>Definition</Text>
								</Pressable>
								<Pressable onPress={() => navTo("traffick2")}>
									<Text style={styles.contentLink}>The Victims</Text>
								</Pressable>
								<Pressable onPress={() => navTo("traffick3")}>
									<Text style={styles.contentLink}>Consequences of Trafficking</Text>
								</Pressable>
								<Pressable onPress={() => navTo("traffick4")}>
									<Text style={styles.contentLink}>Who are the Traffickers?</Text>
								</Pressable>
								<Pressable onPress={() => navTo("traffick5")}>
									<Text style={styles.contentLink}>Consequences for the Traffickers</Text>
								</Pressable>
							</View>
						</SafeAreaView>
					</View>
				)

        	}        
	} else {
		return (
			<Loading/>
		)
	}
}
