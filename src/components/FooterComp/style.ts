import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#212121ff',
        paddingVertical: 25,
        paddingHorizontal: 35,
        marginTop: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)',
    },

    title: {
        fontSize: 20,
        color: '#ffffffff',
        fontWeight: '400',
        marginVertical: 8,
        fontFamily: 'Montserrat'
    },

    icon: {
        marginHorizontal: 15
    },

    text: {
        fontSize: 20,
        color: '#ffffffff',
        fontWeight: '300',
        marginVertical: 5,
        fontFamily: 'Montserrat'
    },
}) 