import {
    createStyles,
    Header,
    Autocomplete,
    Group,
    Burger,
    rem,
    ActionIcon,
    useMantineColorScheme,
    Image,
    Text,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconMoonStars, IconSearch, IconSun } from '@tabler/icons-react';
import * as React from 'react';
import Logo from './img/demoLogo.png';

const useStyles = createStyles((theme) => ({
    header: {
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
    },

    inner: {
        height: rem(56),
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '97%',
    },

    links: {
        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },

    search: {
        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
    },
}));

interface HeaderSearchProps {
    links: { link: string; label: string }[];
}

export function HeaderSearch({ links }: HeaderSearchProps) {
    const searchParams = new URLSearchParams(document.location.search);
    const broken = searchParams.get('version');

    const [opened, { toggle }] = useDisclosure(false);
    const { classes } = useStyles();

    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const items = links.map((link) => (
        <a
            key={link.label}
            href={link.link}
            className={classes.link}
            onClick={(event) => event.preventDefault()}
        >
            {link.label}
        </a>
    ));

    return (
        <Header height={56} className={classes.header} mb={120}>
            <Group position="apart">
                <div className={classes.inner}>
                    <Group spacing={'xs'}>
                        <Burger opened={opened} onClick={toggle} size="sm" />
                        <Image maw={40} mx="auto" m={4} radius="md" src={Logo} alt="Logo" />
                        <Text size={32} title="Syngrisi Demo Company">Syngrisi Demo Site</Text>

                    </Group>

                    <Group>
                        <Group ml={50} spacing={5} className={classes.links}>
                            {items}
                        </Group>
                        <Autocomplete
                            className={classes.search}
                            placeholder="Search"
                            icon={<IconSearch size="1rem" stroke={1.5} />}
                            data={['React', 'Angular', 'Vue', 'Next.js', 'Riot.js', 'Svelte', 'Blitz.js']}
                        />
                    </Group>

                </div>
                <Group>
                    <ActionIcon
                        id="theme"
                        className={classes.search}
                        variant="outline"
                        color={dark ? 'yellow' : 'blue'}
                        onClick={() => {
                            if (broken === '3') return;
                            toggleColorScheme();
                        }}
                        title="Toggle color scheme"
                    >
                        {dark ? <IconSun size="1.1rem" /> : <IconMoonStars size="1.1rem" />}
                    </ActionIcon>
                </Group>
            </Group>
        </Header>
    );
}
