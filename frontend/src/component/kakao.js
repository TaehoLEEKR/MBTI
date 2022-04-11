import React, { Component } from 'react';
import {Button} from './style';

class Kakao extends Component {
  componentDidMount(props) {
    const { Kakao } = window;
    if (!Kakao.isInitialized()) {
          window.Kakao.init('ab310f715190a43175cae37fd808827d');
    } 

    window.Kakao.Link.createDefaultButton({
      container: '#kakao-link-btn',
      objectType: 'feed',
      content: {
        title: 'MBTI 사이트',
        description: '#MBTI #동물 #놀이기구 #알잘딱깔센',
        imageUrl: 'http://mud-kage.kakao.co.kr/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        link: {
          mobileWebUrl: `https://react-daeho.run.goorm.io/result?value=${this.props.finalResult}`,
          webUrl: `https://react-daeho.run.goorm.io/result?value=${this.props.finalResult}`
        }
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: `https://react-daeho.run.goorm.io/result?value=${this.props.finalResult}`,
            webUrl: `https://react-daeho.run.goorm.io/result?value=${this.props.finalResult}`
          }
        },
      ]
    });
  }
  onClickKakao = () => {
    window.open('https://sharer.kakao.com/talk/friends/picker/link')
  }
  render() {
    return (
      <div className="Kakao">
            <Button><button id="kakao-link-btn" onClick={this.onClickKakao}>{this.props.children}</button></Button>
      </div>
    );
  }
}

export default Kakao;