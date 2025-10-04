import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#ffffffff',
        justifyContent: 'space-between',
        width: '100%',
		boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', 
    },

    button: {
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 20,
        backgroundColor: '#6c78f4ff',
        borderRadius: 20,
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', 
    },

    text_button: {
        color: '#FFFFFF',
        fontSize: 15,
        fontFamily: 'Montserrat',
        fontWeight: '500',
        marginHorizontal: 12
    },
}) 