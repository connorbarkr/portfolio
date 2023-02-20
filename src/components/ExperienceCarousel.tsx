import { useCallback, useMemo, useState } from 'react';

import '../style/content.scss';
import '../style/_variables.scss';
import arrow from '../assets/icons/down-arrow.svg';

import type { Experience } from '../utils/experienceList';
import { EXPERIENCES } from '../utils/experienceList';

const ExperienceCarousel = () => {
    const [expIndex, setExpIndex] = useState(0);

    const handleChangeExperience = useCallback(
        (direction: string) => {
            let newIndex = expIndex;

            switch (direction) {
                case 'next':
                    newIndex++;
                    if (newIndex === EXPERIENCES.length) {
                        newIndex = 0;
                    }
                    break;
                case 'prev':
                    newIndex--;
                    if (newIndex < 0) {
                        newIndex = EXPERIENCES.length - 1;
                    }
                default:
                    break;
            }
            setExpIndex(newIndex);
        },
        [expIndex]
    );

    const currentExperience = useMemo(() => {
        const experience: Experience = EXPERIENCES[expIndex];

        return (
            <div className="d-flex justify-content-center align-items-center flex-column experience">
                <h1>{experience.name}</h1>
                <h2>{`${experience.title} | ${experience.dates}`}</h2>
                <div className="d-flex flex-row align-items-center experience-content">
                    <img
                        src={arrow}
                        className="button-left clickable"
                        alt="left arrow"
                        onClick={() => handleChangeExperience('prev')}
                    />
                    <span className="experience-content__desktop">
                        <p>{experience.p1}</p>
                        <p>{experience.p2}</p>
                        <p>{experience.p3}</p>
                    </span>
                    <span className="experience-content__mobile">
                        <p>
                            {experience.p1} {experience.p2} {experience.p3}
                        </p>
                    </span>
                    <img
                        src={arrow}
                        className="button-right clickable"
                        alt="right arrow"
                        onClick={() => handleChangeExperience('next')}
                    />
                </div>
            </div>
        );
    }, [expIndex, handleChangeExperience]);

    return currentExperience;
};

export default ExperienceCarousel;
