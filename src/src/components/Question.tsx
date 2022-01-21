import { useState, useEffect } from 'react';
import { DIV, BODY } from './style';
import Link from 'next/link';
const Question = () => {
    return (
        <>
            <BODY>
                <DIV>
                    <h2>Question 1</h2>
                    <h1 className='Question'>
                        백만년만에 휴일이 생겼다!!
                        <br />
                        뭐하고 보낼까!?
                    </h1>
                    <li>
                        <Link href='/question_1'>
                            <button className='Question_button'>
                                친구들과 약속을 잡고
                                <br />
                                놀러 나가는게 맞지!
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href='/question_1'>
                            <button className='Question_button'>
                                약속은 무슨 약속이야
                                <br />
                                넷플릭스 밀린거나 봐야지~
                            </button>
                        </Link>
                    </li>

                    <div className='progress'>
                        <span
                            className='progress_bar'
                            style={{ width: '18px' }}
                        ></span>
                    </div>
                </DIV>
            </BODY>
        </>
    );
};

export default Question;
