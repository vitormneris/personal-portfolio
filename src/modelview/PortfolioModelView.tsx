import { RefObject, useRef } from "react";
import { ScrollView, View } from "react-native";
import { Linking } from "react-native";

export function PortfolioModelView() {
    const scrollViewRef: RefObject<ScrollView | null> = useRef<ScrollView>(null);
    const targetHome: RefObject<View | null> = useRef<View>(null);
    const targetAboutMe: RefObject<View | null> = useRef<View>(null);
    const targetTechs: RefObject<View | null> = useRef<View>(null);
    const targetProjects: RefObject<View | null> = useRef<View>(null);

    const scrollToSection = (ref: React.RefObject<View | null>) => {
        ref.current?.measureLayout(
            scrollViewRef.current!.getInnerViewNode(),
            (x, y) => {
                scrollViewRef.current?.scrollTo({ y, animated: true });
            },
            () => console.log("Something wrong!")
        );
    };

    return {
        scrollViewRef,
        targetHome,
        targetAboutMe,
        targetTechs,
        targetProjects,
        scrollToSection,
    };
}

const openLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
        await Linking.openURL(url);
    } else {
        alert(`Algo de errado com este link: ${url}`);
    }
};

export const openLinkGitHub = () => openLink("https://github.com/vitormneris")
export const openLinkLinkedin = () => openLink("https://www.linkedin.com/in/vitormneris/")
export const openLinkPI1 = () => openLink("https://github.com/vitormneris/debian-redesign#")
export const openLinkPI2 = () => openLink("https://github.com/vitormneris/simple-crud-php")
export const openLinkPI3Backend = () => openLink("https://github.com/vitormneris/wb-assessoria-backend-spring-boot")
export const openLinkPI3Frontend = () => openLink("https://github.com/vitormneris/wb-assessoria-front-end-web")
export const openLinkPI4Backend = () => openLink("https://github.com/vitormneris/mister-gold-api-spring-boot")
export const openLinkPI4FrontendAdm = () => openLink("https://github.com/vitormneris/mister-gold-front-end-adm")
export const openLinkPI4FrontendClient = () => openLink("https://github.com/vitormneris/mister-gold-front-end-customer")
export const openLinkPI5Backend = () => openLink("https://github.com/vitormneris/bem-te-vi-backend-spring-boot")
export const openLinkPI5FrontendAdm = () => openLink("https://github.com/vitormneris/bem-te-vi-front-end-adm")
export const openLinkPI5FrontendClient = () => openLink("https://github.com/vitormneris/bem-te-vi-front-end-customer")

export const pi1Images = [
    require("../assets/images/pi1/screenshot1.png"),
    require("../assets/images/pi1/screenshot2.png"),
    require("../assets/images/pi1/screenshot3.png")
]

export const pi2Images = [
    require("../assets/images/pi2/screenshot1.png"),
    require("../assets/images/pi2/screenshot2.png"),
    require("../assets/images/pi2/screenshot3.png"),
    require("../assets/images/pi2/screenshot4.png"),
    require("../assets/images/pi2/screenshot5.png"),
    require("../assets/images/pi2/screenshot6.png"),
    require("../assets/images/pi2/screenshot7.png"),
    require("../assets/images/pi2/screenshot8.png"),
    require("../assets/images/pi2/screenshot9.png"),
    require("../assets/images/pi2/screenshot10.png"),
    require("../assets/images/pi2/screenshot11.png"),
    require("../assets/images/pi2/screenshot12.png"),
    require("../assets/images/pi2/screenshot13.png"),
]

export const pi3Images = [
    require("../assets/images/pi3/screenshot1.png"),
    require("../assets/images/pi3/screenshot2.png"),
    require("../assets/images/pi3/screenshot3.png"),
    require("../assets/images/pi3/screenshot4.png"),
    require("../assets/images/pi3/screenshot5.png"),
    require("../assets/images/pi3/screenshot6.png"),
    require("../assets/images/pi3/screenshot7.png"),
    require("../assets/images/pi3/screenshot8.png"),
    require("../assets/images/pi3/screenshot9.png"),
    require("../assets/images/pi3/screenshot10.png"),
    require("../assets/images/pi3/screenshot11.png"),
    require("../assets/images/pi3/screenshot12.png"),
    require("../assets/images/pi3/screenshot13.png"),
    require("../assets/images/pi3/screenshot14.png"),
    require("../assets/images/pi3/screenshot15.png"),
]


export const pi4Images = [
    require("../assets/images/pi4/screenshot8.png"),
    require("../assets/images/pi4/screenshot9.png"),
    require("../assets/images/pi4/screenshot10.png"),
    require("../assets/images/pi4/screenshot11.png"),
    require("../assets/images/pi4/screenshot12.png"),
    require("../assets/images/pi4/screenshot13.png"),
    require("../assets/images/pi4/screenshot14.png"),
    require("../assets/images/pi4/screenshot15.png"),
    require("../assets/images/pi4/screenshot16.png"),
    require("../assets/images/pi4/screenshot17.png"),
    require("../assets/images/pi4/screenshot18.png"),
    require("../assets/images/pi4/screenshot19.png"),
    require("../assets/images/pi4/screenshot20.png"),
    require("../assets/images/pi4/screenshot1.png"),
    require("../assets/images/pi4/screenshot2.png"),
    require("../assets/images/pi4/screenshot3.png"),
    require("../assets/images/pi4/screenshot4.png"),
    require("../assets/images/pi4/screenshot5.png"),
    require("../assets/images/pi4/screenshot6.png"),
    require("../assets/images/pi4/screenshot7.png"),
]

export const pi5Images = [
    require("../assets/images/pi5/screenshot1.png"),
    require("../assets/images/pi5/screenshot2.png"),
    require("../assets/images/pi5/screenshot3.png"),
    require("../assets/images/pi5/screenshot4.png"),
    require("../assets/images/pi5/screenshot5.png"),
    require("../assets/images/pi5/screenshot6.png"),
    require("../assets/images/pi5/screenshot7.png"),
    require("../assets/images/pi5/screenshot8.png"),
    require("../assets/images/pi5/screenshot9.png"),
    require("../assets/images/pi5/screenshot10.png"),
    require("../assets/images/pi5/screenshot11.png"),
    require("../assets/images/pi5/screenshot12.png"),
    require("../assets/images/pi5/screenshot13.png"),
    require("../assets/images/pi5/screenshot14.png"),
    require("../assets/images/pi5/screenshot15.png"),
    require("../assets/images/pi5/screenshot16.png"),
    require("../assets/images/pi5/screenshot17.png"),
    require("../assets/images/pi5/screenshot18.png"),
    require("../assets/images/pi5/screenshot19.png"),
    require("../assets/images/pi5/screenshot20.png"),
    require("../assets/images/pi5/screenshot21.png"),
    require("../assets/images/pi5/screenshot22.png"),
    require("../assets/images/pi5/screenshot23.png"),
    require("../assets/images/pi5/screenshot24.png"),
    require("../assets/images/pi5/screenshot25.png"),
]
