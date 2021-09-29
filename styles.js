import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
	title: {
		marginLeft: 35,
		marginBottom: 45,
		marginTop: 50,
		textAlign: 'left',
		fontSize: 40,
		width: '50%',
		fontWeight: '700'
	},
	buttonText: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 18,
		color: 'white'
	},
	buttonContainer: {
                shadowColor: "#000",
                shadowOffset: {
                        width: 0,
                        height: 4,
                },
                shadowOpacity: 0.30,
                shadowRadius: 4.65,
                elevation: 8,
		width: 275,
		height: 75,	
		borderRadius: 15,
		margin: 5,
		backgroundColor: "#6ECFEA",
		justifyContent: 'center',
		color: 'black'
	},
	selectedButtonContainer: {
                backgroundColor: "#305A66",
		color: 'white'
        },
	thinButton: {
		height:45
	},
	mainContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	roundedBox: {
		width: '100%',
		height: 225,
		borderBottomRightRadius: 100,
		backgroundColor: "#6ECFEA",
		justifyContent: 'space-around',
		alignItems: 'flex-start',
		marginBottom: 25
	},
	bottomRoundedBox: {
		borderBottomRightRadius: 25,
		borderBottomLeftRadius: 25,
	},
	icon: {
		marginTop: 50,
		marginHorizontal: 20
	},
	container: {
		height: 250,
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-evenly',
		marginBottom: 75,
		marginTop: 40
	},
	thinContainer: {
		justifyContent: 'center'
	},
	unsafeBlueFill: {
		width: '100%',
		height: '25%',
		backgroundColor: "#6ECFEA",
	}
})
