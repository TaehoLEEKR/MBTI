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
        imageUrl: 'https://proxy.goorm.io//service/6203c7b304ddbfd2b4a26683_dbNhf4SBZOLzGxZ56SF.run.goorm.io/9080//file/load/result_top.png?path=d29ya3NwYWNlJTJGTUJUSV9BUEklMkZmcm9udGVuZCUyRnB1YmxpYyUyRmltZyUyRnJlc3VsdF90b3AucG5n&docker_id=dbNhf4SBZOLzGxZ56SF&secure_session_id=WfAyLtIXSt0CMtv_9kk84CupWb5NAUn_',
        link: {
          mobileWebUrl: `https://animal-rides-mbti.run.goorm.io/result?value=${this.props.finalResult}`,
          webUrl: `https://animal-rides-mbti.run.goorm.io/result?value=${this.props.finalResult}`
        }
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: `https://animal-rides-mbti.run.goorm.io/result?value=${this.props.finalResult}`,
            webUrl: `https://animal-rides-mbti.run.goorm.io/result?value=${this.props.finalResult}`
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