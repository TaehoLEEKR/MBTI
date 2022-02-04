import styled from 'styled-Components';

export const Form = styled.form``;

export const BODY = styled.div`
    background-color: #ebe4e4;
`;
export const DIV = styled.div`
    background-image: url('/images/background.jpg');
    min-height: 950px;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #34ebcc;

    h3 {
        color: red;
    }
    h2 {
        margin-top: -200px;
        text-align: center;
    }
    button {
        margin-top: 100px;
        width: 400px;
        height: 100px;
        border: 0;
        outline: none;
        background-color: black;
        color: white;
        font-size: 20px;
        font-weight: 1000;
    }
    button:hover {
        cursor: pointer;
    }
    li {
        list-style: none;
    }
    .Question {
        text-align: center;
    }
    .formfield,
    label {
        display: table-cell;
        text-align: center;
        vertical-align: middle;
        margin-top: 30px;
        width: 400px;
        height: 130px;
        border: 0;
        background-color: white;
        color: black;
        font-size: 20px;
        font-weight: 1000;
    }
    input[type='radio'] {
        display: none;
    }
    .formfield,
    label:hover {
        cursor: pointer;
    }
    .progress {
        width: 210px;
        height: 10px;
        background-color: white;
        margin-top: 30px;
    }
    .progress .progress_bar {
        display: inline-block;
        position: absolute;
        height: 10px;
        background-color: black;
    }
`;

export const Loading = styled.div`
    background-image: url('/images/background.jpg');
    min-height: 950px;
    max-width: 500px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #34ebcc;
    .ring {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 150px;
        height: 150px;
        background: transparent;
        border: 3px solid #3c3c3c;
        border-radius: 50%;
        text-align: center;
        line-height: 150px;
        font-family: sans-serif;
        font-size: 20px;
        color: #fff000;
        letter-spacing: 4px;
        text-transform: uppercase;
        text-shadow: 0 0 10px #fff000;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    }
    .ring:before {
        content: '';
        position: absolute;
        top: -3px;
        left: -3px;
        width: 100%;
        height: 100%;
        border: 3px solid transparent;
        border-top: 3px solid #fff000;
        border-right: 3px solid #fff000;
        border-radius: 50%;
        animation: animateC 2s linear infinite;
    }
    span {
        display: block;
        position: absolute;
        top: calc(50% - 2px);
        left: 50%;
        width: 50%;
        height: 4px;
        background: transparent;
        transform-origin: left;
        animation: animate 2s linear infinite;
    }
    span:before {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        border-radius: 50%;
        background: #fff000;
        top: -6px;
        right: -8px;
        box-shadow: 0 0 20px #fff000;
    }
    @keyframes animateC {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes animate {
        0% {
            transform: rotate(45deg);
        }
        100% {
            transform: rotate(405deg);
        }
    }
`;
