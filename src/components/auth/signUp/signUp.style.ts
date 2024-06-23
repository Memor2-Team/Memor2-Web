import styled from "styled-components";

export const SignUpMain = styled.div`
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
    height: 601px;

    background-color: #4CAF50;
    z-index: index 999;
    border-radius: 10px 0 0 10px;

`

export const Rightbar = styled.div`
    position:relative;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;

    width: 612px;
    height: 601px;
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

export const SignUpT = styled.span`
    position: absolute;
    width: 112px;
    height: 36px;
    top:81px;
    left:234px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;

    text-align: center;

    color: #000000;
`

export const IDBox = styled.div`
    position: absolute;
    width: 411px;
    height: 95px;
    left: 96px;
    top: 153px;
`

export const IDT = styled.span`
    position: absolute;
    width: 66.84px;
    height: 36px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;

    color: #000000;
`

export const IDInput = styled.input`
    box-sizing: border-box;

    position: absolute;
    width: 411px;
    height: 50px;
    top: 40px;

    background: #F7FEF7;
    border: 1px solid #000000;
    border-radius: 5px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    text-align:center;

    &::placeholder{
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;

        color: #A7A7A7;
        text-align:center;
    }
`

export const EmailBox = styled.div`
    position: absolute;
    width: 411px;
    height: 95px;
`

export const EmailT = styled.span`
    position: absolute;
    width: 86px;
    height: 36px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 30px;
    line-height: 36px;

    color: #000000;
`

export const EmailInput = styled.input`
    position: absolute;
    width: 411px;
    height: 50px;
    top: 40px;

    background: #F7FEF7;
    border: 1px solid #000000;
    border-radius: 5px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    text-align:center;

    &::placeholder{
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;

        color: #A7A7A7;
        text-align:center;
    }

`
export const PasswordBox = styled.div`
    position: absolute;
    width: 413px;
    height: 95px;
`

export const PasswordT = styled.span`
    position: absolute;
    width: 126px;
    height: 30px;
    top: 100px;

    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 700;
    font-size: 25px;
    line-height: 30px;

    color: #000000;    
`

export const PasswordInput = styled.input`
    position: absolute;
    width: 411px;
    height: 50px;
    top: 140px;

    background: #F7FEF7;
    border: 1px solid #000000;
    border-radius: 5px;
    font-family: 'Pretendard';
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
    line-height: 24px;
    text-align:center;

    &::placeholder{
        font-family: 'Pretendard';
        font-style: normal;
        font-weight: 400;
        font-size: 15px;
        line-height: 24px;

        color: #A7A7A7;
        text-align:center;
    }
`

export const Button = styled.div`
    position: absolute;
    width: 411px;
    height:50px;
    margin-top:400px;

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