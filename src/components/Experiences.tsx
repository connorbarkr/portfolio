import '../style/experiences.scss';
import '../style/content.scss';
import '../style/_variables.scss';

import ExperienceCarousel from './ExperienceCarousel';
import { forwardRef } from 'react';

const Experiences = forwardRef<HTMLDivElement>((_props, ref) => {
    return (
        <div
            ref={ref}
            className="d-flex content align-items-center min-height-inner"
        >
            <div className="d-flex justify-content-center flex-column content-left">
                <h1 className="d-flex flex-column">
                    <span>{'where'}</span>
                    <span>{"i've worked"}</span>
                </h1>
            </div>
            <div className="d-flex justify-content-center align-items-center content-right">
                <ExperienceCarousel />
            </div>
        </div>
    );
});

Experiences.displayName = 'Experiences';

export default Experiences;
