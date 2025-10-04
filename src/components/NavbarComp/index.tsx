import { Image, Text, View } from "react-native"
import { Fontisto, Entypo, FontAwesome5, Octicons } from '@expo/vector-icons';

import { ScaleOnHoverComp } from "../ScaleOnHoverComp"

import { styles } from "./style"
import { ReactNode } from "react";

export const NavbarComp = () => {
    return (
        <View style={styles.container}>
            <Image source={require("../../assets/images/my_logo.png")} style={{width: 170, height: 80}} />
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <NavButton text="Início" children={<Octicons name="home-fill" size={18} color="#fff" />} />
                <NavButton text="Me conheça" children={<Fontisto name="person" size={18} color="#fff" />} />
                <NavButton text="Minhas habilidades" children={<Entypo name="tools" size={18} color="#fff" />}  />
                <NavButton text="Projetos" children={<FontAwesome5 name="drafting-compass" size={18} color="#fff" />}  />
            </View>
        </View>
    )
}

type NavButtonProps = {
    text: string,
    children: ReactNode
}

const NavButton = ({ text, children }: NavButtonProps) => {
    return (
        <ScaleOnHoverComp isPressable={true}>
            <View style={styles.button}>
                 {children} <Text style={styles.text_button}>{text}</Text> 
            </View>
        </ScaleOnHoverComp>

    )
}
