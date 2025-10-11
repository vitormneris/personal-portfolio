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
        target: `${import.meta.env.BASE_URL}allprojects`
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
                        Desenvolvedor Fullstack, com experiência em Java, Spring Boot, React Native, além
                        de integração com bancos de dados relacionais e não-relacionais. Apaixonado
                        por criar soluções eficientes e aprender novas tecnologias constantemente.
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
                        Olá! Meu nome é João Vítor Moreira, tenho 23 anos e sou desenvolvedor web fullstack. Atualmente, estou no 6º período
                        do curso de Desenvolvimento de Software Multiplataforma na FATEC Itaquera.
                    </p>
                </div>

                <div className={styles.container_paragraph}>
                    <p className={styles.paragraph}>
                        Tenho sólida experiência na construção de aplicações RESTful utilizando Java, Spring Boot, MongoDB, MySQL e Docker,
                        aplicando boas práticas de arquitetura, como a Arquitetura Hexagonal.
                    </p>
                </div>

                <div className={styles.container_paragraph}>
                    <p className={styles.paragraph}>
                        Atuei como freelancer em uma plataforma de cursos, sendo responsável pelo desenvolvimento do backend, utilização de
                        serviços como Firebase Storage e FFMPEG para upload e processamento de vídeos. Sempre que necessário, eu entrava em
                        contato com a equipe de frontend para orientá-los na integração das partes do projeto.
                    </p>
                </div>

                <div className={styles.container_paragraph}>
                    <p className={styles.paragraph}>
                        Além de backend, possuo experiência em desenvolvimento Android em Java e React Native, já desenvolvi projetos em Android
                        com conexão com servidor. Tenho conhecimentos em C, Python, PHP, HTML, CSS, JavaScript e TypeScript, o que me permite
                        atuar de forma versátil em diferentes camadas do desenvolvimento de software.
                    </p>
                </div>

                <div className={styles.container_paragraph}>
                    <p className={styles.paragraph}>
                        Recentemente, tenho explorado hospedagem e deployment na nuvem, com foco na AWS, utilizando serviços gratuitos como o EC2
                        para hospedar sistemas de e-commerce e APIs RESTful integradas a aplicativos Android. Além disso, tenho experiência no uso
                        de serviços como o S3 para armazenamento e hospedagem de arquivos.
                    </p>
                </div>

                <div className={styles.container_paragraph}>
                    <p className={styles.paragraph}>
                        Sou entusiasta de Linux desde os 16 anos, com experiência em distribuições como Ubuntu, Debian, Fedora Workstation,
                        Fedora Silverblue, Arch Linux e NixOS. Tenho afinidade com o terminal e criação de shell scripts, habilidades que
                        complementam meu trabalho com Docker e serviços de nuvem.
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
                            <p className={styles.paragraph_information}>Localização: Itaquera / SP</p>
                            <p className={styles.paragraph_information}>Curso: Desenvolvimento de Software Multiplataforma (DSM)</p>
                            <p className={styles.paragraph_information}>Duração: Início - Janeiro de 2023 | Término - Dezembro de 2025</p>
                        </div>
                    </div>

                    <div className={styles.work_information}>
                        <h2 className={styles.title_information}>Experiência profissional</h2>
                        <div className={styles.subcontainer_information}>
                            <p className={styles.paragraph_information}>Empresa: Run Multiplataforma</p>
                            <p className={styles.paragraph_information}>Cargo: Desenvolvedor back-end (Freelancer)</p>
                            <p className={styles.paragraph_information}>Duração: Início - Maio de 2024 | Término - Julho de 2024</p>
                            <p className={styles.paragraph_information}>
                                Descrição: Desenvolvi soluções para o sistema back-end do projeto Run Multiplataforma,
                                uma plataforma web de cursos online, usei tecnologias como Java 21, Spring Boot,
                                MongoDB, Docker e FFMPEG, bem como serviços de terceiros como Firebase para realizar
                                upload de vídeos. Neste projeto tive a oportunidade de aprender e trabalhar com a
                                arquitetura hexagonal.
                            </p>
                        </div>
                    </div>
                    <div className={styles.course_information}>
                        <h2 className={styles.title_information}>Cursos e extensões</h2>
                        <div className={styles.subcontainer_information}>
                            <p className={styles.paragraph_information}>Empresa: Stark Academy (Caraça e Nascimento Cursos LTDA)</p>
                            <p className={styles.paragraph_information}>Localização: Arujá / SP</p>
                            <p className={styles.paragraph_information}>Duração: Início - Agosto de 2019 | Término - Junho de 2021</p>
                            <p className={styles.paragraph_information}>Curso: Informática básica(Introdução, Windows e Internet) e pacote Office(Word, Excel powerpoint)</p>
                            <p className={styles.paragraph_information}>Carga horária: 78 horas</p>
                        </div>
                        <div className={styles.subcontainer_information}>
                            <p className={styles.paragraph_information}>Empresa: Curso em vídeo</p>
                            <p className={styles.paragraph_information}>Localização: Online</p>
                            <p className={styles.paragraph_information}>Duração: Início - 6 de Setembro de 2021 | Término - 28 de Setembro de 2021</p>
                            <p className={styles.paragraph_information}>Cursos: Python3 - Mundo 1, Python3 - Mundo 2 e Python3 - Mundo 3</p>
                            <p className={styles.paragraph_information}>Carga horária: 120 horas</p>
                        </div>
                        <div className={styles.subcontainer_information}>
                            <p className={styles.paragraph_information}>Empresa: Curso em vídeo</p>
                            <p className={styles.paragraph_information}>Localização: Online</p>
                            <p className={styles.paragraph_information}>Duração: Início - Janeiro de 2023 | Término - 28 de Março de 2023</p>
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

