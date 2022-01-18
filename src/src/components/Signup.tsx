import { useState, useEffect } from 'react';
import { Form } from './style';
import Router from 'next/router';
import axios from 'axios';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [name, setName] = useState('');
    const [pw, setPw] = useState('');
    const [repeatPw, setRepeatPw] = useState('');
    const [validEmail, setValidEmail] = useState('');
    const [validPassword, setValidPassword] = useState('');
    const [coincidePw, setCoincidePw] = useState('');
    const [url, setUrl] = useState('');
    const [res, setRes] = useState(null);

    useEffect(() => {
        setUrl('https://api.mooseong.net/users');
    }, []);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        if (!isValidEmail(e.target.value)) {
            setValidEmail('올바른 이메일 형식이 아닙니다');
        } else {
            setValidEmail('');
        }
    };
    const handleNumber = (e) => {
        setNumber(e.target.value);
    };
    const handleName = (e) => {
        setName(e.target.value);
    };
    const handlePw = (e) => {
        setPw(e.target.value);
        if (!isValidPassword(e.target.value)) {
            setValidPassword('올바른 비밀번호 형식이 아닙니다');
        } else {
            setValidPassword('');
        }
    };
    const handleRepeatPw = (e) => {
        setRepeatPw(e.target.value);
        if (pw !== e.target.value) {
            setCoincidePw('입력한 비밀번호와 일치하지 않습니다');
        } else {
            setCoincidePw('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '') {
            alert('email을 입력해주세요');
            return;
        }
        if (number === '') {
            alert('휴대폰 번호를 입력해주세요');
            return;
        }
        if (name === '') {
            alert('이름을 입력해주세요');
            return;
        }
        if (pw === '') {
            alert('비밀번호를 입력해주세요');
            return;
        }
        if (repeatPw === '') {
            alert('비밀번호를 재입력해주세요');
            return;
        }
        setEmail('');
        setNumber('');
        setName('');
        setPw('');
        setRepeatPw('');
        signupAPI();
    };

    const signupAPI = async () => {
        const payload = {
            email: email,
            name: name,
            password: pw,
            phoneNumber: number,
        };
        const signup = await axios.post(url, payload);
        Router.push('/login');
        setRes(signup);
    };
    console.log(res);

    const isValidEmail = (e) => {
        const emailRule =
            /^[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        return emailRule.test(e);
    };
    const isValidPassword = (e) => {
        const passRule = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,15}$/;
        return passRule.test(e);
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h3>회원 가입 페이지</h3>
                <input
                    id='email'
                    type='text'
                    placeholder='이메일 입력'
                    value={email}
                    onChange={handleEmail}
                />
                <span>{validEmail}</span>
                <br />
                <br />
                <input
                    type='text'
                    placeholder='휴대폰 번호 입력'
                    value={number}
                    onChange={handleNumber}
                />
                <br />
                <br />
                <input
                    type='text'
                    placeholder='이름 입력'
                    value={name}
                    onChange={handleName}
                />
                <br />
                <br />
                <input
                    id='pw'
                    type='password'
                    placeholder='비밀번호 입력'
                    value={pw}
                    onChange={handlePw}
                />
                <span>{validPassword}</span>
                <br />
                <br />
                <input
                    type='password'
                    placeholder='비밀번호 재입력'
                    value={repeatPw}
                    onChange={handleRepeatPw}
                />
                <span>{coincidePw}</span>
                <br />
                <br />

                <button>가입하기</button>
            </Form>
        </>
    );
};

export default Signup;
