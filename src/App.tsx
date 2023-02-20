import Header from './components/Header';
import Landing from './components/Landing';
import About from './components/About';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import Contact from './components/Contact';

import './style/app.scss';
import { BrowserRouter } from 'react-router-dom';
import { HashScroll } from 'react-hash-scroll';

const App = () => {
    return (
        <BrowserRouter>
            <Header />
            <Landing />
            <HashScroll hash="#about" position="center">
                <About />
            </HashScroll>
            <HashScroll hash="#experience" position="center">
                <Experiences />
            </HashScroll>
            <HashScroll hash="#projects" position="center">
                <Projects />
            </HashScroll>
            <HashScroll hash="#contact" position="end">
                <Contact />
            </HashScroll>
        </BrowserRouter>
    );
};

export default App;
