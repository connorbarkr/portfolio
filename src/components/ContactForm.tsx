import axios from 'axios';
import {
    ChangeEvent,
    MouseEvent,
    useCallback,
    useEffect,
    useState,
} from 'react';

import '../style/contact.scss';

interface ContactFormValues {
    name?: string;
    msg?: string;
    email?: string;
}

const ContactForm = () => {
    const [formValues, setFormValues] = useState<ContactFormValues>({});
    const [sent, setSent] = useState(false);
    const [sending, setSending] = useState(false);

    useEffect(() => {
        if (sending) {
            axios
                .post(
                    'https://ddi9p4uo52.execute-api.us-east-1.amazonaws.com/001/contact',
                    formValues
                )
                .then((response) => {
                    if (response.status === 200) {
                        setSending(false);
                        setSent(true);
                    } else {
                        alert(
                            'Something went wrong! Check your connection, or try again in a few minutes.'
                        );
                    }
                });
        }
    }, [sending, formValues]);

    const submit = useCallback(
        (e: MouseEvent<HTMLButtonElement>) => {
            const { name, msg, email } = formValues;
            const emailValidator =
                /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

            e.preventDefault();
            if (!name || name.length === 0) {
                alert('Please complete the name field.');
                return;
            } else if (!msg || msg.length === 0) {
                alert('Please complete the message field.');
                return;
            } else if (!email || email.length === 0) {
                alert('Please complete the email field.');
                return;
            } else if (!emailValidator.test(email)) {
                alert('Please enter a valid email address.');
                return;
            } else if (name.length > 100) {
                alert('Please enter a name under 100 characters long.');
                return;
            } else if (msg.length > 500) {
                alert('Please enter a message under 500 characters long');
                return;
            }

            setSending(true);
        },
        [formValues]
    );

    const sendAgain = () => {
        setSent(false);
    };

    const updateName = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setFormValues({ ...formValues, name: e.target.value });
        },
        [formValues]
    );

    const updateMsg = useCallback(
        (e: ChangeEvent<HTMLTextAreaElement>) => {
            setFormValues({ ...formValues, msg: e.target.value });
        },
        [formValues]
    );

    const updateEmail = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => {
            setFormValues({ ...formValues, email: e.target.value });
        },
        [formValues]
    );

    return (
        <div className="contact-form d-flex align-items-center height-inner">
            {sending ? (
                <div className="d-flex flex-column justify-content-center align-items-center contact-again">
                    <h2>{'Sending...'}</h2>
                </div>
            ) : sent ? (
                <div className="d-flex flex-column justify-content-center align-items-center contact-again">
                    <h2>
                        {"thanks for getting in touch! i'll hit you back soon."}
                    </h2>
                    <button className="contact-button" onClick={sendAgain}>
                        {'contact again'}
                    </button>
                </div>
            ) : (
                <div
                    style={{ width: '100%' }}
                    className="d-flex flex-column justify-content-center align-items-center"
                >
                    <div className="contact-field contact-name">
                        <input
                            id="name"
                            placeholder="name"
                            onBlur={updateName}
                        />
                    </div>
                    <div className="contact-field contact-message">
                        <textarea
                            rows={1}
                            id="message"
                            placeholder="message"
                            onBlur={updateMsg}
                        />
                    </div>
                    <div className="contact-field contact-email">
                        <input
                            id="email"
                            type="email"
                            placeholder="email"
                            onBlur={updateEmail}
                        />
                    </div>
                    <button
                        type="button"
                        className="contact-button"
                        onClick={submit}
                    >
                        {'send'}
                    </button>
                </div>
            )}
        </div>
    );
};

export default ContactForm;
