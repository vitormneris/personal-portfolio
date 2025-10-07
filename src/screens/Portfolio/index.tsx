import { View, Text, Image, ScrollView, ImageSourcePropType } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

import { NavbarComp } from "../../components/NavbarComp";
import { ScaleOnHoverComp } from "../../components/ScaleOnHoverComp";
import { CarouselComp } from "../../components/CarouselComp";
import { TitleComp } from "../../components/TitleComp";
import { FooterComp } from "../../components/FooterComp";

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
    PortfolioModelView
} from "../../modelview/PortfolioModelView";

import { styles } from "./style";

export default function Portfolio() {
    const {
        scrollViewRef,
        targetHome,
        targetAboutMe,
        targetTechs,
        targetProjects,
        scrollToSection
    } = PortfolioModelView();

    return (
        <View style={styles.container}>
            <NavbarComp targets={[targetHome, targetAboutMe, targetTechs, targetProjects]} scrollToSection={scrollToSection} />
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={styles.scroll_view}
                ref={scrollViewRef}
            >
                <LinearGradient
                    colors={['#b3a9ffff', '#ffffffff']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <View ref={targetHome} style={styles.container_home}>
                        <ScaleOnHoverComp>
                            <View style={styles.image}>
                                <Image source={require("../../assets/images/my-photo.jpeg")} style={styles.image} />
                            </View>
                        </ScaleOnHoverComp>
                        <View style={styles.container_text}>
                            <Text style={styles.text_first_part}>
                                Olá, meu nome é
                            </Text>
                            <Text style={styles.text_second_part}>
                                João Vítor
                            </Text>
                            <Text style={styles.text_third_part}>
                                Desenvolvedor Fullstack, com experiência em Java, Spring Boot, React Native, além
                                de integração com bancos de dados relacionais e não-relacionais. Apaixonado
                                por criar soluções eficientes e aprender novas tecnologias constantemente.
                            </Text>
                            <View style={styles.container_contact}>
                                <ScaleOnHoverComp isPressable={true} onPress={openLinkGitHub}>
                                    <Image source={require("../../assets/images/social-networks/github.png")} style={styles.icon_contact} />
                                </ScaleOnHoverComp>
                                <ScaleOnHoverComp isPressable={true} onPress={openLinkLinkedin}>
                                    <Image source={require("../../assets/images/social-networks/linkedin.png")} style={styles.icon_contact} />
                                </ScaleOnHoverComp>
                            </View>
                        </View>
                    </View>
                </LinearGradient>


                <View ref={targetAboutMe} style={styles.container_who_iam}>

                    <TitleComp text="Sobre mim" />
                    <Text style={styles.paragraph}>
                        Olá! Meu nome é João Vítor Moreira, tenho 23 anos e sou desenvolvedor web fullstack. Atualmente, estou no 6º período
                        do curso de Desenvolvimento de Software Multiplataforma na FATEC Itaquera.
                    </Text>
                    <Text style={styles.paragraph}>
                        Tenho sólida experiência na construção de aplicações RESTful utilizando Java, Spring Boot, MongoDB, MySQL e Docker,
                        aplicando boas práticas de arquitetura, como a Arquitetura Hexagonal.
                    </Text>
                    <Text style={styles.paragraph}>
                        Atuei como freelancer em uma plataforma de cursos, sendo responsável pelo desenvolvimento do backend, utilização de
                        serviços como Firebase Storage e FFMPEG para upload e processamento de vídeos. Sempre que necessário, eu entrava em
                        contato com a equipe de frontend para orientá-los na integração das partes do projeto.
                    </Text>
                    <Text style={styles.paragraph}>
                        Além de backend, possuo experiência em desenvolvimento Android em Java e React Native, já desenvolvi projetos em Android
                        com conexão com servidor. Tenho conhecimentos em C, Python, PHP, HTML, CSS, JavaScript e TypeScript, o que me permite
                        atuar de forma versátil em diferentes camadas do desenvolvimento de software.
                    </Text>
                    <Text style={styles.paragraph}>
                        Recentemente, tenho explorado hospedagem e deployment na nuvem, com foco na AWS, utilizando serviços gratuitos como o EC2
                        para hospedar sistemas de e-commerce e APIs RESTful integradas a aplicativos Android. Além disso, tenho experiência no uso
                        de serviços como o S3 para armazenamento e hospedagem de arquivos.
                    </Text>
                    <Text style={styles.paragraph}>
                        Sou entusiasta de Linux desde os 16 anos, com experiência em distribuições como Ubuntu, Debian, Fedora Workstation,
                        Fedora Silverblue, Arch Linux e NixOS. Tenho afinidade com o terminal e criação de shell scripts, habilidades que
                        complementam meu trabalho com Docker e serviços de nuvem.
                    </Text>
                </View>

                <LinearGradient
                    colors={['#ffffffff', '#b3a9ffff']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 1 }}
                >
                    <View ref={targetTechs} style={styles.container_my_skills}>
                        <TitleComp text="Experiência nestas tecnologias" />
                        <View style={styles.container_skills}>
                            <IconView require={require("../../assets/images/techs/python.png")} />
                            <IconView require={require("../../assets/images/techs/typescript.png")} />
                            <IconView require={require("../../assets/images/techs/react-native.png")} />
                            <IconView require={require("../../assets/images/techs/java-coffee.png")} />
                            <IconView require={require("../../assets/images/techs/spring-boot-2.png")} />
                            <IconView require={require("../../assets/images/techs/spring-data.webp")} />
                            <IconView require={require("../../assets/images/techs/spring-security-2.png")} />
                            <IconView require={require("../../assets/images/techs/jwt.png")} />
                            <IconView require={require("../../assets/images/techs/mysql.png")} />
                            <IconView require={require("../../assets/images/techs/mongodb.png")} />
                            <IconView require={require("../../assets/images/techs/postgresql.png")} />
                            <IconView require={require("../../assets/images/techs/figma.png")} />
                            <IconView require={require("../../assets/images/techs/html.png")} />
                            <IconView require={require("../../assets/images/techs/css.svg")} />
                            <IconView require={require("../../assets/images/techs/javascript.png")} />
                            <IconView require={require("../../assets/images/techs/docker.png")} />
                            <IconView require={require("../../assets/images/techs/amazon_s3.webp")} />
                            <IconView require={require("../../assets/images/techs/amazon_ec2.webp")} />
                            <IconView require={require("../../assets/images/techs/redhat.webp")} />
                            <IconView require={require("../../assets/images/techs/ubuntu.png")} />
                            <IconView require={require("../../assets/images/techs/mercado-pago.png")} />
                            <IconView require={require("../../assets/images/techs/jira.svg")} />
                            <IconView require={require("../../assets/images/techs/gradle.png")} />
                            <IconView require={require("../../assets/images/techs/git.png")} />
                        </View>
                    </View>
                </LinearGradient>

                <View ref={targetProjects} style={styles.container_my_interdisciplinary_project}>
                    <TitleComp text="Meus projetos interdisciplinares" />
                    <View style={styles.container_carousel}>
                        <CarouselComp
                            data={pi1Images}
                            title="1° PI - Debian redesign"
                            description={
                                "Projeto de redesign da página inicial do site debian.org, site responsivo de página estática, " +
                                "utilizando apenas HTML5, CSS3 e JavaScript para reforçar fundamentos web. Inclui layout responsivo, " +
                                "estrutura semântica e interatividade básica."
                            }
                            links={[{ text: "Ir para o repositório - Debian redesign", action: openLinkPI1 }]}
                        />
                        <CarouselComp
                            data={pi2Images}
                            title="2° PI - Simple CRUD PHP"
                            description={
                                "Projeto CRUD simples desenvolvido sob orientação do professor Faustino, permitindo " +
                                "criar, ler, atualizar e excluir registros de Usuários e Produtos. Construído com HTML5, " +
                                "CSS3, JavaScript, PHP e SQLite, proporciona prática em integração frontend-backend e " +
                                "persistência de dados. Possui integração com ViaCEP e recursos de mapa."
                            }
                            links={[{ text: "Ir para o repositório - Simple CRUD PHP", action: openLinkPI2 }]}
                        />
                        <CarouselComp
                            data={pi3Images}
                            title="3° PI - WB Assessoria"
                            description={
                               "O sistema WB Assessoria foi desenvolvido com Java 21, Spring Boot, Spring Security com JWT, MongoDB, HTML5, CSS3, " +
                               "JavaScript e Gradle. Permite cadastro de usuários, visualização de mensalidades e acompanhamento de " + 
                               "processos migratórios, com envio automático de notificações por e-mail via Java Mail Sender. A arquitetura " + 
                               "está organizada em dois repositórios, separando o back-end do front-end."
                            }
                            links={[
                                { text: "Ir para o repositório - back-end WB", action: openLinkPI3Backend },
                                { text: "Ir para o repositório - front-end WB", action: openLinkPI3Frontend },
                            ]}
                        />
                        <CarouselComp
                            data={pi4Images}
                            title="4° PI - Mistergold"
                            description={
                                "O projeto Mister Gold é um e-commerce com back-end em Java 21 e Spring Boot, utilizando " +
                                "Spring Security com JWT e arquitetura hexagonal. O front-end, feito em HTML5, CSS3 e JavaScript, é dividido em duas " +
                                "partes: uma voltada para o administrador e outra para o cliente."
                            }
                            links={[
                                { text: "Ir para o repositório - back-end Mistergold", action: openLinkPI4Backend },
                                { text: "Ir para o repositório - front-end adm  Mistergold", action: openLinkPI4FrontendAdm },
                                { text: "Ir para o repositório - front-end customer Mistergold", action: openLinkPI4FrontendClient },
                            ]}
                        />
                        <CarouselComp
                            data={pi5Images}
                            title="5° PI - Bemtevi"
                            description={
                                "O projeto Bemtevi é um sistema de automação para pet shops, com back-end em Spring Boot integrado " +
                                "a PostgreSQL, MongoDB e serviços como Mercado Pago. O front-end, construido em React Native e focado em Android, permite que " +
                                "administradores gerenciem produtos, pedidos e serviços, e que clientes façam compras, contratem serviços " +
                                "e utilizem o chat feito com WebSocket. O sistema foi hospedado na AWS e utiliza arquivos Docker."
                            }
                            links={[
                                { text: "Ir para o repositório - back-end Bemtevi", action: openLinkPI5Backend },
                                { text: "Ir para o repositório - front-end adm Bemtevi", action: openLinkPI5FrontendAdm },
                                { text: "Ir para o repositório - front-end customer Bemtevi", action: openLinkPI5FrontendClient },
                            ]}
                        />
                    </View>
                </View>
                <FooterComp />
            </ScrollView>
        </View>
    );
}

type IconViewProps = {
    require: ImageSourcePropType
}

const IconView = ({ require }: IconViewProps) => {
    return (
        <ScaleOnHoverComp highZoom={true}>
            <Image source={require} style={styles.icon_tech} />
        </ScaleOnHoverComp>
    )
}

