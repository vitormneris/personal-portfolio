import React, { createContext, ReactNode } from 'react';
import { useFonts } from 'expo-font';

export const FontContext = createContext(false);

type Props = {
    children: ReactNode;
};

export default function FontProvider({ children }: Props) {
    const [fontsLoaded] = useFonts({
        'Montserrat': require('../../assets/fonts/Montserrat-VariableFont_wght.ttf'),
        'Montserrat-Italic': require('../../assets/fonts/Montserrat-Italic-VariableFont_wght.ttf')
    });

    if (!fontsLoaded) return null;

    return (
        <FontContext.Provider value={true}>
            {children}
        </FontContext.Provider>
    )
}