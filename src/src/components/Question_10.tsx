import { useState, useEffect } from 'react';
import { DIV, BODY } from './style';
import Link from 'next/link';
const Question_10 = () => {
    return (
        <>
            <BODY>
                <DIV>
                    <h2>Question 11</h2>
                    <h1 className='Question'>
                        2차 장소를 어디로 가지?
                        <br />
                    </h1>
                    <li>
                        <Link href='/question_11'>
                            <button className='Question_button'>
                                유리부터 반짝 거리는 새로 오픈한 곳
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href='/question_11'>
                            <button className='Question_button'>
                                어느 동네를 가도 있을법한 그런 곳
                            </button>
                        </Link>
                    </li>
                    <div className='progress'>
                        <span
                            className='progress_bar'
                            style={{ width: '195px' }}
                        ></span>
                    </div>
                </DIV>
            </BODY>
        </>
    );
};

export default Question_10;
