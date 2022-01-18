import axios from 'axios';
import Router from 'next/router';
import { useState, useEffect } from 'react';
import { Form } from './style';

const verifyToken = () => {
    const [url, setUrl] = useState('');

    useEffect(() => {
        setUrl('https://api.mooseong.net/verifyToken');
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        verifyTokenAPI();
    };

    const verifyTokenAPI = async () => {
        const payload = {
            token: `Bearer%20eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJ3d3cubW9vc2VvbmcubmV0IiwiaWF0IjoxNjQyMzA4MjA2MDg5LCJleHAiOjE2NDIzMTkwMDYwODksImVtYWlsIjoia2tra0BuYXZlci5jb20iLCJyb2xlcyI6bnVsbH0.E8ZrefQeOzi0B8j4YzXvn7_qqn-MtXkEedXeJl8B1DU`,
        };
        const verifyToken = await axios.post(url, payload);
        Router.push('/');
    };

    return (
        <>
            <Form onSubmit={handleSubmit}>
                <h3>토큰 인증페이지</h3>
                <button>토큰 보내기</button>
            </Form>
        </>
    );
};

export default verifyToken;
