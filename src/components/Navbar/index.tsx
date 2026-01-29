import { useEffect, useState, type ReactNode } from "react";

import styles from "./style.module.css"
import type { NavButton } from "@/utils/types";
import { HashLink as Link } from 'react-router-hash-link';
import { openLinkPortfolio } from "@/viewModel/PortfolioViewModel";

type NavbarPros = {
  buttons: NavButton[]
}

export const Navbar = ({ buttons }: NavbarPros) => {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [hidden, setHidden] = useState<string>('none')

  const handleResize = () => {
    setIsMobile(window.innerWidth < 1215);
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
      <a href={openLinkPortfolio()} className={styles.logo_link}>
        <img
          src={`${import.meta.env.BASE_URL}/assets/images/my_logo.png`}
          width={500}
          height={500}
          className={styles.logo}
          alt="Logo, icone do terminal com letras as J, V e M ao lado"
        />
      </a>

      {isMobile && (
        <button className={styles.button} onClick={hiddenMenu}>
          <hr className={styles.line} />
          <hr className={styles.line} />
          <hr className={styles.line} />
        </button>
      )}
      {!isMobile && (
        <div className={styles.container_buttons}>
          {buttons.map(({ text, children, target }: NavButton) => (
            <NavButton
              text={text}
              children={children}
              onPress={target}
            />
          ))}
        </div>
      )}
      <SideMenu hidden={hidden} buttons={buttons} hiddenMenu={hiddenMenu} />
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
    <Link to={onPress}>
      <div className={styles.nav_button}>
        {children} <p className={styles.text_button}>{text}</p>
      </div>
    </Link>
  )
}

type SideMenuProps = {
  hidden: string,
  hiddenMenu: () => void,
  buttons: NavButton[],
}

export const SideMenu = ({ hidden, buttons, hiddenMenu }: SideMenuProps) => {

  return (
    <div className={styles.container_menu} style={{ display: hidden }} onClick={hiddenMenu}>
      {buttons.map(({ text, children, target }: NavButton) => (
        <button onClick={hiddenMenu}>
          <NavButton
            text={text}
            children={children}
            onPress={target}
          />
        </button>
      ))}
    </div>
  )
}
