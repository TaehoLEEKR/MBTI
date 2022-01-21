import { useState, useEffect } from 'react';
import { DIV, BODY } from './style';
import Link from 'next/link';
const Question_9 = () => {
    return (
        <>
            <BODY>
                <DIV>
                    <h2>Question 10</h2>
                    <h1 className='Question'>
                        재밌게 놀고 난 후에 급 2차로
                        <br />
                        놀자는 친구들 나의 선택은?
                    </h1>
                    <li>
                        <Link href='/question_10'>
                            <button className='Question_button'>
                                나 피곤행 안갈래 집가서 <br />할 일이 많으니
                                안간다
                            </button>
                        </Link>
                    </li>
                    <li>
                        <Link href='/question_10'>
                            <button className='Question_button'>
                                빠꾸없지 무조건 가~!
                            </button>
                        </Link>
                    </li>
                    <div className='progress'>
                        <span
                            className='progress_bar'
                            style={{ width: '180px' }}
                        ></span>
                    </div>
                </DIV>
            </BODY>
        </>
    );
};

export default Question_9;
