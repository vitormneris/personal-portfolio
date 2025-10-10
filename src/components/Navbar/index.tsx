import { useEffect, useState, type ReactNode } from "react";

import { FiUser, FiTool } from "react-icons/fi";
import { FaDraftingCompass } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";

import styles from "./style.module.css"

type NavbarPros = {
  targets: string[]
}

export type Item = {
  title: string,
  url: string
}

export const Navbar = ({ targets }: NavbarPros) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [hidden, setHidden] = useState<string>('none')

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1100);
  };

  useEffect(() => {
    handleResize()
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hiddenMenu = () => {
    if (hidden == 'flex') {
      setHidden('none')
    }
    else {
      setHidden('flex')
    }
  }

  return (
    <nav className={styles.container}>
      <img
        src={`${import.meta.env.BASE_URL}/assets/images/my_logo.png`}
        width={500}
        height={500}
        className={styles.logo}
        alt="Logo, icone do terminal com letras as J, V e M ao lado"
      />
      {isMobile && (
        <button className={styles.button} onClick={hiddenMenu}>
          <hr className={styles.line} />
          <hr className={styles.line} />
          <hr className={styles.line} />
        </button>
      )}
      {!isMobile && (
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
      )}
      <SideMenu hidden={hidden} targets={targets} hiddenMenu={hiddenMenu} />
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

type SideMenuProps = {
  hidden: string,
  targets: string[],
  hiddenMenu: () => void
}

export const SideMenu = ({ hidden, targets, hiddenMenu }: SideMenuProps) => {

  return (
    <div className={styles.container_menu} style={{ display: hidden }} onClick={hiddenMenu}>
      <button onClick={hiddenMenu}>
        <NavButton
          text="Início"
          children={<GoHomeFill size={18} color="#fff" />}
          onPress={targets[0]}
        />
      </button>
      <button onClick={hiddenMenu}>

        <NavButton
          text="Me conheça"
          children={<FiUser size={18} color="#fff" />}
          onPress={targets[1]}
        />
      </button>
      <button onClick={hiddenMenu}>
        <NavButton
          text="Minhas habilidades"
          children={<FiTool size={18} color="#fff" />}
          onPress={targets[2]}
        />
      </button>
      <button onClick={hiddenMenu}>
        <NavButton
          text="Projetos"
          children={<FaDraftingCompass size={18} color="#fff" />}
          onPress={targets[3]}
        />
      </button>
    </div>
  )
}
