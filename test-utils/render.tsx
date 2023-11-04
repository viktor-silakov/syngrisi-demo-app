import { render as testingLibraryRender } from '@testing-library/react';
import { ThemeProvider } from '../src/ThemeProvider';

export function render(children: React.ReactNode) {
    const { rerender, ...others } = testingLibraryRender(<ThemeProvider colorScheme="light">{children}</ThemeProvider>);
    return {
        rerender: (ui: React.ReactElement<any, string | React.JSXElementConstructor<any>>) =>
            rerender(<ThemeProvider colorScheme="light">{ui}</ThemeProvider>),
        ...others,
    };
}
