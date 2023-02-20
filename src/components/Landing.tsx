import { useCallback, useEffect, useState } from 'react';

import '../style/landing.scss';
import '../style/content.scss';
import '../style/_variables.scss';

import downArrow from '../assets/icons/down-arrow.svg';

const Landing = () => {
    const [landingScrollStyle, setLandingScrollStyle] = useState('');

    const handleScroll = useCallback(() => {
        if (window.scrollY > 0) {
            setLandingScrollStyle('landing-scrolled');
        } else {
            setLandingScrollStyle('');
        }
    }, []);

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <div className={`d-flex landing height-inner ${landingScrollStyle}`}>
            <div className="d-flex justify-content-center flex-column landing-left">
                <h1 className="d-flex flex-column">
                    <span>{'hello,'}</span>
                    <span>{"i'm connor."}</span>
                </h1>
            </div>
            <div className="d-flex justify-content-center flex-column landing-right">
                <h3 className="d-flex flex-column">
                    <span>{'i write code, build tools,'}</span>
                    <span>{'and create unique projects.'}</span>
                </h3>
            </div>
            <div className="d-flex justify-content-center landing-cta">
                <a
                    href="/#about"
                    className="d-flex flex-column align-items-center"
                >
                    <p>{'more about me'}</p>
                    <img src={downArrow} alt="down arrow" />
                </a>
            </div>
        </div>
    );
};

export default Landing;
