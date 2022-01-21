import { useState, useEffect } from 'react';
import { DIV, BODY } from './style';
import Link from 'next/link';
// background-size: 알아보기 깨지는걸 방지
const Main = () => {
    return (
        <>
            <BODY>
                <DIV>
                    <img
                        src='/images/test.jpg'
                        width='300'
                        height='200'
                        alt='My Image'
                        className='title'
                    ></img>
                    <h3>MBTI 테스트</h3>
                    <img src='/images/test.jpg' width='300' height='200'></img>
                    <li>
                        <Link href='/question'>
                            <button>나는 어떤 놀이기구 일까?</button>
                        </Link>
                    </li>
                </DIV>
            </BODY>
        </>
    );
};

export default Main;
