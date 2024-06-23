import * as S from "./style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserInfoIcon from "src/assets/img/sidebar/User_Info_Icon.svg";
import MemoCreateIcon from "src/assets/img/sidebar/MemoCreate_Icon.svg";
import MemoModifyIcon from "src/assets/img/sidebar/MemoModify_Icon.svg";
import MemoDeleteIcon from "src/assets/img/sidebar/MemoDelete_Icon.svg";

const Sidebar = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("my");

  const handleClickCategory = (category: string) => {
    setCategory(category);
    if (category === "my") {
      navigate("/")
    } else {
      navigate("all")
    }
  }

  return (
    <S.Container>
      <S.UserInfoWrap>
        <S.UserInfoBox onClick={() => navigate("/my-info")}>
          <S.UserInfo src={UserInfoIcon}></S.UserInfo>
          <S.UserInfoText>내 정보</S.UserInfoText>
        </S.UserInfoBox>
      </S.UserInfoWrap>
      <S.CategoryWrap>
        <S.AllButton $color={category} onClick={() => handleClickCategory("all")}>전체</S.AllButton>
        <S.MyButton $color={category} onClick={() => handleClickCategory("my")}>내 메모</S.MyButton>
      </S.CategoryWrap>
      <S.MemoListWrap>
        <S.MemoListButtonWrap>
          <S.MemoListTitle>{category === "my" ? "내가 작성한 메모" : "작성된 메모"}</S.MemoListTitle>
          <S.MemoCreateButton src={MemoCreateIcon} onClick={() => navigate("write")}></S.MemoCreateButton>
        </S.MemoListButtonWrap>
        <S.MemoList>
        {Array.from({ length: 10 }).map((_, idx) => (
          <S.Memo key={idx}>
            <S.MemoTitleWrap onClick={() => navigate(`/${idx}`)}>
              <S.MemoTitle>일하기 싫어요</S.MemoTitle>
            </S.MemoTitleWrap>
            <S.MemoButtonWrap>
              <S.MemoButton src={MemoModifyIcon} onClick={() => navigate("/modify")}></S.MemoButton>
            </S.MemoButtonWrap>
            <S.MemoButtonWrap>
              <S.MemoButton src={MemoDeleteIcon}></S.MemoButton>
            </S.MemoButtonWrap>
          </S.Memo>
        ))}
        </S.MemoList>
      </S.MemoListWrap>
    </S.Container>
  );
};

export default Sidebar;
