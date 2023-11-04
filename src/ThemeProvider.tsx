import { MantineProvider, MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
    colorScheme: 'dark',
};

interface ThemeProviderProps {
    children: React.ReactNode,
    colorScheme: any
}

export function ThemeProvider({ children, colorScheme }: ThemeProviderProps) {
    return (
        <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
            {children}
        </MantineProvider>
    );
}
