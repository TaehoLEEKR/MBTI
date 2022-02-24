import styled from 'styled-components';

export const BODY = styled.div`
    background-color: #ebe4e4;
`;

export const Start = styled.div`
    background-image: url('img/background.png');
    min-height: 969px;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    span {
        margin-top: 180px;
        margin-bottom: 40px;
    }

    #ImageLetter {
        font-family: 'NanumSquareL';
        color: black;
        font-size: 23px;
        font-weight: bold;
        letter-spacing: -1.5px;
    }
`;

export const DIV = styled.div`
    background-image: url('img/question_background.png');
    min-height: 950px;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    #title{
        margin-top: 244px;
        margin-bottom: 38px;
        text-align: center;
        font-family: 'Cafe24Ssurround';
        font-size : 30px;
        font-weight : bold;
        color:gray;
    }
    
    #content{
    font-family: 'NanumSquareEB';
    font-size:32px;
    line-height:40px;
    letter-spacing :-2px;
    margin-bottom:103px;
    text-align: center;
    color:black;
    font-weight:bold;
    }
    
    .formfield
    {
        display:flex;
        justify-content:center;
        align-items:center;
        width: 380px;
        height: 104px;
        border: 4px solid #D66261;
        border-radius : 20px;
        text-align: center;
        margin-bottom : 24px;
    }
    
    #content_data{
    font-size: 18px;
    line-height:27px;
    letter-spacing:2px;
    color: #D66261;
    font-weight:bold;
    font-family : 'NanumSquareB';
    }
    
    input[type='radio'] {
        display: none;
    }
           
    .formfield,
    label:hover {
        cursor: pointer;
    }
    
    button {
    margin-top:120px;
    margin-right:200px;
    position : left;
    }
    
    .final_button{
    display:flex;
    justify-content: space-between;
    }
    
    .back{
    margin-top : 100px;
    margin-right : 300px;
    }
    
    .final_back{
    margin-top : 100px;
    margin-right : 100px;
    }
    
    .submit{
    margin-top : 100px;
    margin-right : 0px;
    }
    
    
`;
