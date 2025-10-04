import { ReactNode, useRef } from "react";
import { Animated, Pressable } from "react-native";

type resizableProps = {
    children: ReactNode
}

export const ResizableComp = ({ children }: resizableProps) => {
    const scale = useRef(new Animated.Value(1)).current;

    const animateTo = (value: number) => {
        Animated.spring(scale, {
            toValue: value,
            useNativeDriver: true,
        }).start();
    };

    return (
        <Pressable
            onHoverIn={() => animateTo(1.05)}
            onHoverOut={() => animateTo(1)}
        >
            <Animated.View style={{ transform: [{ scale }] }}>
                {children}
            </Animated.View>
        </Pressable>
    )
}