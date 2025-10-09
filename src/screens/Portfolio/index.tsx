import { Navbar } from "../../components/Navbar";
import { CarouselCard } from "../../components/CarouselCard";
import { Title } from "../../components/Title";
import { Footer } from "../../components/Footer";

import styles from "./style.module.css";

import {
    openLinkGitHub,
    openLinkLinkedin,
    openLinkPI1,
    openLinkPI2,
    openLinkPI3Backend,
    openLinkPI3Frontend,
    openLinkPI4Backend,
    openLinkPI4FrontendAdm,
    openLinkPI4FrontendClient,
    openLinkPI5Backend,
    openLinkPI5FrontendAdm,
    openLinkPI5FrontendClient,
    pi1Images,
    pi2Images,
    pi3Images,
    pi4Images,
    pi5Images,
} from "../../modelview/PortfolioModelView";

export default function Portfolio() {

    return (
        <div className={styles.container}>
            <Navbar targets={["#home", "#who_iam", "#my_skills", "#my_interdisciplinary_project"]} />

            <div id="home" className={styles.container_home}>
                <div className={styles.image}>
                    <img width={1500} height={1500} src="/assets/images/my-photo.jpeg" className={styles.image} alt="Minha foto" />
                </div>
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
                            <img src={"/assets/images/social-networks/github.png"} className={styles.icon_contact} />
                        </a>
                        <a href={openLinkLinkedin()} target="_blank">
                            <img src={"/assets/images/social-networks/linkedin.png"} className={styles.icon_contact} />
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
                    <IconView link={"/assets/images/techs/python.png"} />
                    <IconView link={"/assets/images/techs/java-coffee.png"} />
                    <IconView link={"/assets/images/techs/spring-boot-2.png"} />
                    <IconView link={"/assets/images/techs/spring-data.webp"} />
                    <IconView link={"/assets/images/techs/spring-security-2.png"} />
                    <IconView link={"/assets/images/techs/jwt.png"} />
                    <IconView link={"/assets/images/techs/mysql.png"} />
                    <IconView link={"/assets/images/techs/mongodb.png"} />
                    <IconView link={"/assets/images/techs/postgresql.png"} />
                    <IconView link={"/assets/images/techs/figma.png"} />
                    <IconView link={"/assets/images/techs/html.webp"} />
                    <IconView link={"/assets/images/techs/css.svg"} />
                    <IconView link={"/assets/images/techs/javascript.png"} />
                    <IconView link={"/assets/images/techs/typescript.png"} />
                    <IconView link={"/assets/images/techs/react-native.png"} />
                    <IconView link={"/assets/images/techs/docker.png"} />
                    <IconView link={"/assets/images/techs/amazon_s3.webp"} />
                    <IconView link={"/assets/images/techs/amazon_ec2.webp"} />
                    <IconView link={"/assets/images/techs/redhat.webp"} />
                    <IconView link={"/assets/images/techs/ubuntu.png"} />
                    <IconView link={"/assets/images/techs/mercado-pago.png"} />
                    <IconView link={"/assets/images/techs/jira.svg"} />
                    <IconView link={"/assets/images/techs/gradle.png"} />
                    <IconView link={"/assets/images/techs/git.png"} />
                </div>
            </div>

            <div id="my_interdisciplinary_project" className={styles.container_my_interdisciplinary_project}>
                <Title text="Meus projetos interdisciplinares" />
                <div className={styles.container_carousel}>
                    <CarouselCard
                        data={pi1Images}
                        title="1° PI - Debian redesign"
                        description={
                            "Projeto de redesign da página inicial do site debian.org, site responsivo de página estática, " +
                            "utilizando apenas HTML5, CSS3 e JavaScript para reforçar fundamentos web. Inclui layout responsivo, " +
                            "estrutura semântica e interatividade básica."
                        }
                        links={[{ text: "Ir para o repositório - Debian redesign", link: openLinkPI1() }]}
                    />
                    <CarouselCard
                        data={pi2Images}
                        title="2° PI - Simple CRUD PHP"
                        description={
                            "Projeto CRUD simples desenvolvido sob orientação do professor Faustino, permitindo " +
                            "criar, ler, atualizar e excluir registros de Usuários e Produtos. Construído com HTML5, " +
                            "CSS3, JavaScript, PHP e SQLite, proporciona prática em integração frontend-backend e " +
                            "persistência de dados. Possui integração com ViaCEP e recursos de mapa."
                        }
                        links={[{ text: "Ir para o repositório - Simple CRUD PHP", link: openLinkPI2() }]}
                    />
                    <CarouselCard
                        data={pi3Images}
                        title="3° PI - WB Assessoria"
                        description={
                            "O sistema WB Assessoria foi desenvolvido com Java 21, Spring Boot, Spring Security com JWT, MongoDB, HTML5, CSS3, " +
                            "JavaScript e Gradle. Permite cadastro de usuários, visualização de mensalidades e acompanhamento de " +
                            "processos migratórios, com envio automático de notificações por e-mail via Java Mail Sender. A arquitetura " +
                            "está organizada em dois repositórios, separando o back-end do front-end."
                        }
                        links={[
                            { text: "Ir para o repositório - back-end WB", link: openLinkPI3Backend() },
                            { text: "Ir para o repositório - front-end WB", link: openLinkPI3Frontend() },
                        ]}
                    />
                    <CarouselCard
                        data={pi4Images}
                        title="4° PI - Mistergold"
                        description={
                            "O projeto Mister Gold é um e-commerce com back-end em Java 21 e Spring Boot, utilizando " +
                            "Spring Security com JWT e arquitetura hexagonal. O front-end, feito em HTML5, CSS3 e JavaScript, é dividido em duas " +
                            "partes: uma voltada para o administrador e outra para o cliente."
                        }
                        links={[
                            { text: "Ir para o repositório - back-end Mistergold", link: openLinkPI4Backend() },
                            { text: "Ir para o repositório - front-end adm  Mistergold", link: openLinkPI4FrontendAdm() },
                            { text: "Ir para o repositório - front-end customer Mistergold", link: openLinkPI4FrontendClient() },
                        ]}
                    />
                    <CarouselCard
                        data={pi5Images}
                        title="5° PI - Bemtevi"
                        description={
                            "O projeto Bemtevi é um sistema de automação para pet shops, com back-end em Spring Boot integrado " +
                            "a PostgreSQL, MongoDB e serviços como Mercado Pago. O front-end, construido em React Native e focado em Android, permite que " +
                            "administradores gerenciem produtos, pedidos e serviços, e que clientes façam compras, contratem serviços " +
                            "e utilizem o chat feito com WebSocket. O sistema foi hospedado na AWS e utiliza arquivos Docker."
                        }
                        links={[
                            { text: "Ir para o repositório - back-end Bemtevi", link: openLinkPI5Backend() },
                            { text: "Ir para o repositório - front-end adm Bemtevi", link: openLinkPI5FrontendAdm() },
                            { text: "Ir para o repositório - front-end customer Bemtevi", link: openLinkPI5FrontendClient() },
                        ]}
                    />
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

