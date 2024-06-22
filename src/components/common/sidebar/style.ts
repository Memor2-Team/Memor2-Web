import styled from "styled-components";

export const Container = styled.div`
    width: 35%;
    height: 100%;

    display: flex;
    flex-direction: column;

    border-right: 1px solid #c9c9c9;
    background: #E8F5E9;
`

export const UserInfoWrap = styled.div`
    width: 100%;
    height: 30%;

    display: flex;

    padding: 15px 25px;
`

export const UserInfoBox = styled.div`
    width: auto;
    height: 45px;

    display: flex;
    flex-direction: row;
    align-items: center;
`

export const UserInfo = styled.img`
    width: 45px;
    height: 100%;

    cursor: pointer;
    margin-right: 10px;
`

export const UserInfoText = styled.span`
    color: #000;
    font-family: Pretendard-Bold;
    font-size: 1.1rem;
`