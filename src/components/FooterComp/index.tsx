import { Text, View } from "react-native"
import { styles } from "./style"

export const FooterComp = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>© 2025 João Vítor Moreira dos Santos Neris. Todos direitos revervados</Text>
        </View>
    )
}