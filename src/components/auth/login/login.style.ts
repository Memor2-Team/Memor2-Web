import styled from "styled-components";

export const LoginMain = styled.div`
    width: 100vw;
    height:100vh;
    background-color: #E8F5E9;

    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`

export const Container = styled.div`
    width :70%;
    height: 75%;
    box-shadow: 0 0 50px 20px rgba(0, 0, 0, 0.2);
    border-radius:10px;
    background-color:white;
    z-index:999;
    display:flex;
    flex-direction:row;
`

export const Left = styled.div`
    position:absolute;
    width: 638px;
    height: 832px;
    left: 0px;
    top: 0px;

    background: #4CAF50;
`

export const Leftbar = styled.div`
    width: 418px;
    height: 625px;

    background-color: #4CAF50;
    z-index: index 999;
    border-radius: 10px 0 0 10px;
`


export const Rightbar = styled.div`
    position:relative;
    display:flex;
    /* flex-direction:row; */
    justify-content:center;
    align-items:center;

    width: 612px;
    height: 601px;
    border-radius:0 10px 10px 0;
`

export const MemoryLogo = styled.img`
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin-top:171px;
    margin-left:159px;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`

export const Title = styled.span`
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;

    color: #FFFFFF;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    margin-top: 9.53px;
    margin-bottom:19.3px;
`

export const SubTitle = styled.span`
    left: 71px;
    top: 364.61px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 800;
    font-size: 25px;
    line-height: 30px;
    text-align: center;

    color: #FFFFFF;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
`

export const LoginT = styled.span`
    position: absolute;
    width: 88px;
    height: 36px;
    left: 247px;
    top: 81px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    text-align: center;

    color: #000000;
`

export const EmailBox = styled.div`
    position: absolute;
    width: 411px;
    height: 95px;
    left: 96px;
    top: 153px;
`

export const EmailT = styled.span`
    position: absolute;
    width: 80px;
    height: 36px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;

    color: #000000;
`

export const EmailInput = styled.input`
    box-sizing: border-box;

    position: absolute;
    width: 411px;
    height: 50px;
    top: 40px;

    background: #FFF;
    border: 1px solid #000000;
    border-radius: 5px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    padding-left: 15px;

    &::placeholder{
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;

        color: #A7A7A7;
    }
`
export const PasswordBox = styled.div`
    position: absolute;
    width: 413px;
    height: 95px;
    left: 94px;
    top: 284px;
`
export const PasswordT = styled.span`
    position: absolute;
    width: 137px;
    height: 30px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;

    color: #000000;


`   

export const PasswordInput = styled.input`
    box-sizing: border-box;

    position: relative;
    width: 411px;
    height: 50px;
    top:40px;

    background: #FFF;
    border: 1px solid #000000;
    border-radius: 5px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    padding-left: 15px;

    &::placeholder{
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;

        color: #A7A7A7;
    }
`

export const PasswordButton = styled.img`
    top: 58px;
    right: 12px;
    position: absolute;
    cursor: pointer;
`

export const Button = styled.div`
    position: absolute;
    width: 411px;
    height:50px;
    margin-top:300px;
    margin-right:14px;
    background: #4CAF50;
    border-radius: 5px;

    display:flex;
    flex-direction:row;
    align-items:center;
    justify-content:center;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 900;
    font-size: 25px;
    line-height: 30px;

    color: #FFFFFF;
    cursor: pointer;
`

export const NewUser = styled.span`
    position: absolute;
    width: 77px;
    height: 18px;
    left: 95px;
    top: 533px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;

    color: #000000;
    cursor: pointer;
`
export const GoSignup = styled.a`
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: 0%;
    margin-left: 85px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 800;
    font-size: 15px;
    line-height: 18px;

    color: #4CAF50;
`