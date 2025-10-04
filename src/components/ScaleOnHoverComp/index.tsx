import { ReactNode, useRef } from "react";
import { Animated, Pressable } from "react-native";

type ScaleOnHoverProps = {
    children: ReactNode,
    isPressable?: boolean,
    highZoom?: boolean
}

export const ScaleOnHoverComp = ({ children, isPressable=false, highZoom=false }: ScaleOnHoverProps) => {
    const scale = useRef(new Animated.Value(1)).current;

    const animateTo = (value: number) => {
        Animated.spring(scale, {
            toValue: value,
            useNativeDriver: true,
        }).start();
    };

    let animateValue = 0.05
    if (highZoom) animateValue = 0.1

    let onPressInValue = () => {}
    let onPressOutValue = () => {}
    if (isPressable) {
        onPressInValue = () => animateTo(0.95)
        onPressOutValue = () => animateTo(1)
    }

    return (
        <Pressable
            onHoverIn={() => animateTo(1 + animateValue)}
            onHoverOut={() => animateTo(1)}
            onPressIn={onPressInValue}
            onPressOut={onPressOutValue}
        >
            <Animated.View style={{ transform: [{ scale }] }}>
                {children}
            </Animated.View>
        </Pressable>
    )
}