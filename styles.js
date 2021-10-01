import { StyleSheet } from 'react-native'
export const styles = StyleSheet.create({
	title: {
		marginLeft: 35,
		marginBottom: 55,
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
		borderBottomRightRadius: 55,
		borderBottomLeftRadius: 55,
	},
	icon: {
		marginTop: 50,
		marginLeft: 20
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
	},
	contentsHeader: {
	        width: '100%',
                height: 225,
                justifyContent: 'space-around',
                alignItems: 'flex-start',
                marginBottom: 25
	},
	contentsBody: {
                width: '100%',
		height: 800,
                borderTopRightRadius: 55,
		borderTopLeftRadius: 55,
                backgroundColor: "#6ECFEA",
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                marginBottom: 25
	},
	contentTitle: {
		marginLeft: 0,
		marginBottom: 25,
		textAlign: 'center',
		width: '100%',
		fontSize: 32,
	},
	contentLink: {
		color: '#505050',
		fontSize: 24,
		marginHorizontal: 40,
		marginTop: 40,
		fontWeight: '600'
	},
	contentText: {
		fontSize: 20,
		marginLeft: 25,
		marginTop: 0
	},
	contentHeader: {
		marginTop:0
	}
})
