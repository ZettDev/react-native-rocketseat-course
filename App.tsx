import React from 'react';
import {ThemeProvider} from 'styled-components';
import { useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'

import theme from './src/theme';

import {Loading} from "@components/Loading";

import {NewGroup} from "@screens/NewGroup";

export default function App() {
    const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});

    return (
        <ThemeProvider theme={theme}>
            {fontsLoaded ? <NewGroup/> : <Loading/>}
        </ThemeProvider>
    );
}