import { useState, useEffect } from 'react';
import { BODY, Start } from '../style';
import { Link } from 'react-router-dom';
// background-size: 알아보기 깨지는걸 방지
// 인원참여는 백엔드 api를 통해 불러오기
const Main = () => {
    return (
            <BODY>
                <Start>
                    <span id="ImageLetter">지금까지 총 00,000명이 참여했어요!</span> 
                        <Link to='/question'>
                            <div>
                                <img src='img/test.png' width='320' height='100' ></img>
                            </div>  
                        </Link>
                    <Link to='/result'>
                           <img src='img/share.png' width='320' height='100'></img>
                        </Link>
                </Start>
            </BODY>
    );
};

export default Main;
