import { useState, useEffect } from 'react';
import { DIV, BODY } from './style';
import Link from 'next/link';
const Question_1 = () => {
    return (
        <>
            <BODY>
                <DIV>
                    <h2>Question 2</h2>
                    <h1 className='Question'>
                        놀이동산을 가기전
                        <br />
                        지금 나의 심정은?
                    </h1>
                    <li>
                        <Link href='/question_2'>
                            <button className='Question_button'>
                                꺄르르 너무 재밌을 것 같아
                                <br /> 설레서 잠을 못 이루겠는걸
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href='/question_2'>
                            <button className='Question_button'>
                                좋긴한데 흠...(귀찮아)
                            </button>
                        </Link>
                    </li>

                    <div className='progress'>
                        <span
                            className='progress_bar'
                            style={{ width: '36px' }}
                        ></span>
                    </div>
                </DIV>
            </BODY>
        </>
    );
};

export default Question_1;
