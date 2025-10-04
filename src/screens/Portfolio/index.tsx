import { View, Text, Image, ScrollView, ImageSourcePropType } from "react-native";

import { NavbarComp } from "../../components/NavbarComp";
import { ScaleOnHoverComp } from "../../components/ScaleOnHoverComp";
import { CarouselComp } from "../../components/CarouselComp";
import { TitleComp } from "../../components/TitleComp";
import { FooterComp } from "../../components/FooterComp";

import { styles } from "./style";

const data = [
    require("../../assets/images/techs/java-coffee.png"),
    require("../../assets/images/techs/spring-boot-2.png"),
    require("../../assets/images/techs/spring-data.webp"),
    require("../../assets/images/techs/spring-security-2.png"),
    require("../../assets/images/techs/jwt.png")
];

export default function Portfolio() {

    return (
        <View style={styles.container}>
            <NavbarComp />
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={styles.scroll_view}
            >
                <View style={styles.container_home}>
                    <ScaleOnHoverComp>
                        <View style={styles.image}>
                            <Image source={require("../../assets/images/my-photo.jpeg")} style={styles.image} />
                        </View>
                    </ScaleOnHoverComp>
                    <View style={styles.container_text}>
                        <Text style={{ color: '#f59061ff', fontSize: 70, fontFamily: 'Montserrat' }}>Olá, meu nome é</Text>
                        <Text style={{ color: '#6787f1ff', fontSize: 120, fontFamily: 'Montserrat', fontWeight: '500' }}>João Vítor</Text>
                        <Text style={{ width: 600, textAlign: 'justify', color: '#000000', fontSize: 20, fontFamily: 'Montserrat' }}>
                            Desenvolvedor Fullstack, com experiência em Java, Spring Boot, React Native, além de integração com bancos de dados relacionais e não-relacionais.
                            Apaixonado por criar soluções eficientes e aprender novas tecnologias constantemente.
                        </Text>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <ScaleOnHoverComp isPressable={true}>
                                <Image source={require("../../assets/images/social-networks/github.png")} style={styles.icon_contact} />
                            </ScaleOnHoverComp>
                            <ScaleOnHoverComp isPressable={true}>
                                <Image source={require("../../assets/images/social-networks/linkedin.png")} style={styles.icon_contact} />
                            </ScaleOnHoverComp>
                        </View>
                    </View>
                </View>

                <View style={styles.container_who_iam}>
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
                        Fedora Silverblue, Arch Linux e NixOS . Tenho afinidade com o terminal e criação de shell scripts, habilidades que
                        complementam meu trabalho com Docker e serviços de nuvem.
                    </Text>
                </View>

                <View style={styles.container_my_skills}>
                    <TitleComp text="Tecnologias que eu já utilizei" />
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

                <View style={styles.container_my_interdisciplinary_project}>
                    <TitleComp text="Meus projetos interdisciplinares" />
                    <View style={styles.container_carousel}>
                        <CarouselComp
                            data={data}
                            title="Projeto interdisciplinar - 1"
                            description={
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
                                "Deleniti possimus placeat iusto, laborum fuga autem vel ducimus corporis odio" +
                                "doloribus animi rem, quos impedit commodi officiis, nobis dolore minima dicta!"
                            }
                            links={["https://www.github.com/vitormneris/project1"]}
                        />
                        <CarouselComp
                            data={data}
                            title="Projeto interdisciplinar - 2"
                            description={
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
                                "Deleniti possimus placeat iusto, laborum fuga autem vel ducimus corporis odio" +
                                "doloribus animi rem, quos impedit commodi officiis, nobis dolore minima dicta!"
                            }
                            links={["https://www.github.com/vitormneris/project2"]}
                        />
                        <CarouselComp
                            data={data}
                            title="Projeto interdisciplinar - 3"
                            description={
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
                                "Deleniti possimus placeat iusto, laborum fuga autem vel ducimus corporis odio" +
                                "doloribus animi rem, quos impedit commodi officiis, nobis dolore minima dicta!"
                            }
                            links={[
                                "https://www.github.com/vitormneris/project3-1",
                                "https://www.github.com/vitormneris/project3-2"
                            ]}
                        />
                        <CarouselComp
                            data={data}
                            title="Projeto interdisciplinar - 4"
                            description={
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
                                "Deleniti possimus placeat iusto, laborum fuga autem vel ducimus corporis odio" +
                                "doloribus animi rem, quos impedit commodi officiis, nobis dolore minima dicta!"
                            }
                            links={[
                                "https://www.github.com/vitormneris/project4-1",
                                "https://www.github.com/vitormneris/project4-2",
                                "https://www.github.com/vitormneris/project4-3"
                            ]}
                        />
                        <CarouselComp
                            data={data}
                            title="Projeto interdisciplinar - 5"
                            description={
                                "Lorem ipsum dolor sit amet consectetur adipisicing elit." +
                                "Deleniti possimus placeat iusto, laborum fuga autem vel ducimus corporis odio" +
                                "doloribus animi rem, quos impedit commodi officiis, nobis dolore minima dicta!"
                            }
                            links={[
                                "https://www.github.com/vitormneris/project5-1",
                                "https://www.github.com/vitormneris/project5-2",
                                "https://www.github.com/vitormneris/project5-3"
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

