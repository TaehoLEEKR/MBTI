import { useState, useEffect } from 'react';
import { Form } from './style';
import Link from 'next/link';

const Main = () => {
    return (
        <>
            <Form>
                <h3>메인 페이지</h3>
                <button>
                    <Link href='/login'>로그인</Link>
                </button>
                <button>
                    <Link href='/signup'>회원가입</Link>
                </button>
            </Form>
        </>
    );
};

export default Main;
