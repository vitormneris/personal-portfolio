import { Title } from "@/components/Title";

import styles from "./style.module.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { FaDraftingCompass } from "react-icons/fa";
import { GoHomeFill } from "react-icons/go";
import type { NavButton } from "@/utils/types";
import { projects } from "@/data/projects";

const buttons: NavButton[] = [
    {
        text: "Início",
        children: (<GoHomeFill className={styles.icon} />),
        target: `/`
    },
    {
        text: "Projetos",
        children: (<FaDraftingCompass className={styles.icon} />),
        target: `/allprojects`
    }
]

export function ListProjectsScreen() {
  return (
    <div className={styles.screen}>
      <Navbar buttons={buttons} />

      <main id="my_interdisciplinary_project" className={styles.container_my_interdisciplinary_project}>
        <Title text="Meus projetos interdisciplinares" />
        <div className={styles.container_carousel}>
          <ProjectCard
            imageUrl={`${import.meta.env.BASE_URL}assets/images/pi1/screenshot1.png`}
            title="1° PI - Debian redesign"
            dataScreen={projects[0]}
          />
          <ProjectCard
            imageUrl={`${import.meta.env.BASE_URL}assets/images/pi2/screenshot4.png`}
            title="2° PI - Simple CRUD PHP"
            dataScreen={projects[1]}
          />
          <ProjectCard
            imageUrl={`${import.meta.env.BASE_URL}assets/images/pi3/screenshot1.png`}
            title="3° PI - WB Assessoria"
            dataScreen={projects[2]}
          />
          <ProjectCard
            imageUrl={`${import.meta.env.BASE_URL}assets/images/pi4/screenshot8.png`}
            title="4° PI - Mistergold"
            dataScreen={projects[3]}
          />
          <ProjectCard
            imageUrl={`${import.meta.env.BASE_URL}assets/images/pi5/screenshot13.png`}
            title="5° PI - Bemtevi"
            dataScreen={projects[4]}
          />
          <ProjectCard
            imageUrl={`${import.meta.env.BASE_URL}assets/images/pi6/screenshot13.png`}
            title="6° PI - Imobly"
            dataScreen={projects[5]}
          />
        </div>
        <Footer />
      </main>
    </div>
  )
}