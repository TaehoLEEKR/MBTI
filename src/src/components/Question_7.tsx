import { useState, useEffect } from 'react';
import { DIV, BODY } from './style';
import Link from 'next/link';
const Question_7 = () => {
    return (
        <>
            <BODY>
                <DIV>
                    <h2>Question 8</h2>
                    <h1 className='Question'>
                        예약해놓은 기구가 있는데
                        <br />
                        퍼레이드 시간과 겹친다면?
                    </h1>
                    <li>
                        <Link href='/question_8'>
                            <button className='Question_button'>
                                퍼레이드는 못 참지!~ <br />
                                그냥 보고 다시 예약할래~
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href='/question_8'>
                            <button className='Question_button'>
                                아니야 놀이기구는 못 참지!~ <br />
                                예약해 놓은거 타러가자
                            </button>
                        </Link>
                    </li>
                    <div className='progress'>
                        <span
                            className='progress_bar'
                            style={{ width: '144px' }}
                        ></span>
                    </div>
                </DIV>
            </BODY>
        </>
    );
};

export default Question_7;
