import { useState, useEffect } from 'react';
import { BODY, Start } from './style';
import { Link } from 'react-router-dom';
import '../App.css'
import KakaoMain from './kakaoMain.js';

const Main = () => {
    return (
            <BODY>
                <Start>
                    <img src='img/background_top.png' width='500' height='500' class="top"></img>
                    <div className='title'>
                    <img src='img/title.png' width='400' height='180' class="image"></img>
                       
                        <Link to='/question'>
                                <img src='img/test.png' width='320' height='100' class="button_start" ></img>
                        </Link>
                        <KakaoMain>
                        <img src='img/share.png' width='320' height='100' class="button_share">
                        </img>
                        </KakaoMain>
                           
                    </div>
                    <img src='img/background_bottom.png' width='500' height='500' class="bottom">
                    
                    </img>
                </Start>
            </BODY>
    );
};

export default Main;
