import { FiUser, FiTool } from "react-icons/fi";
import { FaDraftingCompass } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";

import styles from "./style.module.css"
import type { ReactNode } from "react";

type NavbarPros = {
    targets: string[]
}

export const Navbar = ({ targets }: NavbarPros) => {

    return (
        <nav className={styles.container}>
            <img 
                src={`${import.meta.env.BASE_URL}/assets/images/my_logo.png`}
                width={500}
                height={500}
                className={styles.logo}
                alt="Logo, icone do terminal com letras as J, V e M ao lado" 
            />
            <div className={styles.container_buttons}>

                <NavButton
                    text="Início"
                    children={<GoHomeFill size={18} color="#fff" />}
                    onPress={targets[0]}
                />
                <NavButton
                    text="Me conheça"
                    children={<FiUser size={18} color="#fff" />}
                    onPress={targets[1]}
                />
                <NavButton
                    text="Minhas habilidades"
                    children={<FiTool size={18} color="#fff" />}
                    onPress={targets[2]}
                />
                <NavButton
                    text="Projetos"
                    children={<FaDraftingCompass size={18} color="#fff" />}
                    onPress={targets[3]}
                />
            </div>
        </nav>
    )
}

type NavButtonProps = {
    text: string,
    children: ReactNode,
    onPress: string
}

const NavButton = ({ text, children, onPress }: NavButtonProps) => {
    return (
        <a href={onPress}>
            <div className={styles.nav_button}>
                {children} <p className={styles.text_button}>{text}</p>
            </div>
        </a>
    )
}
