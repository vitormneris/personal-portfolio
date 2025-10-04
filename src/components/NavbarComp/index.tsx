import { Animated, Pressable, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./style"
import { useRef } from "react";

export const NavbarComp = () => {
    return (
        <View style={styles.container}>
            <NavButton text="Quem eu sou" />
            <NavButton text="Minhas habilidades" />
            <NavButton text="Projetos" />
        </View>
    )
}

type NavButtonProps = {
    text: string
}

export const NavButton = ({ text }: NavButtonProps) => {
    const scale = useRef(new Animated.Value(1)).current;

    const animateTo = (value: number) => {
        Animated.spring(scale, {
            toValue: value,
            useNativeDriver: true,
        }).start();
    };

    return (
        <Pressable
            onHoverIn={() => animateTo(1.1)}
            onHoverOut={() => animateTo(1)}
            onPressIn={() => animateTo(0.95)}
            onPressOut={() => animateTo(1)}
        >
            <Animated.View style={[styles.button, { transform: [{ scale }] }]}>
                <Text style={styles.text_button}>{text}</Text>
            </Animated.View>
        </Pressable>
    )
}