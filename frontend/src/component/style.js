import styled from 'styled-components';

export const BODY = styled.div`
    background-color: #ebe4e4;
    height : 100%;
`;

export const Start = styled.div`
    background-color: white;
    max-width: 500px;
    width : 100%;
    height : 100%;
    min-height: 969px;
    overflow : hidden;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    .title{
    text-align:center;
    }
    
    .image{
    margin-bottom :100px;
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
    
    .formfield:hover{
     background-color: #f5eceb;
    }
    
    .formfield:active{
     background-color: #f5eceb;
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
    margin-top:100px;
    }
    
    .final_back{
     display:flex;
    margin-right:215px;
    }
    
    .back{
    margin-top : 100px;
    margin-right : 300px;
    }
    
    
    
`;


export const Final = styled.div`
    background-color: white;
    max-width: 500px;
    width : 100%;
    overflow : hidden;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align : center;
    
    .mbti_title{
    margin-top:27px;
    font-size:40px;
    font-weight : bold;
    font-family: 'Cafe24Ssurround';
    margin-bottom:25px;
    }
    .mbti_title_description{
    font-size:30px;
    font-weight : bold;
    font-family: 'Cafe24Ssurround';
    color : #D26261;
    margin-bottom:45px;
    }
    .mbti_title_description_chitar{
    font-size:26px;
    font-weight : bold;
    font-family: 'Cafe24Ssurround';
    color : #D26261;
    margin-bottom:45px;
    }
    
    .mbti_title_description_sleep{
     font-size:24px;
    font-weight : bold;
    font-family: 'Cafe24Ssurround';
    color : #D26261;
    margin-bottom:45px;
    }
    
    .mbti_title_description_litriber{
    font-size:24px;
    font-weight : bold;
    font-family: 'Cafe24Ssurround';
    color : #D26261;
    margin-bottom:45px;
    }
    
    .mbti_title_description_skunk{
     font-size:24px;
    font-weight : bold;
    font-family: 'Cafe24Ssurround';
    color : #D26261;
    margin-bottom:45px;
    }
    
    .attraction{
    margin-top:38px;
    margin-bottom:16px;
    font-size : 22px;
    font-weight : bold;
    font-family: 'Cafe24Ssurround';
    }
    
    .animal{
    font-size : 16px;
    font-family: "NanumSquareL";
    margin-bottom:30px;
    }
    .attraction_1{
    margin-bottom:16px;
    font-size : 22px;
    font-weight : bold;
    font-family: 'Cafe24Ssurround';
    }
    .animal_1{
     font-size : 16px;
    font-family: "NanumSquareL";
    margin-bottom:64px;
    }
    .good_bad{
    margin-bottom:110px;
    }
    
    #good{
    margin-right:10px;
    }
    
    .result_share{
    font-size : 20px;
    font-weight: bold;
    font-family : Cafe24Ssurround;
    margin-bottom : 18px;
    }
    .button_flex{
    display: flex;
    margin-bottom:40px;
    }
    
    .button_share{
    margin-bottom : 55px;
    }
    .information{
    display: flex;
    justify-content : center;
    align-items : center;
    width: 100%;
    background-color:gray;
    height : 80px;
    
    }
    
    .info{
    font-size:11px;
    font-family: "NanumSquareL";
    color : white;
    
    }

`;

export const Button = styled.button`
 padding:0;
 border-width : 0;
 button{
 padding:0;
 border-width : 0;
 background-color : white;
 }
`