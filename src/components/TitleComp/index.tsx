import { Text } from "react-native"

import { styles } from "./style"
import { View } from "react-native"

type TitleProps = {
    text: string
}

export const TitleComp = ({ text }: TitleProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}> {text} </Text>
            <View style={styles.line} />
        </View>
    )
}