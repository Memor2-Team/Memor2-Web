import styled from "styled-components";

export const ProfileMain = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;

    background: #E8F5E9;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`

export const ReturnButton = styled.img`
    top: 10px;
    left: 10px;
    width: 40px;
    height: 40px;
    position: absolute;
    cursor: pointer;
`

export const ProfileContainer = styled.div`
    position: absolute;
    width: 650px;
    height: 600px;


    background: #F2F2F2;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`

export const Vector = styled.img`
    position: absolute;
    left: 32.77%;
    right: 32.77%;
    top: 18.83%;
    bottom: 43.83%;

    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;

`

export const NameT = styled.span`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;

    position: absolute;
    width: 232px;
    height: 48px;
    left: 208px;
    top: 368px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    text-align: center;

    color: #000000;


`

export const EmailT = styled.span`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;

    position: absolute;
    width: 348px;
    height: 36px;
    left: 151px;
    top: 423px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;
    text-align: center;

    color: #9E9E9E;


`

export const ButtonContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;

    position: absolute;
    width: 175px;
    height: 50px;
    left: 551px;
    top: 595px;

    margin-left:100px;
`


export const Button = styled.button`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;

    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;

    background: #4CAF50;
    border-radius: 20px;

    position: absolute;


    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 800;
    font-size: 30px;
    line-height: 36px;

    color: #F2F2F2;

    cursor: pointer;
`