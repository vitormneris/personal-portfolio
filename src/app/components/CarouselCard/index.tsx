'use client';

import Image from "next/image";
import { GoDotFill } from "react-icons/go";

import styles from "./style.module.css";

import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"
import React from "react";

type CarouselCardProps = {
    data: string[],
    title: string,
    description: string,
    links: Link[]
}

export type Link = {
    text: string,
    link: string
}

export const CarouselCard = ({ data, title, description, links }: CarouselCardProps) => {
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
        <div className={styles.container}>
            <Carousel setApi={setApi}>
                <CarouselContent>
                    {data.map((value: string, index: number) => (
                        <CarouselItem key={index}>
                            <div className={styles.container_image}>
                                <Image src={value} className={styles.image} width={1500} height={1500} alt="Imagem do projeto interdisciplinar" />
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
                <p className={styles.info_title}> {title} </p>
                <p className={styles.info_description}> {description}</p>
                <div className={styles.wrapper_info_link}>
                    {links.map(({ text, link }: Link, index) => (
                        <div key={index} className={styles.container_info_link}>
                            <GoDotFill size={12} color="#000" />
                            <a href={link} target="_blank">
                                <p className={styles.info_link}> {text} </p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
