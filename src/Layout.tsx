/* eslint-disable react/jsx-indent-props */
import { AppShell } from '@mantine/core';
import { Graph } from './Graph/Graph';
import { HeaderSearch } from './HeaderSearch';
import { DoubleNavbar } from './DoubleNavbar';
import { FooterLinks } from './FooterLinks';

export function Layout() {
    return (
        <>
            <AppShell
                padding="md"
                navbar={<DoubleNavbar />}
                header={<HeaderSearch
                    links={
                        [
                            { link: '/', label: 'Home' },
                            { link: '/', label: 'Admin' },
                        ]
                    }
                />
                }
                styles={(theme) => ({
                    main: { backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0] },
                })}
            >
                <Graph />
            </AppShell>
            <FooterLinks />
        </>
    );
}
