import * as React from "react";
import { Dimensions, Image, ImageSourcePropType, Pressable, Text, TouchableOpacity, View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import { Octicons } from '@expo/vector-icons';
import Carousel, {
    ICarouselInstance,
    Pagination,
} from "react-native-reanimated-carousel";


import { ScaleOnHoverComp } from "../ScaleOnHoverComp";

import { styles } from "./style";


const width = Dimensions.get("window").width;

type CarouselCompProps = {
    data: ImageSourcePropType[],
    title: string,
    description: string,
    links: Link[]
}

export type Link = {
    text: string,
    action: () => void
}

export const CarouselComp = ({ data, title, description, links }: CarouselCompProps) => {
    const ref = React.useRef<ICarouselInstance>(null);
    const progress = useSharedValue<number>(0);

    const onPressPagination = (index: number) => {
        ref.current?.scrollTo({
            count: index - progress.value,
            animated: true,
        });
    };

    return (
        <View style={styles.container}>
            <Carousel
                ref={ref}
                width={width / 3}
                height={width / 5}
                data={data}
                onProgressChange={progress}
                renderItem={({ index, item }) => (
                    <View style={styles.container_image}>
                        <ScaleOnHoverComp>
                            <Image source={item} style={styles.image} resizeMode="contain" />
                        </ScaleOnHoverComp>
                    </View>
                )}
            />

            <Pagination.Basic
                progress={progress}
                data={data}
                dotStyle={styles.pagination_dot}
                containerStyle={styles.pagination_container}
                onPress={onPressPagination}
            />

            <View style={styles.container_info}>
                <Text style={styles.info_title}>{title}</Text>
                <Text style={styles.info_description}> {description}</Text>

                {links.map(({ text, action }: Link) => (
                    <ScaleOnHoverComp isPressable={true}>
                        <Text style={styles.info_link} onPress={action}>
                            <Octicons name="dot-fill" size={12} color="#000" /> {text}
                        </Text>
                    </ScaleOnHoverComp>
                ))}
            </View>
        </View>
    );
}
