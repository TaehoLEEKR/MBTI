import { useState, useEffect } from 'react';
import { DIV, BODY } from './style';
import Link from 'next/link';
const Question_6 = () => {
    return (
        <>
            <BODY>
                <DIV>
                    <h2>Question 7</h2>
                    <h1 className='Question'>
                        줄을 기다리면서 친구가
                        <br />
                        놀이기구에 대해 설명해준다면?
                    </h1>
                    <li>
                        <Link href='/question_7'>
                            <button className='Question_button'>
                                감탄하면서 설명을 듣는다
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href='/question_7'>
                            <button className='Question_button'>
                                어쩔티비~ 저 앞에 츄러스 맛있겠다..
                            </button>
                        </Link>
                    </li>
                    <div className='progress'>
                        <span
                            className='progress_bar'
                            style={{ width: '126px' }}
                        ></span>
                    </div>
                </DIV>
            </BODY>
        </>
    );
};

export default Question_6;
