import { StyleSheet } from "react-native";

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
		display: "flex",
		flexDirection: "row",
		justifyContent: 'center',
		width: '100%',
		paddingVertical: 120
	},

	container_my_skills: {
		display: 'flex',
		alignItems: 'center',
		paddingVertical: 120
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
		alignItems: 'center'
	},

	container_carousel: { 
		display: 'flex', 
		flexDirection: 'row', 
		flexWrap: 'wrap',
		width: 1300
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