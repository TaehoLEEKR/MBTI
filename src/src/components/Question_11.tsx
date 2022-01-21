import { useState, useEffect } from 'react';
import { DIV, BODY } from './style';
import Link from 'next/link';
const Question_11 = () => {
    return (
        <>
            <BODY>
                <DIV>
                    <h2>Question 12</h2>
                    <h1 className='Question'>
                        2차갔는데 친구의 친구를 만났다.
                        <br />
                        합석 할래?
                    </h1>
                    <li>
                        <Link href='/loadingPage'>
                            <button className='Question_button'>
                                오는 사람 거절하지 않는다구~! 좋다 환영
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href='/loadingPage'>
                            <button className='Question_button'>
                                시렁궁시렁시렁궁시렁 부끄러워.
                            </button>
                        </Link>
                    </li>
                    <div className='progress'>
                        <span
                            className='progress_bar'
                            style={{ width: '210px' }}
                        ></span>
                    </div>
                </DIV>
            </BODY>
        </>
    );
};

export default Question_11;
