import { useState, useEffect } from 'react';
import { Form } from './style';
import axios from 'axios';
import Router from 'next/router';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        setUrl('https://api.mooseong.net/password/reset');
    }, []);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setEmail('');
        ResetPasswordAPI();
    };

    const ResetPasswordAPI = async () => {
        const payload = {
            email: email,
        };
        const resetPassword = await axios.post(url, payload);
        Router.push('/');
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h3>비밀번호 초기화 페이지</h3>
                <input
                    type='text'
                    placeholder='email'
                    value={email}
                    onChange={handleEmail}
                />
                <br></br>
                <button>비밀번호 초기화</button>
            </Form>
        </>
    );
};

export default ResetPassword;
