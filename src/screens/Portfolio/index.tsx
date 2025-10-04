import { View, Text, Image, ScrollView } from "react-native";

import { NavbarComp } from "../../components/NavbarComp";
import { ResizableComp } from "../../components/ResizableComp";
import { CarouselComp } from "../../components/CarouselComp";

import { styles } from "./style";

export default function Portfolio() {

    return (
        <View style={styles.container}>
            <NavbarComp />
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                style={styles.scroll_view}
            >
                <View style={styles.container_who_iam}>
                    <ResizableComp>
                        <Image source={require("../../assets/images/my-photo.jpeg")} style={styles.image} />
                    </ResizableComp>
                    <View style={{ display: 'flex', flexDirection: 'column', marginHorizontal: 80, justifyContent: 'center' }}>
                        <Text style={{ color: '#f59061ff', fontSize: 60, fontFamily: 'Montserrat' }}>Olá, meu nome é</Text>
                        <Text style={{ color: '#6787f1ff', fontSize: 120, fontFamily: 'Montserrat', fontWeight: '500' }}>João Vítor</Text>
                        <Text style={{ width: 600, textAlign: 'justify', color: '#311c12ff', fontSize: 20, fontFamily: 'Montserrat' }}>
                            Desenvolvedor Fullstack, com experiência em Java, Spring Boot, React Native, além de integração com bancos de dados relacionais e não-relacionais.
                            Apaixonado por criar soluções eficientes e aprender novas tecnologias constantemente.
                        </Text>
                    </View>
                    <View style={styles.container_my_skills}>

                    </View>
                </View>

                <View style={styles.container_my_skills}>
                    <Text style={{ fontSize: 40, fontFamily: 'Montserrat', fontWeight: '600', color: '#3e2801ff', margin: 40 }}>Minhas habilidades</Text>
                    <View style={styles.container_skills}>
                        <ResizableComp>
                            <Image source={require("../../assets/images/techs/python.png")} style={styles.icon_tech} />
                        </ResizableComp>
                        <ResizableComp>
                            <Image source={require("../../assets/images/techs/typescript.png")} style={styles.icon_tech} />
                        </ResizableComp>
                        <ResizableComp>
                            <Image source={require("../../assets/images/techs/react-native.png")} style={styles.icon_tech} />
                        </ResizableComp>
                        <ResizableComp>
                            <Image source={require("../../assets/images/techs/java-coffee.png")} style={styles.icon_tech} />
                        </ResizableComp>
                        <ResizableComp>
                            <Image source={require("../../assets/images/techs/spring-boot-2.png")} style={styles.icon_tech} />
                        </ResizableComp>
                        <ResizableComp>
                            <Image source={require("../../assets/images/techs/spring-data.webp")} style={styles.icon_tech} />
                        </ResizableComp>
                        <ResizableComp>
                            <Image source={require("../../assets/images/techs/spring-security-2.png")} style={styles.icon_tech} />
                        </ResizableComp>
                        <ResizableComp>
                            <Image source={require("../../assets/images/techs/jwt.png")} style={styles.icon_tech} />
                        </ResizableComp>
                        <ResizableComp>
                            <Image source={require("../../assets/images/techs/mysql.png")} style={styles.icon_tech} />
                        </ResizableComp>
                        <ResizableComp>
                            <Image source={require("../../assets/images/techs/mongodb.png")} style={styles.icon_tech} />
                        </ResizableComp>
                        <ResizableComp>
                            <Image source={require("../../assets/images/techs/postgresql.png")} style={styles.icon_tech} />
                        </ResizableComp>
                        <ResizableComp>
                            <Image source={require("../../assets/images/techs/figma.png")} style={styles.icon_tech} />
                        </ResizableComp>
                        <ResizableComp>
                            <Image source={require("../../assets/images/techs/html.png")} style={styles.icon_tech} />
                        </ResizableComp>
                        <ResizableComp>
                            <Image source={require("../../assets/images/techs/css.svg")} style={styles.icon_tech} />
                        </ResizableComp>
                        <ResizableComp>
                            <Image source={require("../../assets/images/techs/javascript.png")} style={styles.icon_tech} />
                        </ResizableComp>
                        <ResizableComp>
                            <Image source={require("../../assets/images/techs/docker.png")} style={styles.icon_tech} />
                        </ResizableComp>
                        <ResizableComp>
                            <Image source={require("../../assets/images/techs/amazon_s3.webp")} style={styles.icon_tech} />
                        </ResizableComp>
                        <ResizableComp>
                            <Image source={require("../../assets/images/techs/amazon_ec2.webp")} style={styles.icon_tech} />
                        </ResizableComp>
                        <ResizableComp>
                            <Image source={require("../../assets/images/techs/redhat.webp")} style={styles.icon_tech} />
                        </ResizableComp>
                        <ResizableComp>
                            <Image source={require("../../assets/images/techs/ubuntu.png")} style={styles.icon_tech} />
                        </ResizableComp>
                        <ResizableComp>
                            <Image source={require("../../assets/images/techs/mercado-pago.png")} style={styles.icon_tech} />
                        </ResizableComp>
                        <ResizableComp>
                            <Image source={require("../../assets/images/techs/jira.svg")} style={styles.icon_tech} />
                        </ResizableComp>
                        <ResizableComp>
                            <Image source={require("../../assets/images/techs/gradle.png")} style={styles.icon_tech} />
                        </ResizableComp>
                        <ResizableComp>
                            <Image source={require("../../assets/images/techs/git.png")} style={styles.icon_tech} />
                        </ResizableComp>
                    </View>
                </View>

                <View style={styles.container_my_interdisciplinary_project}>
                    <Text style={{ fontSize: 40, fontFamily: 'Montserrat', fontWeight: '600', color: '#3e2801ff', margin: 40 }}>Meus projetos interdisciplinares</Text>
                    <CarouselComp  />
                    <CarouselComp  />
                    <CarouselComp  />
                    <CarouselComp  />
                    <CarouselComp  />
                </View>
            </ScrollView>
        </View>
    );
}

