import { forwardRef, useCallback, useEffect, useMemo, useState } from 'react';

import '../style/projects.scss';
import '../style/content.scss';
import '../style/_variables.scss';

import type { Project } from '../utils/projectList';
import { PROJECTS } from '../utils/projectList';
import { mobileWidth } from '../utils/constants';

const Projects = forwardRef<HTMLDivElement>((_props, ref) => {
    const [width, setWidth] = useState(window.innerWidth);

    const mobile = useMemo(() => width < mobileWidth.lg, [width]);
    const handleResize = useCallback(() => setWidth(window.innerWidth), []);

    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [handleResize]);

    const projectGrid = useMemo(() => {
        const grid: Project[][] = [[]];
        const maxLen = mobile ? 2 : 3;

        PROJECTS.forEach((project) => {
            let curr = grid[grid.length - 1];
            if (curr.length === maxLen) {
                grid.push([]);
                curr = grid[grid.length - 1];
            }
            curr.push(project);
        });

        return (
            <div className="d-flex flex-column projects">
                {grid.map((projects, i) => (
                    <div
                        className="d-flex flex-row align-items-center justify-content-center"
                        key={`project_row_${i}`}
                    >
                        {projects.map((project) => {
                            return (
                                <a
                                    href={project.url}
                                    key={project.title}
                                    className="d-flex flex-column align-items-center project"
                                >
                                    <img
                                        src={`../assets/projects/${project.img}.svg`}
                                        alt={project.img}
                                    />
                                    <h3>{project.title}</h3>
                                </a>
                            );
                        })}
                    </div>
                ))}
            </div>
        );
    }, [mobile]);

    return (
        <div
            ref={ref}
            className="d-flex content align-items-center min-height-inner"
        >
            <div className="d-flex justify-content-center flex-column content-left">
                <h1 className="d-flex flex-column">
                    <span>{'some of'}</span>
                    <span>{'my projects'}</span>
                </h1>
            </div>
            <div className="d-flex align-items-center flex-column content-right">
                {projectGrid}
                {mobile ? (
                    <p className="mobile-project-label">
                        {'tap on one to learn more about it'}
                    </p>
                ) : (
                    <p className="desktop-project-label">
                        {'click on one to learn more about it'}
                    </p>
                )}
            </div>
        </div>
    );
});

Projects.displayName = 'Projects';

export default Projects;
