import { useState, useEffect, useRef } from 'react';
import { DIV, BODY, Form } from './style';
import Link from 'next/link';
// import
import question from './../pages/question';
import { useRouter } from 'next/router';
const Question = () => {
    // const ref = useRef(input);
    //const selectedQuestionRef = useRef(null); //DOM
    const router = useRouter();

    const handleClick = (e) => {
        const currentQuestion = e.target.parentElement.parentElement;
        const nextQuestion = currentQuestion.nextSibling;
        const questions = document.querySelectorAll('.questionWrapper');
        if (!nextQuestion) {
            router.push('/loadingPage');
            return;
        }

        const otherQuestions = Array.from(questions).filter(
            (el) => el !== nextQuestion
        );

        // 1번 다음 질문 display flex
        nextQuestion.style.display = 'flex';
        // 2번 다음 질문 제외하고 모두 display none
        otherQuestions.forEach((el) => (el.style.display = 'none'));
    };

    return (
        <>
            <BODY>
                <Form action='/result' method='post'>
                    <DIV
                        id='question1'
                        className='questionWrapper'
                        style={{ display: 'flex' }}
                    >
                        <h2>Question 1</h2>
                        <h1 className='Question'>
                            백만년만에 휴일이 생겼다!!
                            <br />
                            뭐하고 보낼까!?
                        </h1>

                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question1_1'
                                name='question'
                                value='e'
                                onClick={handleClick}
                            />
                            <label htmlFor='question1_1'>
                                친구들과 약속을 잡고 놀러 나가는게 맞지!
                                <br /> 놀러 나가는게 맞지!
                            </label>
                        </div>

                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question1_2'
                                name='question'
                                value='i'
                                onClick={handleClick}
                            />
                            <label htmlFor='question1_2'>
                                약속은 무슨 약속이야
                                <br /> 넷플릭스 밀린거나 봐야지~
                            </label>
                        </div>

                        <div className='progress'>
                            <span
                                className='progress_bar'
                                style={{ width: '18px' }}
                            ></span>
                        </div>
                    </DIV>

                    <DIV
                        id='question2'
                        className='questionWrapper'
                        style={{ display: 'none' }}
                    >
                        <h2>Question 2</h2>
                        <h1 className='Question'>
                            놀이동산을 가기전
                            <br />
                            지금 나의 심정은?
                        </h1>

                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question2_1'
                                name='question'
                                value='e'
                                onClick={handleClick}
                            />
                            <label htmlFor='question2_1'>
                                꺄르르 너무 재밌을 것 같아
                                <br /> 설레서 잠을 못 이루겠는걸
                            </label>
                        </div>

                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question2_2'
                                name='question'
                                value='i'
                                onClick={handleClick}
                            />
                            <label htmlFor='question2_2'>
                                좋긴한데 흠...(귀찮아)
                            </label>
                        </div>

                        <div className='progress'>
                            <span
                                className='progress_bar'
                                style={{ width: '36px' }}
                            ></span>
                        </div>
                    </DIV>

                    <DIV
                        id='question3'
                        className='questionWrapper'
                        style={{ display: 'none' }}
                    >
                        <h2>Question 3</h2>
                        <h1 className='Question'>
                            놀이동산을 가기전
                            <br />
                            지금 나의 심정은?
                        </h1>

                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question3_1'
                                name='question'
                                value='e'
                                onClick={handleClick}
                            />
                            <label htmlFor='question3_1'>
                                꺄르르 너무 재밌을 것 같아
                                <br /> 설레서 잠을 못 이루겠는걸
                            </label>
                        </div>

                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question3_2'
                                name='question'
                                value='i'
                                onClick={handleClick}
                            />
                            <label htmlFor='question3_2'>
                                좋긴한데 흠...(귀찮아)
                            </label>
                        </div>

                        <div className='progress'>
                            <span
                                className='progress_bar'
                                style={{ width: '54px' }}
                            ></span>
                        </div>
                    </DIV>

                    <DIV
                        id='question4'
                        className='questionWrapper'
                        style={{ display: 'none' }}
                    >
                        <h2>Question 4</h2>
                        <h1 className='Question'>
                            놀이동산을 가기전
                            <br />
                            지금 나의 심정은?
                        </h1>

                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question4_1'
                                name='question'
                                value='e'
                                onClick={handleClick}
                            />
                            <label htmlFor='question4_1'>
                                꺄르르 너무 재밌을 것 같아
                                <br /> 설레서 잠을 못 이루겠는걸
                            </label>
                        </div>

                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question4_2'
                                name='question'
                                value='i'
                                onClick={handleClick}
                            />
                            <label htmlFor='question4_2'>
                                좋긴한데 흠...(귀찮아)
                            </label>
                        </div>

                        <div className='progress'>
                            <span
                                className='progress_bar'
                                style={{ width: '72px' }}
                            ></span>
                        </div>
                    </DIV>
                </Form>
            </BODY>
        </>
    );
};

const Q = (props, index) => {
    const { id, question, 선택1, 선택2 } = props;
    return (
        <DIV
            id='question1'
            className='questionWrapper'
            style={{ display: 'flex' }}
        >
            <h2>Question 1</h2>
            <h1 className='Question'>{question}</h1>

            <div className='formfield'>
                <input
                    type='radio'
                    id={id + '_1'}
                    name='question'
                    value='e'
                    // onClick={handleClick}
                />
                <label htmlFor={id + '_1'}>{선택1}</label>
            </div>

            <div className='formfield'>
                <input
                    type='radio'
                    id={id + '_2'}
                    name='question'
                    value='i'
                    // onClick={handleClick}
                />
                <label htmlFor={id + '_2'}>{선택2}</label>
            </div>

            <div className='progress'>
                <span className='progress_bar' style={{ width: '18px' }}></span>
            </div>
        </DIV>
    );
};

export default Question;
