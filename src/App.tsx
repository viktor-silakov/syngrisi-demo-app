import { useState } from 'react';
import { ColorScheme, ColorSchemeProvider, } from '@mantine/core';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { ThemeProvider } from './ThemeProvider';
import { Lorem } from './Lorem';
import { ProgressBar } from './ProgressBar';
// import { MantineColorScheme, Colo } from '@mantine/core';

export default function App() {
    const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
    const toggleColorScheme = (value?: ColorScheme) =>
        setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

    return (
        <BrowserRouter basename={import.meta.env.VITE_BASE_PATH || "/syngrisi-demo-app/"}>
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <ThemeProvider colorScheme={colorScheme}>
                    <Routes>
                        <Route path="/" element={<Layout />} />
                        <Route path="/About" element={<Lorem />} />
                        <Route path="/Clients" element={<ProgressBar />} />
                    </Routes>
                    {/*<Layout />*/}
                </ThemeProvider>
            </ColorSchemeProvider>
        </BrowserRouter>

    );
}
