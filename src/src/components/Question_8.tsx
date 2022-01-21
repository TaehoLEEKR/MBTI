import { useState, useEffect } from 'react';
import { DIV, BODY } from './style';
import Link from 'next/link';
const Question_8 = () => {
    return (
        <>
            <BODY>
                <DIV>
                    <h2>Question 9</h2>
                    <h1 className='Question'>
                        매점에서 지갑 분실사건 범인이
                        <br />
                        나로 몰렸다.. 나라면?
                    </h1>
                    <li>
                        <Link href='/question_9'>
                            <button className='Question_button'>
                                놀이기구 예약시간을 보여주며 <br />
                                논리적으로 설명한다
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href='/question_9'>
                            <button className='Question_button'>
                                저 아니에효! 당황해서 눈물이 다 나네
                            </button>
                        </Link>
                    </li>
                    <div className='progress'>
                        <span
                            className='progress_bar'
                            style={{ width: '162px' }}
                        ></span>
                    </div>
                </DIV>
            </BODY>
        </>
    );
};

export default Question_8;
