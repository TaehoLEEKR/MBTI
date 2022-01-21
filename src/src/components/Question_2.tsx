import { useState, useEffect } from 'react';
import { DIV, BODY } from './style';
import Link from 'next/link';
const Question_2 = () => {
    return (
        <>
            <BODY>
                <DIV>
                    <h2>Question 3</h2>
                    <h1 className='Question'>
                        놀이동산 전 날 나의 모습은?
                        <br />
                    </h1>
                    <li>
                        <Link href='/question_3'>
                            <button className='Question_button'>
                                무엇을 타고 언제 밥을
                                <br />
                                먹을지 미리 조사할래
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href='/question_3'>
                            <button className='Question_button'>
                                내가 가장 튀어야해! 쇼핑 가자
                            </button>
                        </Link>
                    </li>
                    <div className='progress'>
                        <span
                            className='progress_bar'
                            style={{ width: '54px' }}
                        ></span>
                    </div>
                </DIV>
            </BODY>
        </>
    );
};

export default Question_2;
