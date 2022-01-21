import { useState, useEffect } from 'react';
import { DIV, BODY } from './style';
import Link from 'next/link';
const Question_4 = () => {
    return (
        <>
            <BODY>
                <DIV>
                    <h2>Question 5</h2>
                    <h1 className='Question'>
                        돌아다니다가 혼자 울고
                        <br />
                        있는 아이를 발견했다면?
                    </h1>
                    <li>
                        <Link href='/question_5'>
                            <button className='Question_button'>
                                우리가 직접 엄빠를 찾아주자!
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href='/question_5'>
                            <button className='Question_button'>
                                미아보호소에 데려가자 <br />
                                그게 현명한 선택일듯 해
                            </button>
                        </Link>
                    </li>
                    <div className='progress'>
                        <span
                            className='progress_bar'
                            style={{ width: '90px' }}
                        ></span>
                    </div>
                </DIV>
            </BODY>
        </>
    );
};

export default Question_4;
