import React, { useState, useEffect } from 'react';
import { BODY, Final } from './style';
import { Link, useLocation, useRouter } from 'react-router-dom';
import axios from 'axios';
import Kakao from './kakao.js';
import Facebook from './facebook.js';
import Copy from './copy.js';
import QueryString from 'qs';

const Result = () => {
    const location = useLocation();
    const queryData = QueryString.parse(location.search, {
        ignoreQueryPrefix: true,
    });
    console.log(queryData.value);
    const finalResult = queryData.value;

    return (
        <Final>
            {queryData.value === 'ISFP' ? (
                <>
                    <img
                        src='img/result_top.png'
                        width='500'
                        height='385'
                        class='top'
                    ></img>
                    <div className='mbti_title'>
                        ISFP
                        <br />
                        피터팬 타는 고양이
                    </div>
                    <div className='mbti_title_description'>
                        "후크선장 무찌르자!멋쟁이 피터팬~"
                    </div>
                    <img
                        src='img/cat.png'
                        width='202'
                        height='240'
                        class='bear'
                    ></img>
                    <div className='attraction'>#피터팬</div>
                    <div className='animal'>
                        새로운 환경에 잘 적응하는 용감한 피터팬 같은 당신,
                        <br />
                        실험정신이 뛰어나며,순수하고 창의력이 높아요.
                        <br />
                        아이디어가 넘쳐나는 편이지만 다소 게을러 추진력이
                        떨어져요.
                    </div>
                    <div className='attraction_1'>#고양이</div>
                    <div className='animal_1'>
                        조용하고 겸손해서 타인들에게 친절하지만 동시에
                        <br />
                        매우 독립적이기도 해요. 온화하고 공감 능력이 뛰어나
                        <br />
                        배려심이 깊으며, 인간관계를 중요하게 여기기 때문에
                        <br />
                        감정에 민감하고 예민하게 행동을 하기도 해요.
                    </div>
                    <div className='good_bad'>
                        <Link to='/result?value=ESTJ'>
                            <img
                                src='img/cat_good.png'
                                width='190'
                                height='285'
                                id='good'
                            ></img>
                        </Link>
                        <Link to='/result?value=ENFP'>
                            <img
                                src='img/cat_bad.png'
                                width='190'
                                height='285'
                            ></img>
                        </Link>
                    </div>
                    <span className='result_share'>결과 공유하기</span>
                    <div className='button_flex'>
                        <Kakao finalResult={finalResult}>
                            <img
                                src='img/kakao.png'
                                width='50'
                                height='50'
                                id='kakao'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Kakao>

                        <Facebook finalResult={finalResult}>
                            <img
                                src='img/facebook.png'
                                width='50'
                                height='50'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Facebook>

                        <Copy finalResult={finalResult}>
                            <img
                                src='img/link.png'
                                width='50'
                                height='50'
                            ></img>
                        </Copy>
                    </div>
                    <Link to='/'>
                        <img
                            src='img/reset_button.png'
                            width='245'
                            height='60'
                            class='button_share'
                        ></img>
                    </Link>
                    <div className='information'>
                        <span className='info'>
                            Contact : 679748@naver.com
                            <br />
                            Copytight 2022. twohye All pictures cannot be copied
                            without permission.
                        </span>
                    </div>
                </>
            ) : null}

            {queryData.value === 'ISTJ' ? (
                <>
                    <img
                        src='img/result_top.png'
                        width='500'
                        height='385'
                        class='top'
                    ></img>
                    <div className='mbti_title'>
                        ISTJ
                        <br />
                        회전목마 타는 곰
                    </div>
                    <div className='mbti_title_description'>
                        "빙빙~돌아가는 회전목마처럼~"
                    </div>
                    <img
                        src='img/bear.png'
                        width='210'
                        height='240'
                        class='bear'
                    ></img>
                    <div className='attraction'>#회전목마</div>
                    <div className='animal'>
                        계획적으로 진행되는 것을 좋아하고
                        <br />
                        그에 맞게 움직이며 반복되는 일에 강한 편이에요.
                        <br />
                        갑작스러운 변화가 없으며 매사에 신중해요.
                    </div>
                    <div className='attraction_1'>#곰</div>
                    <div className='animal_1'>
                        자신이 맡은 바 책임을 다하며
                        <br />
                        하는 일에 큰 자부심을 가지고 있어요.
                        <br />
                        하지만 차가운 인상에 낯을 많이 가려
                        <br />
                        새로운 사람을 사귀는 것을 조금 힘들어해요.
                    </div>
                    <div className='good_bad'>
                        <Link to='/result?value=ESTP'>
                            <img
                                src='img/bear_good.png'
                                width='190'
                                height='285'
                                id='good'
                            ></img>
                        </Link>
                        <Link to='/result?value=INFP'>
                            <img
                                src='img/bear_bad.png'
                                width='190'
                                height='285'
                            ></img>
                        </Link>
                    </div>
                    <span className='result_share'>결과 공유하기</span>
                    <div className='button_flex'>
                        <Kakao finalResult={finalResult}>
                            <img
                                src='img/kakao.png'
                                width='50'
                                height='50'
                                id='kakao'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Kakao>

                        <Facebook finalResult={finalResult}>
                            <img
                                src='img/facebook.png'
                                width='50'
                                height='50'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Facebook>

                        <Copy finalResult={finalResult}>
                            <img
                                src='img/link.png'
                                width='50'
                                height='50'
                            ></img>
                        </Copy>
                    </div>
                    <Link to='/'>
                        <img
                            src='img/reset_button.png'
                            width='245'
                            height='60'
                            class='button_share'
                        ></img>
                    </Link>
                    <div className='information'>
                        <span className='info'>
                            Contact : 679748@naver.com
                            <br />
                            Copytight 2022. twohye All pictures cannot be copied
                            without permission.
                        </span>
                    </div>
                </>
            ) : null}

            {queryData.value === 'ISTP' ? (
                <>
                    <img
                        src='img/result_top.png'
                        width='500'
                        height='385'
                        class='top'
                    ></img>
                    <div className='mbti_title'>
                        ISTP
                        <br />
                        침대에서 자는 나무늘보
                    </div>
                    <div className='mbti_title_description_sleep'>
                        "놀이동산은..꿈에..서..즐길ㄹㅐ..흠냐링.."
                    </div>
                    <img
                        src='img/sleep.png'
                        width='225'
                        height='240'
                        class='bear'
                    ></img>
                    <div className='attraction'>#침대</div>
                    <div className='animal'>
                        무엇보다 개인의 시간이 제일 중요한 당신,
                        <br />
                        가끔은 공감 능력이 부족하다는 소리를 듣기도 해요.
                        <br />
                        마음에 없는 소리를 잘 못하는 앞뒤가 똑같은 투명한
                        사람이에요.
                    </div>
                    <div className='attraction_1'>#나무늘보</div>
                    <div className='animal_1'>
                        낙관적이면서 느긋한 성격을 지니고 있어요.
                        <br />
                        미래에 대한 두려운 생각을 하기보다는 당장 오늘을 즐기며
                        <br />
                        살아가는 YOLO족이랍니다. 계획을 세우는 것을 좋아하지만
                        <br />
                        충동적으로 다른 일로 새는 일이 많아요.
                    </div>
                    <div className='good_bad'>
                        <Link to='/result?value=ESFJ'>
                            <img
                                src='img/sleep_good.png'
                                width='190'
                                height='285'
                                id='good'
                            ></img>
                        </Link>
                        <Link to='/result?value=INFJ'>
                            <img
                                src='img/sleep_bad.png'
                                width='190'
                                height='285'
                            ></img>
                        </Link>
                    </div>
                    <span className='result_share'>결과 공유하기</span>
                    <div className='button_flex'>
                        <Kakao finalResult={finalResult}>
                            <img
                                src='img/kakao.png'
                                width='50'
                                height='50'
                                id='kakao'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Kakao>

                        <Facebook finalResult={finalResult}>
                            <img
                                src='img/facebook.png'
                                width='50'
                                height='50'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Facebook>

                        <Copy finalResult={finalResult}>
                            <img
                                src='img/link.png'
                                width='50'
                                height='50'
                            ></img>
                        </Copy>
                    </div>
                    <Link to='/'>
                        <img
                            src='img/reset_button.png'
                            width='245'
                            height='60'
                            class='button_share'
                        ></img>
                    </Link>
                    <div className='information'>
                        <span className='info'>
                            Contact : 679748@naver.com
                            <br />
                            Copytight 2022. twohye All pictures cannot be copied
                            without permission.
                        </span>
                    </div>
                </>
            ) : null}

            {queryData.value === 'INTJ' ? (
                <>
                    <img
                        src='img/result_top.png'
                        width='500'
                        height='385'
                        class='top'
                    ></img>
                    <div className='mbti_title'>
                        INTJ
                        <br />
                        열기구 타는 늑대
                    </div>
                    <div className='mbti_title_description'>
                        "열기구 풍경이 얼~마나 멋있게요~"
                    </div>
                    <img
                        src='img/wolf.png'
                        width='180'
                        height='240'
                        class='bear'
                    ></img>
                    <div className='attraction'>#열기구</div>
                    <div className='animal'>
                        주변인에 대한 기준이 높은 편이며
                        <br />
                        그 기준에 못 미치면 금방 흥미를 잃어요.
                        <br />
                        합리적이며 공정성을 매우 중시하는 편이에요.
                    </div>
                    <div className='attraction_1'>#늑대</div>
                    <div className='animal_1'>
                        자신만의 기준이 높아 칭찬을 잘 하지 않아요.
                        <br />
                        나쁜 상황에 마주쳤을 때 무덤덤하게 받아들이며
                        <br />
                        최악의 상황이 와도 침착히 해결책을 찾아내요.
                        <br />또 하고자 하는 것이 있다면 꼭 해내고 말아요.
                    </div>
                    <div className='good_bad'>
                        <Link to='/result?value=ENFP'>
                            <img
                                src='img/wolf_good.png'
                                width='190'
                                height='285'
                                id='good'
                            ></img>
                        </Link>
                        <Link to='/result?value=ISFP'>
                            <img
                                src='img/wolf_bad.png'
                                width='190'
                                height='285'
                            ></img>
                        </Link>
                    </div>
                    <span className='result_share'>결과 공유하기</span>
                    <div className='button_flex'>
                        <Kakao finalResult={finalResult}>
                            <img
                                src='img/kakao.png'
                                width='50'
                                height='50'
                                id='kakao'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Kakao>

                        <Facebook finalResult={finalResult}>
                            <img
                                src='img/facebook.png'
                                width='50'
                                height='50'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Facebook>

                        <Copy finalResult={finalResult}>
                            <img
                                src='img/link.png'
                                width='50'
                                height='50'
                            ></img>
                        </Copy>
                    </div>
                    <Link to='/'>
                        <img
                            src='img/reset_button.png'
                            width='245'
                            height='60'
                            class='button_share'
                        ></img>
                    </Link>
                    <div className='information'>
                        <span className='info'>
                            Contact : 679748@naver.com
                            <br />
                            Copytight 2022. twohye All pictures cannot be copied
                            without permission.
                        </span>
                    </div>
                </>
            ) : null}

            {queryData.value === 'INFP' ? (
                <>
                    <img
                        src='img/result_top.png'
                        width='500'
                        height='385'
                        class='top'
                    ></img>
                    <div className='mbti_title'>
                        INFP
                        <br />
                        구름빵 타는 다람쥐
                    </div>
                    <div className='mbti_title_description'>
                        “하늘 위로 높이 날아볼까요?”
                    </div>
                    <img
                        src='img/chipmunk.png'
                        width='204'
                        height='240'
                        class='bear'
                    ></img>
                    <div className='attraction'>#구름빵</div>
                    <div className='animal'>
                        차분하고 항상 영감이 넘치며 계획을 세우는 것보다
                        <br />
                        즉흥적으로 대응하는 것을 선호해요. 하지만 많은 사람과의
                        <br />
                        만남은 피곤해하며, 혼자서 시간을 보내는 것을 더
                        좋아해요.
                    </div>
                    <div className='attraction_1'>#다람쥐</div>
                    <div className='animal_1'>
                        세심하고 디테일한 성격을 가지고 있어
                        <br />
                        항상 조심스럽게 행동하고 주변을 의식하여
                        <br />
                        가끔은 스트레스를 받기도, 우울감을 느낄 때도 있어요.
                        <br />
                        하지만 작은 일에도 행복을 느끼며 여유롭고 긍정적으로
                        살아가요.
                    </div>
                    <div className='good_bad'>
                        <Link to='/result?value=ENFJ'>
                            <img
                                src='img/chimpunk_good.png'
                                width='190'
                                height='285'
                                id='good'
                            ></img>
                        </Link>
                        <Link to='/result?value=ISFP'>
                            <img
                                src='img/chimpunk_bad.png'
                                width='190'
                                height='285'
                            ></img>
                        </Link>
                    </div>
                    <span className='result_share'>결과 공유하기</span>
                    <div className='button_flex'>
                        <Kakao finalResult={finalResult}>
                            <img
                                src='img/kakao.png'
                                width='50'
                                height='50'
                                id='kakao'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Kakao>

                        <Facebook finalResult={finalResult}>
                            <img
                                src='img/facebook.png'
                                width='50'
                                height='50'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Facebook>

                        <Copy finalResult={finalResult}>
                            <img
                                src='img/link.png'
                                width='50'
                                height='50'
                            ></img>
                        </Copy>
                    </div>
                    <Link to='/'>
                        <img
                            src='img/reset_button.png'
                            width='245'
                            height='60'
                            class='button_share'
                        ></img>
                    </Link>
                    <div className='information'>
                        <span className='info'>
                            Contact : 679748@naver.com
                            <br />
                            Copytight 2022. twohye All pictures cannot be copied
                            without permission.
                        </span>
                    </div>
                </>
            ) : null}

            {queryData.value === 'INTP' ? (
                <>
                    <img
                        src='img/result_top.png'
                        width='500'
                        height='385'
                        class='top'
                    ></img>
                    <div className='mbti_title'>
                        INTP
                        <br />
                        춤추는 요술집 타는 두더지
                    </div>
                    <div className='mbti_title_description'>
                        ”저와 요리조리 춤추실래요~?“
                    </div>
                    <img
                        src='img/home_mole.png'
                        width='286'
                        height='240'
                        class='bear'
                    ></img>
                    <div className='attraction'>#춤추는 요술집</div>
                    <div className='animal'>
                        감정 표현이 조금 부족해 종종 기계적인 면을 보이는 당신,
                        <br />
                        낯선 이들과 있을 때 극도로 수줍어하지만 비슷한 관심사를
                        가진
                        <br />
                        사람들을 만나면 금세 편안하고 밝은 모습을 보여준답니다.
                    </div>
                    <div className='attraction_1'>#두더지</div>
                    <div className='animal_1'>
                        아무리 복잡한 문제들이 쌓여 있더라도
                        <br />
                        간단하게 문제들을 해치우는 능력이 있어요.
                        <br />
                        독창적이며 지적 호기심이 강하고 논리적이기도 한 당신은
                        <br />
                        자기 주관이 매우 뚜렷한 완벽주의자예요.
                    </div>
                    <div className='good_bad'>
                        <Link to='/result?value=ENTJ'>
                            <img
                                src='img/mole_good.png'
                                width='190'
                                height='285'
                                id='good'
                            ></img>
                        </Link>
                        <Link to='/result?value=ISFJ'>
                            <img
                                src='img/mole_bad.png'
                                width='190'
                                height='285'
                            ></img>
                        </Link>
                    </div>
                    <span className='result_share'>결과 공유하기</span>
                    <div className='button_flex'>
                        <Kakao finalResult={finalResult}>
                            <img
                                src='img/kakao.png'
                                width='50'
                                height='50'
                                id='kakao'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Kakao>

                        <Facebook finalResult={finalResult}>
                            <img
                                src='img/facebook.png'
                                width='50'
                                height='50'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Facebook>

                        <Copy finalResult={finalResult}>
                            <img
                                src='img/link.png'
                                width='50'
                                height='50'
                            ></img>
                        </Copy>
                    </div>
                    <Link to='/'>
                        <img
                            src='img/reset_button.png'
                            width='245'
                            height='60'
                            class='button_share'
                        ></img>
                    </Link>
                    <div className='information'>
                        <span className='info'>
                            Contact : 679748@naver.com
                            <br />
                            Copytight 2022. twohye All pictures cannot be copied
                            without permission.
                        </span>
                    </div>
                </>
            ) : null}

            {queryData.value === 'ISFJ' ? (
                <>
                    <img
                        src='img/result_top.png'
                        width='500'
                        height='385'
                        class='top'
                    ></img>
                    <div className='mbti_title'>
                        ISFJ
                        <br />
                        범퍼카 타는 리트리버
                    </div>
                    <div className='mbti_title_description_litriber'>
                        "다 때려박아 범퍼카~ 면허도 필요없멍"
                    </div>
                    <img
                        src='img/dog.png'
                        width='235'
                        height='240'
                        class='bear'
                    ></img>
                    <div className='attraction'>#범퍼카</div>
                    <div className='animal'>
                        다양한 연령대에게 인기가 많은 당신,
                        <br />
                        타인에게 좋은 이미지로 인식되는 경우가 많으며
                        <br />
                        사소한 것에도 크게 영향을 받는 편이에요.
                    </div>
                    <div className='attraction_1'>#리트리버</div>
                    <div className='animal_1'>
                        눈치가 빨라 상대방의 성향과 분위기를
                        <br />
                        잘 파악하며 그에 맞게 알잘딱깔센 행동합니다.
                        <br />
                        하지만 그것을 티 내려고 하지 않고
                        <br />
                        주위 사람들을 만족시키는 것에 최선을 다해요.
                    </div>
                    <div className='good_bad'>
                        <Link to='/result?value=ESFP'>
                            <img
                                src='img/litriber_good.png'
                                width='190'
                                height='285'
                                id='good'
                            ></img>
                        </Link>
                        <Link to='/result?value=ENFP'>
                            <img
                                src='img/litriber_bad.png'
                                width='190'
                                height='285'
                            ></img>
                        </Link>
                    </div>
                    <span className='result_share'>결과 공유하기</span>
                    <div className='button_flex'>
                        <Kakao finalResult={finalResult}>
                            <img
                                src='img/kakao.png'
                                width='50'
                                height='50'
                                id='kakao'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Kakao>

                        <Facebook finalResult={finalResult}>
                            <img
                                src='img/facebook.png'
                                width='50'
                                height='50'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Facebook>

                        <Copy finalResult={finalResult}>
                            <img
                                src='img/link.png'
                                width='50'
                                height='50'
                            ></img>
                        </Copy>
                    </div>
                    <Link to='/'>
                        <img
                            src='img/reset_button.png'
                            width='245'
                            height='60'
                            class='button_share'
                        ></img>
                    </Link>
                    <div className='information'>
                        <span className='info'>
                            Contact : 679748@naver.com
                            <br />
                            Copytight 2022. twohye All pictures cannot be copied
                            without permission.
                        </span>
                    </div>
                </>
            ) : null}

            {queryData.value === 'ENTJ' ? (
                <>
                    <img
                        src='img/result_top.png'
                        width='500'
                        height='385'
                        class='top'
                    ></img>
                    <div className='mbti_title'>
                        ENTJ
                        <br />
                        스카이엑스 타는 사자
                    </div>
                    <div className='mbti_title_description'>
                        "3. 2. 1! 활강~~! 어흥!!!“
                    </div>
                    <img
                        src='img/skyx.png'
                        width='228'
                        height='240'
                        class='bear'
                    ></img>
                    <div className='attraction'>#스카이엑스</div>
                    <div className='animal'>
                        항상 새로운 아이디어에 관심이 넘치며
                        <br />
                        계획을 짜고 실행하는 것에 대해 유능해요.
                        <br />
                        완벽을 추구하기 때문에 타인이 비집고 들어갈 틈이 없어요.
                    </div>
                    <div className='attraction_1'>#사자</div>
                    <div className='animal_1'>
                        외로움을 타는 편이라 혼자 있는 것을 싫어해요.
                        <br />
                        어려운 상황을 마주해도 오히려 자극이 되어 쉽게 처리하며
                        <br />
                        자기 주관이 확고하여 꼰대들에게 가장 많이
                        <br />
                        저항하는 유형으로 알려져 있어요.
                    </div>
                    <div className='good_bad'>
                    
                            <img
                                src='img/lion_good.png'
                                width='190'
                                height='285'
                                style={{ marginRight: '10px' }}
                            ></img>
                      
                <Link to='/result?value=ENFP'>
                        <img
                            src='img/lion_bad.png'
                            width='190'
                            height='285'
                            id='good'
                        ></img>
                      </Link>
                    </div>
                    <span className='result_share'>결과 공유하기</span>
                    <div className='button_flex'>
                        <Kakao finalResult={finalResult}>
                            <img
                                src='img/kakao.png'
                                width='50'
                                height='50'
                                id='kakao'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Kakao>

                        <Facebook finalResult={finalResult}>
                            <img
                                src='img/facebook.png'
                                width='50'
                                height='50'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Facebook>

                        <Copy finalResult={finalResult}>
                            <img
                                src='img/link.png'
                                width='50'
                                height='50'
                            ></img>
                        </Copy>
                    </div>
                    <Link to='/'>
                        <img
                            src='img/reset_button.png'
                            width='245'
                            height='60'
                            class='button_share'
                        ></img>
                    </Link>
                    <div className='information'>
                        <span className='info'>
                            Contact : 679748@naver.com
                            <br />
                            Copytight 2022. twohye All pictures cannot be copied
                            without permission.
                        </span>
                    </div>
                </>
            ) : null}

            {queryData.value === 'ENTP' ? (
                <>
                    <img
                        src='img/result_top.png'
                        width='500'
                        height='385'
                        class='top'
                    ></img>
                    <div className='mbti_title'>
                        ENTP
                        <br />
                        티익스프레스 타는 스컹크
                    </div>
                    <div className='mbti_title_description_skunk'>
                        “T 레디 체킹 굿~ 정상높이 무려 56미컹!”
                    </div>
                    <img
                        src='img/skunk.png'
                        width='215'
                        height='240'
                        class='bear'
                    ></img>
                    <div className='attraction'>#티익스프레스</div>
                    <div className='animal'>
                        이해력과 통찰력이 뛰어나 복잡한 문제 해결이 빠르며 재치
                        있고
                        <br />
                        카리스마가 넘쳐 모든 일에 열정적으로 잘 수행하는 능력이
                        있어요.
                        <br />
                        항상 새로운 것을 추구하여 모험심 또한 강하답니다.
                    </div>
                    <div className='attraction_1'>#스컹크</div>
                    <div className='animal_1'>
                        지치지 않는 에너자이저! 매우 활발하고 활동적이에요.
                        <br />
                        호기심이 넘쳐 늘 새로운 것에 흥미와 열정을 붓는
                        편이에요.
                        <br />
                        자기애가 강하여 남들보다 호불호가 확실하며
                        <br />
                        맞춰주지 않은 건데 눈치 없는 사람으로 비치기도 해요.
                    </div>
                    <div className='good_bad'>
                        <Link to='/result?value=INTJ'>
                            <img
                                src='img/skunk_good.png'
                                width='190'
                                height='285'
                                id='good'
                            ></img>
                        </Link>
                        <Link to='/result?value=ISFJ'>
                            <img
                                src='img/skunk_bad.png'
                                width='190'
                                height='285'
                            ></img>
                        </Link>
                    </div>
                    <span className='result_share'>결과 공유하기</span>
                    <div className='button_flex'>
                        <Kakao finalResult={finalResult}>
                            <img
                                src='img/kakao.png'
                                width='50'
                                height='50'
                                id='kakao'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Kakao>

                        <Facebook finalResult={finalResult}>
                            <img
                                src='img/facebook.png'
                                width='50'
                                height='50'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Facebook>

                        <Copy finalResult={finalResult}>
                            <img
                                src='img/link.png'
                                width='50'
                                height='50'
                            ></img>
                        </Copy>
                    </div>
                    <Link to='/'>
                        <img
                            src='img/reset_button.png'
                            width='245'
                            height='60'
                            class='button_share'
                        ></img>
                    </Link>
                    <div className='information'>
                        <span className='info'>
                            Contact : 679748@naver.com
                            <br />
                            Copytight 2022. twohye All pictures cannot be copied
                            without permission.
                        </span>
                    </div>
                </>
            ) : null}

            {queryData.value === 'ENFP' ? (
                <>
                    <img
                        src='img/result_top.png'
                        width='500'
                        height='385'
                        class='top'
                    ></img>
                    <div className='mbti_title'>
                        ENFP
                        <br />
                        아마존 타는 시바견
                    </div>
                    <div className='mbti_title_description_chitar'>
                        ”원! 투! 아마존~ 웰컴 투 컴 투 멍!“
                    </div>
                    <img
                        src='img/amazon.png'
                        width='282'
                        height='240'
                        class='bear'
                    ></img>
                    <div className='attraction'>#아마존 익스프레스</div>
                    <div className='animal'>
                        강력한 도전정신으로 새로운 일에 도전하는 것을 좋아해요.
                        <br />
                        관심을 갖고 있는 일들이 많으며, 갑작스러운 변화로
                        <br />
                        가까이에 있는 지인들을 놀라게 해요.
                    </div>
                    <div className='attraction_1'>#시바견</div>
                    <div className='animal_1'>
                        공감 능력과 사교성이 강해 친구들 사이에서
                        <br />
                        분위기 메이커로 통하며 새로운 친구를 사귈 때 즐거움과
                        <br />
                        행복을 느껴요. 사랑을 위해 또는 꿈을 위해
                        <br />
                        기꺼이 바보가 될 준비가 되어 있어요.
                    </div>
                    <div className='good_bad'>
                        <Link to='/result?value=INFP'>
                            <img
                                src='img/dog_good.png'
                                width='190'
                                height='285'
                                id='good'
                            ></img>
                        </Link>
                        <Link to='/result?value=ISFP'>
                            <img
                                src='img/dog_bad.png'
                                width='190'
                                height='285'
                            ></img>
                        </Link>
                    </div>
                    <span className='result_share'>결과 공유하기</span>
                    <div className='button_flex'>
                        <Kakao finalResult={finalResult}>
                            <img
                                src='img/kakao.png'
                                width='50'
                                height='50'
                                id='kakao'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Kakao>

                        <Facebook finalResult={finalResult}>
                            <img
                                src='img/facebook.png'
                                width='50'
                                height='50'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Facebook>

                        <Copy finalResult={finalResult}>
                            <img
                                src='img/link.png'
                                width='50'
                                height='50'
                            ></img>
                        </Copy>
                    </div>
                    <Link to='/'>
                        <img
                            src='img/reset_button.png'
                            width='245'
                            height='60'
                            class='button_share'
                        ></img>
                    </Link>
                    <div className='information'>
                        <span className='info'>
                            Contact : 679748@naver.com
                            <br />
                            Copytight 2022. twohye All pictures cannot be copied
                            without permission.
                        </span>
                    </div>
                </>
            ) : null}

            {queryData.value === 'INFJ' ? (
                <>
                    <img
                        src='img/result_top.png'
                        width='500'
                        height='385'
                        class='top'
                    ></img>
                    <div className='mbti_title'>
                        INFJ
                        <br />
                        신밧드의 모험 타는 알파카
                    </div>
                    <div className='mbti_title_description_chitar'>
                        "알파카와 함께 모험을 떠나요~"
                    </div>
                    <img
                        src='img/alphaca.png'
                        width='168'
                        height='240'
                        class='bear'
                    ></img>
                    <div className='attraction'>#신밧드의 모험</div>
                    <div className='animal'>
                        평소에는 조용히 다니는 것을 좋아하나
                        <br />
                        가끔 좀 튀고 싶을 때가 있어요.
                        <br />
                        감정이 풍부하며 갬성을 좋아하는 내향인이에요.
                    </div>
                    <div className='attraction_1'>#알파카</div>
                    <div className='animal_1'>
                        친하고 마음 맞는 친구와 단둘이 노는 것을 좋아하며
                        <br />
                        내 사람이라고 생각이 되면 진짜 잘해줘요.
                        <br />
                        그 외 다른 사람들에게는
                        <br />
                        개별적으로 성격을 맞춰주는 편이에요.
                    </div>
                    <div className='good_bad'>
                        <Link to='/result?value=ENFP'>
                            <img
                                src='img/alphca_good.png'
                                width='190'
                                height='285'
                                id='good'
                            ></img>
                        </Link>
                        <Link to='/result?value=ISTJ'>
                            <img
                                src='img/alphca_bad.png'
                                width='190'
                                height='285'
                            ></img>
                        </Link>
                    </div>
                    <span className='result_share'>결과 공유하기</span>
                    <div className='button_flex'>
                        <Kakao finalResult={finalResult}>
                            <img
                                src='img/kakao.png'
                                width='50'
                                height='50'
                                id='kakao'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Kakao>

                        <Facebook finalResult={finalResult}>
                            <img
                                src='img/facebook.png'
                                width='50'
                                height='50'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Facebook>

                        <Copy finalResult={finalResult}>
                            <img
                                src='img/link.png'
                                width='50'
                                height='50'
                            ></img>
                        </Copy>
                    </div>
                    <Link to='/'>
                        <img
                            src='img/reset_button.png'
                            width='245'
                            height='60'
                            class='button_share'
                        ></img>
                    </Link>
                    <div className='information'>
                        <span className='info'>
                            Contact : 679748@naver.com
                            <br />
                            Copytight 2022. twohye All pictures cannot be copied
                            without permission.
                        </span>
                    </div>
                </>
            ) : null}

            {queryData.value === 'ENFJ' ? (
                <>
                    <img
                        src='img/result_top.png'
                        width='500'
                        height='385'
                        class='top'
                    ></img>
                    <div className='mbti_title'>
                        ENFJ
                        <br />
                        둥실 비행선 타는 쿼카
                    </div>
                    <div className='mbti_title_description_chitar'>
                        "둥실둥실~ 행복한 여행을 떠나요~"
                    </div>
                    <img
                        src='img/airplanequaqar.png'
                        width='224'
                        height='240'
                        class='bear'
                    ></img>
                    <div className='attraction'>#둥실 비행선</div>
                    <div className='animal'>
                        신나고 재미있는 성격이어서 호감형에 속해요.
                        <br />
                        많은 사람들에게 사랑을 받고 싶어 하며
                        <br />
                        어떤 일이든지 긍정적으로 보려는 시각이 강해요.
                    </div>
                    <div className='attraction_1'>#쿼카</div>
                    <div className='animal_1'>
                        사람을 좋아하고 남에게 잘 맞춰주는 편이며
                        <br />
                        호기심이 많아 어떤 일이든지 직접 해봐야 직성이 풀려요.
                        <br />
                        타인에게는 관대하나 본인에게는 매우 엄격해요.
                        <br />
                        인정과 칭찬받는 일에서 열중할 수 있어요.
                    </div>
                    <div className='good_bad'>
                        <Link to='/result?value=INFP'>
                            <img
                                src='img/quqar_good.png'
                                width='190'
                                height='285'
                                id='good'
                            ></img>
                        </Link>
                        <Link to='/result?value=ESFP'>
                            <img
                                src='img/quqar_bad.png'
                                width='190'
                                height='285'
                            ></img>
                        </Link>
                    </div>
                    <span className='result_share'>결과 공유하기</span>
                    <div className='button_flex'>
                        <Kakao finalResult={finalResult}>
                            <img
                                src='img/kakao.png'
                                width='50'
                                height='50'
                                id='kakao'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Kakao>

                        <Facebook finalResult={finalResult}>
                            <img
                                src='img/facebook.png'
                                width='50'
                                height='50'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Facebook>

                        <Copy finalResult={finalResult}>
                            <img
                                src='img/link.png'
                                width='50'
                                height='50'
                            ></img>
                        </Copy>
                    </div>
                    <Link to='/'>
                        <img
                            src='img/reset_button.png'
                            width='245'
                            height='60'
                            class='button_share'
                        ></img>
                    </Link>
                    <div className='information'>
                        <span className='info'>
                            Contact : 679748@naver.com
                            <br />
                            Copytight 2022. twohye All pictures cannot be copied
                            without permission.
                        </span>
                    </div>
                </>
            ) : null}

            {queryData.value === 'ESFJ' ? (
                <>
                    <img
                        src='img/result_top.png'
                        width='500'
                        height='385'
                        class='top'
                    ></img>
                    <div className='mbti_title'>
                        ESFJ
                        <br />
                        자이로드롭 타는 판다
                    </div>
                    <div className='mbti_title_description_chitar'>
                        " 쭉쭉 올라가 하늘 끝까지! 우주 끝까지! “
                    </div>
                    <img
                        src='img/panda.png'
                        width='158'
                        height='240'
                        class='bear'
                    ></img>
                    <div className='attraction'>#자이로드롭</div>
                    <div className='animal'>
                        긍정적이고 낙천적으로 분위기를 띄우는 것에 능숙하며
                        <br />
                        상대방을 재밌게 하는 경향이 있어요.
                        <br />
                        시간이 여유 있는 상황이더라도 혼자 조급해해요.
                    </div>
                    <div className='attraction_1'>#판다</div>
                    <div className='animal_1'>
                        준비성이 철저하며, 참을성이 많고 타인을 잘 도와요.
                        <br />
                        예의가 바르고 친절하며 적응력도 빠른 편이에요.
                        <br />
                        한 번 좋아하면 헌신을 다하며, 이해하기 힘든 상황이 와도
                        <br />
                        ‘그럴 수 있지~’라는 마음으로 넘어가요.
                    </div>
                    <div className='good_bad'>
                        <Link to='/result?value=ISFP'>
                            <img
                                src='img/panda_good.png'
                                width='190'
                                height='285'
                                id='good'
                            ></img>
                        </Link>
                        <Link to='/result?value=ENFJ'>
                            <img
                                src='img/panda_bad.png'
                                width='190'
                                height='285'
                            ></img>
                        </Link>
                    </div>
                    <span className='result_share'>결과 공유하기</span>
                    <div className='button_flex'>
                        <Kakao finalResult={finalResult}>
                            <img
                                src='img/kakao.png'
                                width='50'
                                height='50'
                                id='kakao'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Kakao>

                        <Facebook finalResult={finalResult}>
                            <img
                                src='img/facebook.png'
                                width='50'
                                height='50'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Facebook>

                        <Copy finalResult={finalResult}>
                            <img
                                src='img/link.png'
                                width='50'
                                height='50'
                            ></img>
                        </Copy>
                    </div>
                    <Link to='/'>
                        <img
                            src='img/reset_button.png'
                            width='245'
                            height='60'
                            class='button_share'
                        ></img>
                    </Link>
                    <div className='information'>
                        <span className='info'>
                            Contact : 679748@naver.com
                            <br />
                            Copytight 2022. twohye All pictures cannot be copied
                            without permission.
                        </span>
                    </div>
                </>
            ) : null}

            {queryData.value === 'ESFP' ? (
                <>
                    <img
                        src='img/result_top.png'
                        width='500'
                        height='385'
                        class='top'
                    ></img>
                    <div className='mbti_title'>
                        ESFP
                        <br />
                        혜성특급 타는 펭귄
                    </div>
                    <div className='mbti_title_description_chitar'>
                        “신나는 우주여행 빵야 빵야 펭야~!”
                    </div>
                    <img
                        src='img/pengiun.png'
                        width='196'
                        height='240'
                        class='bear'
                    ></img>
                    <div className='attraction'>#혜성특급</div>
                    <div className='animal'>
                        에너지가 많으며 개성이 강하고 변화에 잘 적응해요.
                        <br />
                        먼 미래보다는 현재에 집중하고 즐거움을 추구해요.
                        <br />
                        이론적인 경험보다 직접 체험하는 경험을 더 선호한답니다.
                    </div>
                    <div className='attraction_1'>#펭귄</div>
                    <div className='animal_1'>
                        일을 미루고 미루다가 한 번에 몰아서 해결하는 편이에요.
                        <br />
                        결정을 내리는 것을 어려워하고
                        <br />
                        종종 시간 관리를 잘 못하기도 해요.
                        <br />
                        갈등이 생기면 해결하기보다는 회피하고 싶어 해요.
                    </div>
                    <div className='good_bad'>
                        <Link to='/result?value=ISFP'>
                            <img
                                src='img/pengiun_good.png'
                                width='190'
                                height='285'
                                id='good'
                            ></img>
                        </Link>
                        <Link to='/result?value=ENFJ'>
                            <img
                                src='img/pengiun_bad.png'
                                width='190'
                                height='285'
                            ></img>
                        </Link>
                    </div>
                    <span className='result_share'>결과 공유하기</span>
                    <div className='button_flex'>
                        <Kakao finalResult={finalResult}>
                            <img
                                src='img/kakao.png'
                                width='50'
                                height='50'
                                id='kakao'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Kakao>

                        <Facebook finalResult={finalResult}>
                            <img
                                src='img/facebook.png'
                                width='50'
                                height='50'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Facebook>

                        <Copy finalResult={finalResult}>
                            <img
                                src='img/link.png'
                                width='50'
                                height='50'
                            ></img>
                        </Copy>
                    </div>
                    <Link to='/'>
                        <img
                            src='img/reset_button.png'
                            width='245'
                            height='60'
                            class='button_share'
                        ></img>
                    </Link>
                    <div className='information'>
                        <span className='info'>
                            Contact : 679748@naver.com
                            <br />
                            Copytight 2022. twohye All pictures cannot be copied
                            without permission.
                        </span>
                    </div>
                </>
            ) : null}

            {queryData.value === 'ESTP' ? (
                <>
                    <img
                        src='img/result_top.png'
                        width='500'
                        height='385'
                        class='top'
                    ></img>
                    <div className='mbti_title'>
                        ESTP
                        <br />
                        바이킹 타는 호랑이
                    </div>
                    <div className='mbti_title_description_chitar'>
                        “놀이공원의 왕! 동물의 왕! 왕중의 왕”
                    </div>
                    <img
                        src='img/tiger.png'
                        width='238'
                        height='240'
                        class='bear'
                    ></img>
                    <div className='attraction'>#바이킹</div>
                    <div className='animal'>
                        논리적이며 현실감각에 강해 문제를 빠르게 해결할 수 있는
                        당신,
                        <br />
                        길게 말하는 것보다 짧고 간결하게 요약된 것을 더
                        선호해요.
                        <br />
                        유머감각과 센스가 넘쳐 다소 즉흥적인 사람이기도 해요.
                    </div>
                    <div className='attraction_1'>#호랑이</div>
                    <div className='animal_1'>
                        눈치가 빠르고 순발력이 뛰어나며 에너지가 넘쳐요.
                        <br />
                        남이 잘난척 하는 건 보기 싫어하지만 본인은 항상 튀고
                        싶어 해요.
                        <br />
                        행동력이 강한 당신은 어디서나 뛰어난 적응력과
                        <br />
                        사교성을 뽐내며 여러 사람들과 잘 지내요.
                    </div>
                    <div className='good_bad'>
                        <Link to='/result?value=ISFJ'>
                            <img
                                src='img/tiger_good.png'
                                width='190'
                                height='285'
                                id='good'
                            ></img>
                        </Link>
                        <Link to='/result?value=ENFP'>
                            <img
                                src='img/tiger_bad.png'
                                width='190'
                                height='285'
                            ></img>
                        </Link>
                    </div>
                    <span className='result_share'>결과 공유하기</span>
                    <div className='button_flex'>
                        <Kakao finalResult={finalResult}>
                            <img
                                src='img/kakao.png'
                                width='50'
                                height='50'
                                id='kakao'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Kakao>

                        <Facebook finalResult={finalResult}>
                            <img
                                src='img/facebook.png'
                                width='50'
                                height='50'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Facebook>

                        <Copy finalResult={finalResult}>
                            <img
                                src='img/link.png'
                                width='50'
                                height='50'
                            ></img>
                        </Copy>
                    </div>
                    <Link to='/'>
                        <img
                            src='img/reset_button.png'
                            width='245'
                            height='60'
                            class='button_share'
                        ></img>
                    </Link>
                    <div className='information'>
                        <span className='info'>
                            Contact : 679748@naver.com
                            <br />
                            Copytight 2022. twohye All pictures cannot be copied
                            without permission.
                        </span>
                    </div>
                </>
            ) : null}

            {queryData.value === 'ESTJ' ? (
                <>
                    <img
                        src='img/result_top.png'
                        width='500'
                        height='385'
                        class='top'
                    ></img>
                    <div className='mbti_title'>
                        ESTJ
                        <br />
                        후룸라이드 타는 치타
                    </div>
                    <div className='mbti_title_description_chitar'>
                        "누구보다 빠르게 난 남들과는 다르게 슝~"
                    </div>
                    <img
                        src='img/chitar.png'
                        width='270'
                        height='240'
                        class='bear'
                    ></img>
                    <div className='attraction'>#후룸라이드</div>
                    <div className='animal'>
                        일을 계획적으로 구성하고 그에 맞게 실행하여
                        <br />
                        조직의 지도자가 되는 것을 좋아해요
                        <br />
                        성격이 급하여 말과 걸음이 빠른 편이에요.
                    </div>
                    <div className='attraction_1'>#치타</div>
                    <div className='animal_1'>
                        좋고 실음이 확실하며 주변에서 고집이 세다고 말해요.
                        <br />
                        한 번 시작한 일은 철저하게 뿌리를 뽑아 끝내요.
                        <br />
                        한가하고 여유로우면 불안하여 몸을 가만히 두지 못해
                        <br />
                        항상 피곤해 하는 편이에요.
                    </div>
                    <div className='good_bad'>
                        <Link to='/result?value=ISTP'>
                            <img
                                src='img/chitar_good.png'
                                width='190'
                                height='285'
                                id='good'
                            ></img>
                        </Link>
                        <Link to='/result?value=INFP'>
                            <img
                                src='img/chitar_bad.png'
                                width='190'
                                height='285'
                            ></img>
                        </Link>
                    </div>
                    <span className='result_share'>결과 공유하기</span>
                    <div className='button_flex'>
                        <Kakao finalResult={finalResult}>
                            <img
                                src='img/kakao.png'
                                width='50'
                                height='50'
                                id='kakao'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Kakao>

                        <Facebook finalResult={finalResult}>
                            <img
                                src='img/facebook.png'
                                width='50'
                                height='50'
                                style={{ marginRight: '10px' }}
                            ></img>
                        </Facebook>

                        <Copy finalResult={finalResult}>
                            <img
                                src='img/link.png'
                                width='50'
                                height='50'
                            ></img>
                        </Copy>
                    </div>
                    <Link to='/'>
                        <img
                            src='img/reset_button.png'
                            width='245'
                            height='60'
                            class='button_share'
                        ></img>
                    </Link>
                    <div className='information'>
                        <span className='info'>
                            Contact : 679748@naver.com
                            <br />
                            Copytight 2022. twohye All pictures cannot be copied
                            without permission.
                        </span>
                    </div>
                </>
            ) : null}
        </Final>
    );
};

export default Result;
