import { forwardRef, useCallback, useEffect, useState } from 'react';

import '../style/contact.scss';
import '../style/content.scss';
import '../style/_variables.scss';

import ContactForm from './ContactForm';

import github from '../assets/icons/github-logo_b.svg';
import linkedin from '../assets/icons/linkedin-logo_b.svg';

const Contact = forwardRef<HTMLDivElement>((_props, ref) => {
    const [contactScrollStyle, setContactScrollStyle] = useState('');

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
            setContactScrollStyle('contact-scrolled');
        } else {
            setContactScrollStyle('');
        }
    }, []);

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <div
            ref={ref}
            className={`d-flex contact height-inner ${contactScrollStyle}`}
        >
            <div className="d-flex justify-content-center flex-column contact-left">
                <h1 className="d-flex flex-column">
                    <span>{'get in touch'}</span>
                    <span>{'with me'}</span>
                </h1>
            </div>
            <div className="d-flex justify-content-center flex-column contact-right">
                <ContactForm />
                <div className="flex-row contact-right__logos justify-content-center">
                    <a href="https://github.com/connorbarkr">
                        <img className="icon-xs" src={github} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/connorbarkr/">
                        <img
                            className="icon-xs"
                            src={linkedin}
                            alt="linkedin"
                        />
                    </a>
                </div>
            </div>
        </div>
    );
});

Contact.displayName = 'Contact';

export default Contact;
