import '../style/about.scss';
import '../style/content.scss';
import '../style/_variables.scss';
import profilePic from '../assets/images/website_profile.jpeg';

import { INTRO } from '../utils/constants';
import { forwardRef } from 'react';

const About = forwardRef<HTMLDivElement>((_props, ref) => {
    return (
        <div
            ref={ref}
            className="d-flex content align-items-center min-height-inner"
        >
            <div className="d-flex justify-content-center flex-column content-left">
                <h1 className="d-flex flex-column">
                    <span>{'a little'}</span>
                    <span>{'about me'}</span>
                </h1>
            </div>
            <div className="d-flex align-items-center flex-column content-right about">
                <img src={profilePic} alt="Profile photo" />
                <p>{INTRO}</p>
            </div>
        </div>
    );
});

About.displayName = 'About';
export default About;
