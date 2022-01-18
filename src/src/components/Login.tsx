import { useState, useEffect } from 'react';
import { Form } from './style';
import Link from 'next/link';
import axios from 'axios';
import Router from 'next/router';
import { useCookies } from 'react-cookie';

const Login = () => {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');
    const [res, setRes] = useState(null);
    const [url, setUrl] = useState('');
    const [cookies, setCookie] = useCookies([]);

    useEffect(() => {
        if (res?.data?.result) {
            setCookie('token', `Bearer ${res?.data?.result}`);
        }
    }, [res?.data?.result]);
    console.log(cookies);

    useEffect(() => {
        setUrl('https://api.mooseong.net/login');
    }, []);

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePw = (e) => {
        setPw(e.target.value);
    };

    // axios.get('https://api.mooseong.net/health-check').then((res) => {
    //     console.log(res);
    // });

    // useEffect 사용법
    // useEffect(() => {
    //     const apiRequest = async () => {
    //         const data = await axios.get(
    //             'https://api.mooseong.net/health-check'
    //         );
    //         setRes(data);
    //     };
    //     apiRequest();
    // }, []);
    // console.log(res);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === '') {
            alert('email을 입력해주세요');
        }
        if (email !== '' && pw === '') {
            alert('pw을 입력해주세요');
        }
        setEmail('');
        setPw('');

        loginAPI();
    };

    const loginAPI = async () => {
        const payload = {
            email: email,
            password: pw,
        };
        const login = await axios.post(url, payload);
        Router.push('/');
        setRes(login);
    };
    console.log(res);

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h3>로그인 페이지</h3>
                <input
                    type='text'
                    placeholder='email'
                    value={email}
                    onChange={handleEmail}
                />
                <br></br>
                <input
                    type='password'
                    placeholder='pw'
                    value={pw}
                    onChange={handlePw}
                />
                <button>로그인</button>
                <ul className='fucntion'>
                    <li>
                        <Link href='/signup'>
                            <a>회원가입</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/resetPassword'>
                            <a>비밀번호 초기화</a>
                        </Link>
                    </li>
                    <li>
                        <Link href='/withdrawal'>
                            <a>회원 탈퇴</a>
                        </Link>
                    </li>
                </ul>
            </Form>
        </>
    );
};

export default Login;
