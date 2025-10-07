import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: { 
        display: 'flex', 
        alignItems: 'center', 
        margin: 25,
        padding: 15,
        borderRadius: 40,
        backgroundColor: '#f4f4f4ff',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.5)', 
        width: 600,
    },

    container_info: { 
        alignItems: 'center', 
        padding: 10, 
        width: '100%' 
    },

    info_title: {
        fontSize: 25, 
        fontFamily: 'Montserrat', 
        fontWeight: '600',
    },
    
    info_description: {
        fontSize: 20, 
        fontFamily: 'Montserrat', 
        textAlign: 'justify', 
        margin: 10
    },

    info_link: {
        fontSize: 17, 
        fontFamily: 'Montserrat', 
        fontWeight: '500', 
        padding: 7
        
    },

    container_image: {
        flex: 1,
        justifyContent: "center",
    },

    image: {
        display: 'flex', 
        alignSelf: 'center',
        borderRadius: 20,
        width: 570,
    },

    pagination_container: { 
        gap: 5, 
        marginTop: 10 
    },

    pagination_dot: { 
        backgroundColor: "rgba(0,0,0,0.2)", 
        borderRadius: 50 
    }
})