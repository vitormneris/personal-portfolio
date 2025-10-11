'use client';

import type { Project } from "@/utils/types";
import styles from "./style.module.css";
import { Link } from "react-router-dom";
import { AiOutlineInfoCircle } from "react-icons/ai";

type ProjectCardProps = {
    imageUrl: string,
    title: string,
    dataScreen: Project
}


export const ProjectCard = ({ imageUrl, title, dataScreen }: ProjectCardProps) => {

    return (
        <div className={styles.container}>
            <div className={styles.container_image}>
                <img src={imageUrl} className={styles.image} alt="Imagem do projeto interdisciplinar" />
            </div>
            <div className={styles.container_info}>
                <p className={styles.info_title}> {title} </p>
            </div>

            <Link
                to={`/project`}
                state={dataScreen}
                className={styles.link}
            >
               <AiOutlineInfoCircle size={24} /> <p className={styles.link_text}> Ver detalhes </p>
            </Link>
        </div>
    );
}
