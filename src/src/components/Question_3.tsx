import { useState, useEffect } from 'react';
import { DIV, BODY } from './style';
import Link from 'next/link';
const Question_3 = () => {
    return (
        <>
            <BODY>
                <DIV>
                    <h2>Question 4</h2>
                    <h1 className='Question'>
                        관람차를 타고 정상에 올라갔다!
                        <br />
                    </h1>
                    <li>
                        <Link href='/question_4'>
                            <button className='Question_button'>
                                와 날씨 직이네
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href='/question_4'>
                            <button className='Question_button'>
                                갑자기 멈추면 어떻게 탈출하지? <br />
                                대탈출 이라도 봐둘걸 그랬나..?
                            </button>
                        </Link>
                    </li>
                    <div className='progress'>
                        <span
                            className='progress_bar'
                            style={{ width: '72px' }}
                        ></span>
                    </div>
                </DIV>
            </BODY>
        </>
    );
};

export default Question_3;
