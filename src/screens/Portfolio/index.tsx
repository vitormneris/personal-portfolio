import { Navbar } from "../../components/Navbar";
import { Title } from "../../components/Title";
import { Footer } from "../../components/Footer";
import { openLinkGitHub, openLinkLinkedin } from "../../modelview/PortfolioModelView";
import { GoHomeFill } from "react-icons/go";
import { FaDraftingCompass } from "react-icons/fa";
import { FiTool, FiUser } from "react-icons/fi";
import { MdSummarize } from "react-icons/md";
import type { NavButton } from "@/utils/types";
import styles from "./style.module.css";

const buttons: NavButton[] = [
    {
        text: "Início",
        children: (<GoHomeFill className={styles.icon} />),
        target: "#home"
    },
    {
        text: "Me conheça",
        children: (<FiUser className={styles.icon} />),
        target: "#who_iam"
    },
    {
        text: "Minhas habilidades",
        children: (<FiTool className={styles.icon} />),
        target: "#my_skills"
    },
    {
        text: "Informações gerais",
        children: (<MdSummarize className={styles.icon} />),
        target: "#container_information"
    },
    {
        text: "Projetos",
        children: (<FaDraftingCompass className={styles.icon} />),
        target: `/allprojects`
    }
]

export default function PortfolioScreen() {

    return (
        <div className={styles.container}>
            <Navbar buttons={buttons} />
            <div id="home" className={styles.container_home}>
                <img className={styles.image} src={`${import.meta.env.BASE_URL}assets/images/my-photo.jpeg`} alt="Minha foto" />
                <div className={styles.container_text}>
                    <p className={styles.text_first_part}>
                        Olá, meu nome é
                    </p>
                    <p className={styles.text_second_part}>
                        João Vítor
                    </p>
                    <p className={styles.text_third_part}>
                        Desenvolvedor Backend com experiência em Java e Spring Boot, atuando na integração com bancos de dados relacionais e
                        não relacionais, além de serviços em cloud (AWS). Focado em criar soluções eficientes e em aprendizado contínuo de
                        novas tecnologias.
                    </p>
                    <div className={styles.container_contact}>
                        <a href={openLinkGitHub()} target="_blank">
                            <img src={`${import.meta.env.BASE_URL}assets/images/social-networks/github.png`} className={styles.icon_contact} />
                        </a>
                        <a href={openLinkLinkedin()} target="_blank">
                            <img src={`${import.meta.env.BASE_URL}assets/images/social-networks/linkedin.png`} className={styles.icon_contact} />
                        </a>
                    </div>
                </div>
            </div>

            <div id="who_iam" className={styles.container_who_iam}>

                <Title text="Sobre mim" />
                <div className={styles.container_paragraph}>
                    <p className={styles.paragraph}>
                        Olá! Meu nome é João Vítor Moreira, tenho 23 anos e sou desenvolvedor web com foco em backend. Sou formado em Desenvolvimento 
                        de Software Multiplataforma pela FATEC Itaquera.
                    </p>
                </div>

                <div className={styles.container_paragraph}>
                    <p className={styles.paragraph}>
                        Tenho experiência sólida na construção de aplicações RESTful utilizando Java e Spring Boot, com integração a MongoDB, MySQL e 
                        uso de Docker, sempre aplicando boas práticas de arquitetura, como a Arquitetura Hexagonal.
                    </p>
                </div>

                <div className={styles.container_paragraph}>
                    <p className={styles.paragraph}>
                        Além do backend, também possuo experiência em desenvolvimento Android, utilizando Java e React Native. Já desenvolvi projetos 
                        mobile integrados a servidores hospedados na AWS (EC2). Tenho conhecimentos em C, Python, Kotlin, HTML, CSS, JavaScript e 
                        TypeScript, o que me permite transitar por diferentes camadas do desenvolvimento de software quando necessário.
                    </p>
                </div>

                <div className={styles.container_paragraph}>
                    <p className={styles.paragraph}>
                        Nos últimos tempos, venho explorando hospedagem e deploy em nuvem, com foco na AWS, utilizando serviços como EC2 para hospedar 
                        APIs RESTful e sistemas de e-commerce, além do S3 para armazenamento e hospedagem de arquivos.
                    </p>
                </div>

                <div className={styles.container_paragraph}>
                    <p className={styles.paragraph}>
                        Sou entusiasta de Linux desde os 16 anos, com experiência em distribuições como Ubuntu, Debian, Red Hat Enterprise Linux, Arch 
                        Linux e NixOS. Tenho bastante afinidade com o terminal e com a criação de shell scripts, habilidades que complementam meu trabalho 
                        com Docker e ambientes em nuvem.
                    </p>
                </div>

                <div className={styles.container_paragraph}>
                    <p className={styles.paragraph}>
                        Tenho facilidade em aprender novas tecnologias e um interesse genuíno em entender como as coisas funcionam em profundidade. 
                        Ao longo dos projetos que participei, atuei frequentemente como líder de equipe, sempre mantendo uma boa comunicação e um relacionamento
                        saudável com os demais membros.
                    </p>
                </div>

            </div>

            <div id="my_skills" className={styles.container_my_skills}>
                <Title text="Experiência nestas tecnologias" />
                <div className={styles.container_skills}>
                    <IconView link={`${import.meta.env.BASE_URL}/assets/images/techs/python.png`} />
                    <IconView link={`${import.meta.env.BASE_URL}/assets/images/techs/java-coffee.png`} />
                    <IconView link={`${import.meta.env.BASE_URL}/assets/images/techs/spring-boot-2.png`} />
                    <IconView link={`${import.meta.env.BASE_URL}/assets/images/techs/spring-data.webp`} />
                    <IconView link={`${import.meta.env.BASE_URL}/assets/images/techs/spring-security-2.png`} />
                    <IconView link={`${import.meta.env.BASE_URL}/assets/images/techs/jwt.png`} />
                    <IconView link={`${import.meta.env.BASE_URL}/assets/images/techs/mysql.png`} />
                    <IconView link={`${import.meta.env.BASE_URL}/assets/images/techs/mongodb.png`} />
                    <IconView link={`${import.meta.env.BASE_URL}/assets/images/techs/postgresql.png`} />
                    <IconView link={`${import.meta.env.BASE_URL}/assets/images/techs/figma.png`} />
                    <IconView link={`${import.meta.env.BASE_URL}/assets/images/techs/html.webp`} />
                    <IconView link={`${import.meta.env.BASE_URL}/assets/images/techs/css.svg`} />
                    <IconView link={`${import.meta.env.BASE_URL}/assets/images/techs/javascript.png`} />
                    <IconView link={`${import.meta.env.BASE_URL}/assets/images/techs/typescript.png`} />
                    <IconView link={`${import.meta.env.BASE_URL}/assets/images/techs/react-native.png`} />
                    <IconView link={`${import.meta.env.BASE_URL}/assets/images/techs/docker.png`} />
                    <IconView link={`${import.meta.env.BASE_URL}/assets/images/techs/amazon_s3.webp`} />
                    <IconView link={`${import.meta.env.BASE_URL}/assets/images/techs/amazon_ec2.webp`} />
                    <IconView link={`${import.meta.env.BASE_URL}/assets/images/techs/redhat.webp`} />
                    <IconView link={`${import.meta.env.BASE_URL}/assets/images/techs/ubuntu.png`} />
                    <IconView link={`${import.meta.env.BASE_URL}/assets/images/techs/mercado-pago.png`} />
                    <IconView link={`${import.meta.env.BASE_URL}/assets/images/techs/jira.svg`} />
                    <IconView link={`${import.meta.env.BASE_URL}/assets/images/techs/gradle.png`} />
                    <IconView link={`${import.meta.env.BASE_URL}/assets/images/techs/git.png`} />
                </div>
            </div>

            <div id="container_information" className={styles.wrapper_container_information}>
                <Title text="Informações gerais" />
                <div className={styles.container_information}>
                    <div className={styles.college_information}>
                        <h2 className={styles.title_information}>Faculdades</h2>
                        <div className={styles.subcontainer_information}>
                            <p className={styles.paragraph_information}>Faculdade: Fatec - Faculdade de Tecnologia</p>
                            <p className={styles.paragraph_information}>Localização: Itaquera/São Paulo</p>
                            <p className={styles.paragraph_information}>Status: Concluído</p>
                            <p className={styles.paragraph_information}>Curso: Desenvolvimento de Software Multiplataforma (DSM)</p>
                            <p className={styles.paragraph_information}>Duração: Janeiro de 2023 - Dezembro de 2025</p>
                        </div>
                    </div>

                    <div className={styles.work_information}>
                        <h2 className={styles.title_information}>Experiências profissionais</h2>
                        <div className={styles.subcontainer_information}>
                            <p className={styles.paragraph_information}>Empresa: Run Multiplataforma</p>
                            <p className={styles.paragraph_information}>Cargo: Desenvolvedor back-end (Freelancer)</p>
                            <p className={styles.paragraph_information}>Localização: Remoto</p>
                            <p className={styles.paragraph_information}>Duração: Janeiro de 2024 - Julho de 2024</p>
                            <p className={styles.paragraph_information}>
                                Descrição: Desenvolvi soluções para o sistema back-end do projeto Run Multiplataforma,
                                uma plataforma web de cursos online, usei tecnologias como Java 21, Spring Boot,
                                MongoDB, Docker e FFMPEG, bem como serviços de terceiros como Firebase para realizar
                                upload de vídeos. Neste projeto tive a oportunidade de aprender e trabalhar com a
                                arquitetura hexagonal.
                            </p>
                        </div>
                        <div className={styles.subcontainer_information}>
                            <p className={styles.paragraph_information}>Empresa: Faculdade: Fatec - Faculdade de Tecnologia</p>
                            <p className={styles.paragraph_information}>Cargo: Desenvolvedor full-stack (Estágio)</p>
                            <p className={styles.paragraph_information}>Localização: Itaquera/São Paulo</p>
                            <p className={styles.paragraph_information}>Duração: Agosto de 2025 - Dezembro de 2025</p>
                            <p className={styles.paragraph_information}>
                                Descrição: Desenvolvi o projeto da carteirinha digital para Fatec Itaquera, construindo um site feito em
                                React para gerenciamento da carteirinha, um aplicativo mobile em React Native com a carteirinha digital para o aluno
                                e um back-end feito em Kotlin e Spring Boot com um banco de dados relacional PostGreSQL. Neste projeto atuei como líder
                                de equipe.
                            </p>
                        </div>
                    </div>
                    <div className={styles.course_information}>
                        <h2 className={styles.title_information}>Cursos e extensões</h2>
                        <div className={styles.subcontainer_information}>
                            <p className={styles.paragraph_information}>Empresa: Stark Academy (Caraça e Nascimento Cursos LTDA)</p>
                            <p className={styles.paragraph_information}>Localização: Arujá / SP</p>
                            <p className={styles.paragraph_information}>Duração: Agosto de 2019 - Junho de 2021</p>
                            <p className={styles.paragraph_information}>Curso: Informática básica(Introdução, Windows e Internet) e pacote Office(Word, Excel powerpoint)</p>
                            <p className={styles.paragraph_information}>Carga horária: 78 horas</p>
                        </div>
                        <div className={styles.subcontainer_information}>
                            <p className={styles.paragraph_information}>Empresa: Curso em vídeo</p>
                            <p className={styles.paragraph_information}>Localização: Online</p>
                            <p className={styles.paragraph_information}>Duração: 6 de Setembro de 2021 - 28 de Setembro de 2021</p>
                            <p className={styles.paragraph_information}>Cursos: Python3 - Mundo 1, Python3 - Mundo 2 e Python3 - Mundo 3</p>
                            <p className={styles.paragraph_information}>Carga horária: 120 horas</p>
                        </div>
                        <div className={styles.subcontainer_information}>
                            <p className={styles.paragraph_information}>Empresa: Curso em vídeo</p>
                            <p className={styles.paragraph_information}>Localização: Online</p>
                            <p className={styles.paragraph_information}>Duração: Janeiro de 2023 - Março de 2023</p>
                            <p className={styles.paragraph_information}>Cursos: Algoritmo, Java Básico e Java POO</p>
                            <p className={styles.paragraph_information}>Carga horária: 120 horas</p>
                        </div>
                    </div>
                    <div className={styles.language_information}>
                        <h2 className={styles.title_information}>Conhecimento em línguas</h2>
                        <div className={styles.subcontainer_information}>
                            <p className={styles.paragraph_information}>Português nativo</p>
                        </div>
                        <div className={styles.subcontainer_information}>
                            <p className={styles.paragraph_information}>Inglês intermediário</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

type IconViewProps = {
    link: string
}

const IconView = ({ link }: IconViewProps) => {
    return (
        <img
            src={link}
            className={styles.icon_tech}
            alt="Imagem com o simbolo de uma tecnologia"
            width={1000}
            height={1000}
        />
    )
}

