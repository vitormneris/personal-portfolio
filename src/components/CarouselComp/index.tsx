import * as React from "react";
import { Dimensions, Image, Text, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel, {
    ICarouselInstance,
    Pagination,
} from "react-native-reanimated-carousel";

const data = [
    require("../../assets/images/techs/java-coffee.png"),
    require("../../assets/images/techs/spring-boot-2.png"),
    require("../../assets/images/techs/spring-data.webp"),
    require("../../assets/images/techs/spring-security-2.png"),
    require("../../assets/images/techs/jwt.png")
];
const width = Dimensions.get("window").width;

export const CarouselComp = () => {
    const ref = React.useRef<ICarouselInstance>(null);
    const progress = useSharedValue<number>(0);

    const onPressPagination = (index: number) => {
        ref.current?.scrollTo({
            count: index - progress.value,
            animated: true,
        });
    };

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Carousel
                ref={ref}
                width={width / 2}
                height={width / 4}
                data={data}
                onProgressChange={progress}
                renderItem={({ index, item }) => (
                    <View
                        style={{
                            flex: 1,
                            borderWidth: 1,
                            justifyContent: "center",
                            margin: 20
                        }}
                    >
                        <Image source={item} style={{flex: 1, alignItems: 'center'}} />
                        <View style={{ borderWidth: 1 }}>
                            <Text>Titulo</Text>
                            <Text>Informação 1</Text>
                            <Text>Informação 2</Text>
                            <Text>Link 1</Text>
                            <Text>lInk 2</Text>
                        </View>
                    </View>
                )}
            />

            <Pagination.Basic
                progress={progress}
                data={data}
                dotStyle={{ backgroundColor: "rgba(0,0,0,0.2)", borderRadius: 50 }}
                containerStyle={{ gap: 5, marginTop: 10 }}
                onPress={onPressPagination}
            />
        </View>
    );
}
