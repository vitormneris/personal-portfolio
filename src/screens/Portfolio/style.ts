import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	container: {
		display: 'flex',
		width: '100%',
		backgroundColor: '#fff',
		alignItems: 'center',
	},

	scroll_view: {
		width: '100%'
	},

	container_home: {
    	minHeight: Dimensions.get('window').height,
		display: "flex",
		flexDirection: "row",
		justifyContent: 'center',
		width: '100%',
		paddingVertical: 120
	},

	container_my_skills: {
		minHeight: Dimensions.get('window').height,
		display: 'flex',
		alignItems: 'center',
		paddingBottom: 120
	},

	container_skills: {
		display: 'flex',
		flexDirection: 'row',
		width: 1200,
		flexWrap: 'wrap'
	},

	container_my_interdisciplinary_project: {
		display: 'flex',
		alignItems: 'center',
	},

	container_text: {
		display: 'flex',
		flexDirection: 'column',
		marginHorizontal: 80,
		justifyContent: 'center'
	},

	container_who_iam: {
		minHeight: Dimensions.get('window').height,
		alignItems: 'center',
		paddingBottom: 100
	},

	container_carousel: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		width: 1300
	},

	container_contact: {
		display: 'flex',
		flexDirection: 'row'
	},

	text_first_part: { 
		color: '#f59061ff', 
		fontSize: 70, 
		fontFamily: 'Montserrat' 
	},
	
	text_second_part: { 
		color: '#6787f1ff', 
		fontSize: 120, 
		fontFamily: 'Montserrat', 
		fontWeight: '500' 
	},

	text_third_part: { 
		width: 600, 
		textAlign: 'justify', 
		color: '#000000', 
		fontSize: 20, 
		fontFamily: 'Montserrat' 
	},

	image: {
		width: 500,
		height: 500,
		borderTopEndRadius: 160,
		borderTopStartRadius: 30,
		borderBottomStartRadius: 160,
		borderBottomEndRadius: 30,
		boxShadow: '6px 10px 12px rgba(0, 0, 0, 0.5)',
	},

	icon_tech: {
		width: 100,
		height: 100,
		margin: 20,
	},

	icon_contact: {
		width: 50,
		height: 50,
		margin: 20,
	},

	paragraph: {
		width: 1200,
		textAlign: 'justify',
		color: '#000000',
		fontSize: 20,
		fontFamily: 'Montserrat',
		margin: 5
	},


});