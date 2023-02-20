export interface Project {
    img: string;
    title: string;
    url: string;
    what?: string;
    how?: string;
    challenges?: string;
}

export const PROJECTS: Project[] = [
    {
        img: 'vizia',
        title: 'vizia',
        url: 'https://github.com/vizia-fydp',
    },
    {
        img: 'keyboards',
        title: 'keyboards',
        url: 'https://github.com/connorbarkr/keyboards',
    },
    {
        img: 'portfolio',
        title: 'portfolio',
        url: 'https://github.com/connorbarkr/portfolio',
    },
    {
        img: 'ascii',
        title: 'asciify',
        url: 'https://github.com/connorbarkr/ASCIIfy',
    },
    {
        img: 'amsat',
        title: 'amsat',
        url: 'https://github.com/connorbarkr/AMSAT',
    },
    {
        img: 'tnsi',
        title: 't.n.s.i.',
        url: 'https://github.com/connorbarkr/totallynotspaceinvaders',
    },
];
