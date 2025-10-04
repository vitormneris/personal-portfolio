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

	container_who_iam: {
		display: "flex",
		flexDirection: "row",
		backgroundColor: '#a3ff72ff',
		justifyContent: 'center',
		width: '100%',
		paddingVertical: 80
	},

	container_my_skills: {
		display: 'flex',
		backgroundColor: '#72ffeaff',
		alignItems: 'center'
	},

	container_skills: { 
		display: 'flex', 
		flexDirection: 'row', 
		width: 900, 
		flexWrap: 'wrap' 
	},

	container_my_interdisciplinary_project: {
		display: 'flex',
		alignItems: 'center',
		margin: 30
	},	

	image: {
		width: 500,
		height: 500,
		borderTopEndRadius: 160,
		borderTopStartRadius: 30,
		borderBottomStartRadius: 160,
		borderBottomEndRadius: 30
	},

	icon_tech: {
		width: 100,
		height: 100,
		margin: 20
	}
});