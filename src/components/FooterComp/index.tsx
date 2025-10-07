import { Text, View } from "react-native"

import { MaterialIcons, Feather } from '@expo/vector-icons';

import { styles } from "./style"

export const FooterComp = () => {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Entre em contato comigo</Text>
                <Text style={styles.text}>
                    <MaterialIcons name="alternate-email" size={17} color="#fff" style={styles.icon}/>joaomoreiraneris0@gmail.com
                </Text>
                <Text style={styles.text}>
                    <Feather name="smartphone" size={17} color="#fff" style={styles.icon}/>+55 (11) 91616-5849
                </Text>
            </View>
            <Text style={styles.text}>© 2025 João Vítor Moreira — Todos os direitos reservados.</Text>
        </View>
    )
}