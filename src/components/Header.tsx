import { useCallback, useEffect, useState } from 'react';
import Sidebar from 'react-sidebar';

import github from '../assets/icons/github-logo.svg';
import linkedin from '../assets/icons/linkedin-logo.svg';
import menu from '../assets/icons/menu.svg';
import resume from '../assets/pdfs/web_resume.pdf';
import close from '../assets/icons/close.svg';

import SidebarContent from './SidebarContent';

import '../style/header.scss';
import '../style/content.scss';
import '../style/_variables.scss';

const sidebarStyle = {
    background: '#F4F5F6',
    position: 'fixed',
};

const Header = () => {
    const [open, setOpen] = useState(false);
    const [headerScrollStyle, setHeaderScrollStyle] = useState('');

    const handleScroll = useCallback(() => {
        const y = window.scrollY;
        const limit = Math.max(
            document.body.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.clientHeight,
            document.documentElement.scrollHeight,
            document.documentElement.offsetHeight
        );

        if (y > 0 && !(y >= limit - window.innerHeight)) {
            setHeaderScrollStyle('header-scrolled');
        } else if (y !== 0 && y >= limit - window.innerHeight) {
            setHeaderScrollStyle('header-bottom');
        } else {
            setHeaderScrollStyle('');
        }
    }, []);

    const toggleSidebar = useCallback(() => {
        setOpen(!open);
    }, [open]);

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <div>
            <Sidebar
                sidebar={<SidebarContent closeSidebar={() => setOpen(false)} />}
                open={open}
                onSetOpen={setOpen}
                touch={false}
                styles={{ sidebar: sidebarStyle }}
            >
                <div />
            </Sidebar>
            <div
                className={`d-flex justify-content-between header ${headerScrollStyle}`}
            >
                <div className="header-content__left">
                    <div className="d-flex justify-content-start align-items-center header-content__left-mobile">
                        {open ? (
                            <img
                                className="icon-sm"
                                src={close}
                                alt="close"
                                onClick={toggleSidebar}
                            />
                        ) : (
                            <img
                                className="icon-sm"
                                src={menu}
                                alt="menu"
                                onClick={toggleSidebar}
                            />
                        )}
                    </div>
                    <div className="d-flex align-items-center header-content__left-desktop">
                        <a href="/#about">{'about'}</a>
                        <a href="/#experience">{'experience'}</a>
                        <a href="/#projects">{'projects'}</a>
                        <a href={resume}>{'resume'}</a>
                    </div>
                </div>
                {headerScrollStyle === 'header-bottom' ? (
                    <div className="d-flex flex-row justify-content-end align-items-center header-content__right-alt">
                        <a href="https://github.com/connorbarkr">
                            <img
                                className="icon-sm"
                                src={github}
                                alt="github"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/connorbarkr/">
                            <img
                                className="icon-sm"
                                src={linkedin}
                                alt="linkedin"
                            />
                        </a>
                    </div>
                ) : (
                    <div className="d-flex align-items-center header-content__right">
                        <a href="/#contact">{'contact'}</a>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
