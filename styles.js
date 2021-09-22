import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
	title: {
		marginLeft: 25,
		marginBottom: 20,
		textAlign: 'left',
		fontSize: 28,
		width: '50%',
		fontWeight: '700'
	},
	buttonText: {
		textAlign: 'center',
		fontWeight: 'bold',
		fontSize: 18
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
		margin: 10,
		backgroundColor: "#6ECFEA",
		justifyContent: 'center',
		color: 'black'
	},
	selectedButtonContainer: {
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
                margin: 10,
                backgroundColor: "#305A66",
                justifyContent: 'center',
		color: 'white'
        },
	mainContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	roundedBox: {
		width: '100%',
		height: 200,
		borderBottomRightRadius: 100,
		backgroundColor: "#6ECFEA",
		justifyContent: 'space-around',
		alignItems: 'flex-start',
		marginBottom: 25
	},
	icon: {
		marginTop: 50,
		marginHorizontal: 20
	},
	container: {
		height: '150%',
		width: '100%',
		alignItems: 'center',
		justifyContent: 'space-evenly'
	},
	unsafeBlueFill: {
		width: '100%',
		height: '25%',
		backgroundColor: "#6ECFEA",
	}
})
