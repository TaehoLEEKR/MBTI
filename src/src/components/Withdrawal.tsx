import axios from 'axios';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import { Form } from './style';
const Withdrawal = () => {
    const [pw, setPw] = useState('');
    const [email, setEmail] = useState('');
    const [url, setUrl] = useState('');

    useEffect(() => {
        setUrl('https://api.mooseong.net/withdrawal');
    }, []);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };
    const handlePw = (e) => {
        setPw(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setPw('');
        setEmail('');
        withdrawalAPI();
    };

    const withdrawalAPI = async () => {
        const payload = {
            email: email,
            password: pw,
        };
        const withdrawal = await axios.delete(url, { data: payload });
        Router.push('/');
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h3>회원탈퇴 페이지</h3>
                <input
                    type='text'
                    placeholder='email'
                    value={email}
                    onChange={handleEmail}
                />
                <input
                    type='password'
                    placeholder='pw'
                    value={pw}
                    onChange={handlePw}
                />
                <br></br>
                <button>회원탈퇴</button>
            </Form>
        </>
    );
};

export default Withdrawal;
