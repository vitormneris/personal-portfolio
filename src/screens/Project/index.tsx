import React from "react";
import { GoDotFill, GoHomeFill } from "react-icons/go";
import { useLocation } from "react-router-dom";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Title } from "@/components/Title";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi
} from "@/components/ui/carousel";

import styles from "./style.module.css";
import type { Link, NavButton } from "@/utils/types";
import { FaDraftingCompass } from "react-icons/fa";

const buttons: NavButton[] = [
    {
        text: "Início",
        children: (<GoHomeFill className={styles.icon} />),
        target: `${import.meta.env.BASE_URL}`
    },
    {
        text: "Projetos",
        children: (<FaDraftingCompass className={styles.icon} />),
        target: `${import.meta.env.BASE_URL}allprojects`
    }
]

export function ProjectScreen() {
    const location = useLocation()
    const {
        images,
        title,
        description,
        links,
        technologies,
        myParticipation
    } = location.state || {}

    const [api, setApi] = React.useState<CarouselApi>()
    const [current, setCurrent] = React.useState(0)
    const [count, setCount] = React.useState(0)

    React.useEffect(() => {
        if (!api) {
            return
        }

        setCount(api.scrollSnapList().length)
        setCurrent(api.selectedScrollSnap() + 1)

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1)
        })

    }, [api])

    return (
        <div className={styles.screen}>
            <Navbar buttons={buttons} />

            <main id="my_project" className={styles.container}>
                <Title text={title} />
                <div className={styles.container_project}>
                    <Carousel setApi={setApi}>
                        <CarouselContent>
                            {images.map((value: string, index: number) => (
                                <CarouselItem key={index}>
                                    <div className={styles.container_image}>
                                        <img src={value} className={styles.image} alt="Imagem do projeto interdisciplinar" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>

                    <div className={styles.container_indicators}>
                        {Array.from({ length: count }, (_, i) => (
                            <button
                                key={i}
                                className={`${styles.indicator} ${i + 1 === current ? styles.active : ""}`}
                                onClick={() => api?.scrollTo(i)}
                            />
                        ))}
                    </div>

                    <div className={styles.container_info}>
                        <p className={styles.info_description}>
                            <h2 className={styles.info_title}> Descrição </h2>
                            {description}
                        </p>
                        <div className={styles.info_description}>
                            <h2 className={styles.info_title}> Tecnologias </h2>
                            <ul className={styles.info_list}>
                                {technologies.map((technology: string) => (
                                    <div className={styles.wrapper_list_item}>
                                        <GoDotFill size={12} color="#000" />
                                        <li className={styles.info_list_item}>
                                            {technology}
                                        </li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                        <p className={styles.info_description}>
                            <h2 className={styles.info_title}> Minha participação </h2>
                            {myParticipation}
                        </p>

                        <div className={styles.wrapper_info_link}>
                            <h2 className={styles.info_title}> Links </h2>
                            {links.map(({ text, link }: Link) => (
                                <div key={link} className={styles.container_info_link}>
                                    <GoDotFill size={12} color="#000" />
                                    <a href={link} target="_blank">
                                        <p className={styles.info_link}> {text} </p>
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}