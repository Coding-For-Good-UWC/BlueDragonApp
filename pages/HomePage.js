import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export default function HomePage() {
	return (
	      <View style={styles.container}>
        	<Text>Home Page</Text>
      	      </View>
	)
}
const styles = StyleSheet.create({
	button: {
		
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	}
})
