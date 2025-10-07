import { ReactNode, RefObject } from "react";
import { Image, Text, View } from "react-native"
import { Fontisto, Entypo, FontAwesome5, Octicons } from '@expo/vector-icons';

import { ScaleOnHoverComp } from "../ScaleOnHoverComp"

import { styles } from "./style"

type NavbarCompPros = {
    targets: RefObject<View | null>[],
    scrollToSection: (ref: React.RefObject<View | null>) => void
}

export const NavbarComp = ({ targets, scrollToSection }: NavbarCompPros) => {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/images/my_logo.png")} style={styles.logo} />
            <View style={styles.container_buttons}>
                <NavButton
                    text="Início"
                    children={<Octicons name="home-fill" size={18} color="#fff" />}
                    onPress={() => scrollToSection(targets[0])}
                />
                <NavButton
                    text="Me conheça"
                    children={<Fontisto name="person" size={18} color="#fff" />}
                    onPress={() => scrollToSection(targets[1])}
                />
                <NavButton
                    text="Minhas habilidades"
                    children={<Entypo name="tools" size={18} color="#fff" />}
                    onPress={() => scrollToSection(targets[2])}
                />
                <NavButton
                    text="Projetos"
                    children={<FontAwesome5 name="drafting-compass" size={18} color="#fff" />}
                    onPress={() => scrollToSection(targets[3])}
                />
            </View>
        </View>
    )
}

type NavButtonProps = {
    text: string,
    children: ReactNode,
    onPress: () => void
}

const NavButton = ({ text, children, onPress }: NavButtonProps) => {
    return (
        <ScaleOnHoverComp isPressable={true} onPress={onPress}>
            <View style={styles.button}>
                {children} <Text style={styles.text_button}>{text}</Text>
            </View>
        </ScaleOnHoverComp>

    )
}
