import React, { useState, useEffect, useRef } from 'react';
import { DIV, BODY } from '../style';
import axios from 'axios';
import {
    BrowserRouter,
    Routes,
    Route,
    useNavigate,
    Link,
} from 'react-router-dom';
import Result from './Result';

const Question = () => {
    const navigate = useNavigate();
    const result = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 }; // 'e','f'
    let check_cnt = 1;
    const final_result = useRef('');
    const [title, setTitle] = useState('');
    const [title2, setTitle2] = useState('');

    useEffect(() => {
        const clickAPI = async () => {
            setTitle(
                await axios.get('https://mbti-api-thbds.run.goorm.io/cholist')
            );
        };
        clickAPI();
    }, []);

    const handleClick = (e) => {
        check_cnt++;
        const currentQuestion = e.target.parentElement.parentElement;
        const nextQuestion = currentQuestion.nextSibling;
        
        const questions = document.querySelectorAll('.questionWrapper');
        const otherQuestions = Array.from(questions).filter(
            (el) => el !== nextQuestion
        );

        if (check_cnt !== 13) {
            // 1번 다음 질문 display flex
            nextQuestion.style.display = 'flex';
            // 2번 다음 질문 제외하고 모두 display none
            otherQuestions.forEach((el) => (el.style.display = 'none'));
        }

        if (result[e.target.value] == 0) {
            result[e.target.value] = 1;
        } else {
            result[e.target.value]++;
        }

        if (check_cnt === 13) {
            if (result['E'] > result['I']) {
                final_result.current += 'E';
            } else {
                final_result.current += 'I';
            }
            if (result['S'] > result['N']) {
                final_result.current += 'S';
            } else {
                final_result.current += 'N';
            }
            if (result['T'] > result['F']) {
                final_result.current += 'T';
            } else {
                final_result.current += 'F';
            }
            if (result['J'] > result['P']) {
                final_result.current += 'J';
            } else {
                final_result.current += 'P';
            }
            console.log(final_result.current);
        }
    };
    
    const handleSubmit = (e) => {
        if(final_result.current === ""){
            alert("설문지 대답 클릭 후 제출해주세요")
            return;
        }
        navigate('/result?value=' + final_result.current);
    };
    
    const returnBack = (e) => {
        
        const target = e.currentTarget;
        const a = e.target.parentElement.parentElement.id
        if (target.id === 'back_question1') {
            navigate("/")
            return
        }
        // 2. target == display = none >> target.id - 1 question1 >> display flex
        for(let i =2; i<13; i++){
             if(a[8] === i){
                const currentQuestion = e.target.parentElement.parentElement;
                const previousQuestion = currentQuestion.previousSibling;       
                currentQuestion.style.display = 'none';
                previousQuestion.style.display = 'flex';
                 console.log(a[8])
                return;
        }
        }
       
    }

    return (
        <>
            <form>
                <BODY>
                    <DIV
                        id='question1'
                        className='questionWrapper'
                        style={{ display: 'flex' }}
                    >
                        <span id='title'>01 / 12</span>

                        <span id='content'>
                            오랜만에 생긴 휴일,
                            <br />뭐 하면서 시간을 보낼까?
                        </span>
                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question1_1'
                                name='question'
                                value={`${title?.data?.[0]?.FK_Sep?.Sep}`}
                                onClick={handleClick}
                            />
                            <label htmlFor='question1_1'>
                                <span id='content_data'>
                                    친구들과 약속 잡고
                                    <br />
                                    밖으로 놀러 나가는게 맞지~
                                </span>
                            </label>
                        </div>

                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question1_2'
                                name='question'
                                value={`${title?.data?.[1]?.FK_Sep?.Sep}`}
                                onClick={handleClick}
                            />
                            <label htmlFor='question1_2'>
                                <span id='content_data'>
                                    나가는건 너무 귀찮아..
                                    <br />
                                    집에서 넷플릭스랑 유튜브나 봐야지
                                </span>
                            </label>
                        </div>
                            <div id = "back_question1" className='back' onClick={returnBack}>
                                <img
                                    src='img/before.png'
                                    width='85px'
                                    height='22px'
                                ></img>
                            </div>
                    </DIV>
                    <DIV
                        id='question2'
                        className='questionWrapper'
                        style={{ display: 'none' }}
                    >
                        <span id='title'>02/12</span>

                        <span id='content'>
                            놀이동산을 가기 일주일 전,
                            <br />
                            약속을 준비하는 나의 모습은?
                        </span>
                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question2_1'
                                name='question'
                                value={`${title?.data?.[2]?.FK_Sep?.Sep}`}
                                onClick={handleClick}
                            />
                            <label htmlFor='question2_1'>
                                <span id='content_data'>
                                    기구는 어떤 것을 타야 하고
                                    <br />
                                    주변에 먹을 것이 뭐가 있나 조사할래
                                </span>
                            </label>
                        </div>

                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question2_2'
                                name='question'
                                value={`${title?.data?.[3]?.FK_Sep?.Sep}`}
                                onClick={handleClick}
                            />
                            <label htmlFor='question2_2'>
                                <span id='content_data'>
                                    내가 가장 튀어야지!
                                    <br />
                                    그날 입을 옷 쇼핑해야겠다
                                </span>
                            </label>
                        </div>
                        <div className='back' onClick={returnBack}>
                            <img
                                src='img/before.png'
                                width='85px'
                                height='22px'
                            ></img>
                        </div>
                    </DIV>

                    <DIV
                        id='question3'
                        className='questionWrapper'
                        style={{ display: 'none' }}
                    >
                        <span id='title'>03/12</span>

                        <span id='content'>
                            놀이동산을 가기 하루 전,
                            <br />
                            지금 나의 심정은?
                        </span>
                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question3_1'
                                name='question'
                                value={`${title?.data?.[4]?.FK_Sep?.Sep}`}
                                onClick={handleClick}
                            />
                            <label htmlFor='question3_1'>
                                <span id='content_data'>
                                    오랜만에 놀이공원이라니!
                                    <br />
                                    설레서 잠을 못 이루겠는 걸 ㅎㅎ
                                </span>
                            </label>
                        </div>

                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question3_2'
                                name='question'
                                value={`${title?.data?.[5]?.FK_Sep?.Sep}`}
                                onClick={handleClick}
                            />
                            <label htmlFor='question3_2'>
                                <span id='content_data'>
                                    내일이 놀이공원 가는 날이네?
                                    <br />
                                    좋긴 한데..(흠 조금 귀찮아)
                                </span>
                            </label>
                        </div>
                        <div className='back' onClick={returnBack}>
                            <img
                                src='img/before.png'
                                width='85px'
                                height='22px'
                            ></img>
                        </div>
                    </DIV>

                    <DIV
                        id='question4'
                        className='questionWrapper'
                        style={{ display: 'none' }}
                    >
                        <span id='title'>04/12</span>

                        <span id='content'>
                            관람차를 타고
                            <br />탁 트이는 정상에 올라갔다!
                        </span>
                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question4_1'
                                name='question'
                                value={`${title?.data?.[6]?.FK_Sep?.Sep}`}
                                onClick={handleClick}
                            />
                            <label htmlFor='question4_1'>
                                <span id='content_data'>
                                    와 날씨 쥑이네~
                                    <br />
                                    오늘 사람도 엄청 많이 왔네
                                </span>
                            </label>
                        </div>

                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question4_2'
                                name='question'
                                value={`${title?.data?.[7]?.FK_Sep?.Sep}`}
                                onClick={handleClick}
                            />
                            <label htmlFor='question4_2'>
                                <span id='content_data'>
                                    갑자기 멈추면 어떡하지..?
                                    <br />
                                    너무 흔들리는 거 같은데..
                                </span>
                            </label>
                        </div>
                        <div className='back' onClick={returnBack}>
                            <img
                                src='img/before.png'
                                width='85px'
                                height='22px'
                            ></img>
                        </div>
                    </DIV>
                    <DIV
                        id='question5'
                        className='questionWrapper'
                        style={{ display: 'none' }}
                    >
                        <span id='title'>05/12</span>

                        <span id='content'>
                            놀이공원에서 혼자 울고 있는
                            <br />
                            어린아이를 발견했다!
                        </span>
                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question5_1'
                                name='question'
                                value={`${title?.data?.[8]?.FK_Sep?.Sep}`}
                                onClick={handleClick}
                            />
                            <label htmlFor='question5_1'>
                                <span id='content_data'>
                                    아직 멀리 안 가셨을 거야
                                    <br />
                                    직접 부모님을 찾아줘야겠어!
                                </span>
                            </label>
                        </div>

                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question5_2'
                                name='question'
                                value={`${title?.data?.[9]?.FK_Sep?.Sep}`}
                                onClick={handleClick}
                            />
                            <label htmlFor='question5_2'>
                                <span id='content_data'>
                                    미아보호소에 데려가자
                                    <br />
                                    그게 가장 현명한 선택인 거 같아
                                </span>
                            </label>
                        </div>
                        <div className='back' onClick={returnBack}>
                            <img
                                src='img/before.png'
                                width='85px'
                                height='22px'
                            ></img>
                        </div>
                    </DIV>

                    <DIV
                        id='question6'
                        className='questionWrapper'
                        style={{ display: 'none' }}
                    >
                        <span id='title'>06/12</span>

                        <span id='content'>
                            무섭기로 소문이 자자한
                            <br />
                            놀이 기구를 타러 가는 길..
                        </span>
                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question6_1'
                                name='question'
                                value={`${title?.data?.[10]?.FK_Sep?.Sep}`}
                                onClick={handleClick}
                            />
                            <label htmlFor='question6_1'>
                                <span id='content_data'>
                                    대기시간이 너무 긴데..
                                    <br />
                                    그거 탈 바에 다른 거 여러 개 타자
                                </span>
                            </label>
                        </div>

                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question6_2'
                                name='question'
                                value={`${title?.data?.[11]?.FK_Sep?.Sep}`}
                                onClick={handleClick}
                            />
                            <label htmlFor='question6_2'>
                                <span id='content_data'>
                                    이거 꼭 탄다.. 존버한다..
                                    <br />
                                    이거 안 타면 여기 온 이유가 없지~
                                </span>
                            </label>
                        </div>
                        <div className='back' onClick={returnBack}>
                            <img
                                src='img/before.png'
                                width='85px'
                                height='22px'
                            ></img>
                        </div>
                    </DIV>

                    <DIV
                        id='question7'
                        className='questionWrapper'
                        style={{ display: 'none' }}
                    >
                        <span id='title'>07/12</span>

                        <span id='content'>
                            놀이 기구 줄을 기다리면서 친구가
                            <br />
                            기구에 대해 설명해 준다면?
                        </span>
                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question7_1'
                                name='question'
                                value={`${title?.data?.[12]?.FK_Sep?.Sep}`}
                                onClick={handleClick}
                            />
                            <label htmlFor='question7_1'>
                                <span id='content_data'>
                                    '와 진짜? 얼른 타고 싶어!'
                                    <br />
                                    감탄하면서 설명을 듣는다
                                </span>
                            </label>
                        </div>

                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question7_2'
                                name='question'
                                value={`${title?.data?.[13]?.FK_Sep?.Sep}`}
                                onClick={handleClick}
                            />
                            <label htmlFor='question7_2'>
                                <span id='content_data'>
                                    '아~어(어쩔티비)'
                                    <br />저 앞에 츄러스 맛있겠다..
                                </span>
                            </label>
                        </div>
                        <div className='back' onClick={returnBack}>
                            <img
                                src='img/before.png'
                                width='85px'
                                height='22px'
                            ></img>
                        </div>
                    </DIV>
                    <DIV
                        id='question8'
                        className='questionWrapper'
                        style={{ display: 'none' }}
                    >
                        <span id='title'>08/12</span>

                        <span id='content'>
                            예약해 놓은 놀이 기구가 있는데
                            <br />
                            퍼레이드 시간과 겹친다면?
                        </span>
                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question8_1'
                                name='question'
                                value={`${title?.data?.[14]?.FK_Sep?.Sep}`}
                                onClick={handleClick}
                            />
                            <label htmlFor='question8_1'>
                                <span id='content_data'>
                                    퍼레이드는 못 참지!
                                    <br />
                                    이거 보고 다시 예약할래~
                                </span>
                            </label>
                        </div>

                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question8_2'
                                name='question'
                                value={`${title?.data?.[15]?.FK_Sep?.Sep}`}
                                onClick={handleClick}
                            />
                            <label htmlFor='question8_2'>
                                <span id='content_data'>
                                    예약해 놓은 거 아까워..
                                    <br />
                                    놀이기구 타러 갈래~
                                </span>
                            </label>
                        </div>
                        <div className='back' onClick={returnBack}>
                            <img
                                src='img/before.png'
                                width='85px'
                                height='22px'
                            ></img>
                        </div>
                    </DIV>
                    <DIV
                        id='question9'
                        className='questionWrapper'
                        style={{ display: 'none' }}
                    >
                        <span id='title'>09/12</span>

                        <span id='content'>
                            매점 지갑 분실 사건의 범인이
                            <br />
                            나라고 의심받고 있다..?
                        </span>
                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question9_1'
                                name='question'
                                value={`${title?.data?.[16]?.FK_Sep?.Sep}`}
                                onClick={handleClick}
                            />
                            <label htmlFor='question9_1'>
                                <span id='content_data'>
                                    '저희 그때 놀이기구 타고 있었어요'
                                    <br />
                                    기구 예약시간을 보여준다
                                </span>
                            </label>
                        </div>

                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question9_2'
                                name='question'
                                value={`${title?.data?.[17]?.FK_Sep?.Sep}`}
                                onClick={handleClick}
                            />
                            <label htmlFor='question9_2'>
                                <span id='content_data'>
                                    '방금 매점 왔는데 무슨소리에요;;'
                                    <br />
                                    의심받아서 짜증+불쾌해한다.
                                </span>
                            </label>
                        </div>
                        <div className='back' onClick={returnBack}>
                            <img
                                src='img/before.png'
                                width='85px'
                                height='22px'
                            ></img>
                        </div>
                    </DIV>
                    <DIV
                        id='question10'
                        className='questionWrapper'
                        style={{ display: 'none' }}
                    >
                        <span id='title'>10/12</span>

                        <span id='content'>
                            놀이공원에서 재밌게 놀고 난 후
                            <br />급 2차로 놀자는 친구들
                        </span>
                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question10_1'
                                name='question'
                                value={`${title?.data?.[18]?.FK_Sep?.Sep}`}
                                onClick={handleClick}
                            />
                            <label htmlFor='question10_1'>
                                <span id='content_data'>
                                    너무 피곤해..집 가서
                                    <br />할 일이 많다며 안 간다고 한다
                                </span>
                            </label>
                        </div>

                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question10_2'
                                name='question'
                                value={`${title?.data?.[19]?.FK_Sep?.Sep}`}
                                onClick={handleClick}
                            />
                            <label htmlFor='question10_2'>
                                <span id='content_data'>
                                    오늘이 노는 날이다!!
                                    <br />
                                    2차 무조건 고고~
                                </span>
                            </label>
                        </div>
                        <div className='back' onClick={returnBack}>
                            <img
                                src='img/before.png'
                                width='85px'
                                height='22px'
                            ></img>
                        </div>
                    </DIV>
                    <DIV
                        id='question11'
                        className='questionWrapper'
                        style={{ display: 'none' }}
                    >
                        <span id='title'>11/12</span>

                        <span id='content'>
                            어찌어찌 2차로 오게 된 나,
                            <br />
                            장소는 어디로 가지?
                        </span>
                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question11_1'
                                name='question'
                                value={`${title?.data?.[20]?.FK_Sep?.Sep}`}
                                onClick={handleClick}
                            />
                            <label htmlFor='question11_1'>
                                <span id='content_data'>
                                    여기 완전 감성 인테리어래!
                                    <br />
                                    유리부터 반짝거리는 새로 오픈한 곳
                                </span>
                            </label>
                        </div>

                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question11_2'
                                name='question'
                                value={`${title?.data?.[21]?.FK_Sep?.Sep}`}
                                onClick={handleClick}
                            />
                            <label htmlFor='question11_2'>
                                <span id='content_data'>
                                    늘 가던 거기로 가자~
                                    <br />
                                    어느 동네를 가도 있을 법한 그런 곳
                                </span>
                            </label>
                        </div>
                        <div className='back' onClick={returnBack}>
                            <img
                                src='img/before.png'
                                width='85px'
                                height='22px'
                            ></img>
                        </div>
                    </DIV>
                    <DIV
                        id='question12'
                        className='questionWrapper'
                        style={{ display: 'none' }}
                    >
                        <span id='title'>12/12</span>

                        <span id='content'>
                            2차에서 친구의 지인이
                            <br />
                            같이 놀자며 합석 제안을 한다면?
                        </span>
                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question12_1'
                                name='question'
                                value={`${title?.data?.[22]?.FK_Sep?.Sep}`}
                                onClick={handleClick}
                            />
                            <label htmlFor='question12_1'>
                                <span id='content_data'>
                                    오는 사람 거절하지 않는다구~
                                    <br />
                                    좋다 좋아! 같이 놀자 ㅎㅎ
                                </span>
                            </label>
                        </div>

                        <div className='formfield'>
                            <input
                                type='radio'
                                id='question12_2'
                                name='question'
                                value={`${title?.data?.[23]?.FK_Sep?.Sep}`}
                                onClick={handleClick}
                            />
                            <label htmlFor='question12_2'>
                                <span id='content_data'>
                                    에이 그냥 우리끼리 놀자
                                    <br />
                                    시렁시렁궁시렁..불편해..
                                </span>
                            </label>
                        </div>
                        <div className='final_button'>
                            <div className='final_back' onClick={returnBack}>
                                <img
                                    src='img/before.png'
                                    width='85px'
                                    height='22px'
                                ></img>
                            </div>
                           
                            <div className='submit' onClick={handleSubmit}>
                                <img
                                    src='img/submit.png'
                                    width='85px'
                                    height='22px'
                                ></img>
                            </div>
                                
                        </div>
                    </DIV>
                </BODY>
            </form>
        </>
    );
};

export default Question;
