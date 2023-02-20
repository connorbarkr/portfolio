export interface Experience {
    name: string;
    title: string;
    dates: string;
    p1: string;
    p2?: string;
    p3?: string;
}

export const EXPERIENCES: Experience[] = [
    {
        name: 'Splunk',
        title: 'software engineer',
        dates: 'august 2022 - february 2023',
        p1: 'After graduation, I began working at Splunk as a full-time software engineer on the Unified Dashboard Framework team. I collaborated with skilled engineers to enable high-volume data visualization.',
        p2: 'I worked to centralize the application state in the Redux store, convert large amounts of JS to TypeScript and upgrading unit tests from Enzyme to React Testing Library as we prepared to uptake React 18. I also collaborated closely with the UI/UX team, providing engineering insight into design decisions.',
        p3: 'One of the largest challenges I faced during this experience was honing my Webpack skills; I was unfamiliar with the technology before starting, and was tasked with resolving several critical issues.',
    },
    {
        name: 'Splunk',
        title: 'software engineer',
        dates: 'september - december 2021',
        p1: "I chose Splunk for my final co-op experience, where I worked on the Unified Dashboard Framework team to create features for Splunk's online suite of dashboard creation tools using TypeScript and React.",
        p2: "During this internship, I worked on a variety of projects, including overseeing an internal documentation refactor, where I rewrote over 30% of the example code. I also led the development of a new React application that allowed users to view open-source code examples from Splunk's UI Toolkit.",
        p3: 'I was also pleased to have the opportunity to further pursue my passion for accessible web practices, and gave several presentations to over 500 employees on accessibility-first design in tech.',
    },
    {
        name: 'Konrad Group',
        title: 'fullstack developer',
        dates: 'september - december 2020',
        p1: 'This was my third internship with the Konrad Group, during which I worked as the lead developer on an internal project. Recently, as the company has grown, the number of employees has exceeded the capacity of many of the systems they have in place.',
        p2: 'As a result, an update of a number of internal tools has been required to handle the increased load. I was assigned to redesign the timesheet tracker website that employees use to log their billable hours.',
        p3: 'I was able to decrease the loading times of the website by roughly 8-10x, by refactoring the SQL database by adding foreign constraints and new indices to reduce search time, and switching the API over to GraphQL.',
    },
    {
        name: 'Zynga',
        title: 'mobile developer',
        dates: 'january - april 2020',
        p1: 'My 5th co-op experience was as a software engineer for mobile games company Zynga. Over the course of this internship, I further developed my software skills as an iOS developer working in both Objective-C and Swift.',
        p2: 'My responsibilities at Zynga primarily focused on developing new features for the app Boggle. I carried out standard bug-fixing tasks and minor updates, as well as a larger-scale project that involved redesigning a central screen to better support upcoming features.',
        p3: 'Many of the challenges I faced during this co-op involved the stack, which was written primarily in Obj-C (with which I was unfamiliar) and included a fair amount of legacy code. A common difficulty was getting modern Swift code to work well with older parts of the stack.',
    },
    {
        name: 'Konrad Group',
        title: 'machine learning developer',
        dates: 'may - august 2019',
        p1: 'This was my second time working for the Konrad Group. During my four months with them, I worked as an iOS and machine learning developer, working primarily with Swift and Python to develop an ML-based iOS app.',
        p2: "I started my internship by training convolutional neural networks and regression models to accomplish tasks like predicting house prices or diabetes diagnoses. I then designed and wrote Python scripts to convert Keras neural networks to Apple's .mlmodel format.",
        p3: "I used these models, along with the new Core ML 3 beta, to design and develop an iOS 13 app which allows a user to draw digits and then predict which number they wrote. The app also features on-device retraining, personalizing it to a user's handwriting.",
    },
    {
        name: 'Konrad Group',
        title: 'web developer',
        dates: 'september - december 2018',
        p1: 'This was my first time working for the Konrad Group, a digital design and development firm which has built products for Spotify, MTV, McDonalds, and many more. I worked as a frontend web developer during my time on the team.',
        p2: 'I worked extensively with technologies such as React, NodeJS, Jest, and Enzyme to both construct and test components, features, and pages using the latest React practices, such as contexts and new lifecycle methods.',
        p3: 'Aside from constructing new components and features, I worked on cross-browser compatibility, responsive design, and extensive unit-testing using Jest and Enzyme.',
    },
    {
        name: 'Portal',
        title: 'fullstack developer',
        dates: 'january - april 2018',
        p1: 'During my time on the Portal developer team, I worked with a variety of environments, languages, and platforms. My responsibilities included building an analytics tracker from scratch.',
        p2: 'I also redesigned the CECA (UWaterloo’s center for Co-operative Education & Career Action) paging system, using JavaScript and HTML/CSS. This process included the creation of new functionality for the system, such as the ability to edit interview timeslots, message students, and more.',
        p3: 'I also attended weekly Agile SCRUM meetings, used Jira to track task completion, and participated in storyboarding meetings once every three-week sprint.',
    },
];
