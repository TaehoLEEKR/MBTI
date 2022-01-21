import { useState, useEffect } from 'react';
import { DIV, BODY } from './style';
import Link from 'next/link';
const Question_5 = () => {
    return (
        <>
            <BODY>
                <DIV>
                    <h2>Question 6</h2>
                    <h1 className='Question'>
                        무섭기로 익명이 높은
                        <br />
                        놀이기구를 타러 가는 길..
                    </h1>
                    <li>
                        <Link href='/question_6'>
                            <button className='Question_button'>
                                안가 그거 대기 할 시간에 <br />
                                그냥 다른거 두개 타자
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href='/question_6'>
                            <button className='Question_button'>
                                이거 안타면 놀이공원 온게 아니야~
                            </button>
                        </Link>
                    </li>
                    <div className='progress'>
                        <span
                            className='progress_bar'
                            style={{ width: '108px' }}
                        ></span>
                    </div>
                </DIV>
            </BODY>
        </>
    );
};

export default Question_5;
