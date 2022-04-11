import React from 'react';
import {Button} from './style';

const Facebook = (props) => {
    
    const onClickfacebook= ()=>{
        let sendUrl = `https://react-daeho.run.goorm.io/result?value=${props.finalResult}` // 전달할 URL
        window.open("http://www.facebook.com/sharer/sharer.php?u=" + sendUrl);
    }
    

    return (
      <div className="facebook">
            <Button><button id="facebook-link-btn" onClick={onClickfacebook}>{props.children}</button></Button>
      </div>
    );
}

export default Facebook;
