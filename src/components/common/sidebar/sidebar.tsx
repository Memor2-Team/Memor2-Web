import * as S from "./style";
import { useNavigate } from "react-router-dom";
import useSidebar from "src/hooks/sidebar/useSidebar";
import UserInfoIcon from "src/assets/img/sidebar/User_Info_Icon.svg";
import MemoCreateIcon from "src/assets/img/sidebar/MemoCreate_Icon.svg";
import MemoModifyIcon from "src/assets/img/sidebar/MemoModify_Icon.svg";
import MemoDeleteIcon from "src/assets/img/sidebar/MemoDelete_Icon.svg";

const Sidebar = () => {
  const { ...sidebar } = useSidebar();
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.UserInfoWrap>
        <S.UserInfoBox onClick={() => navigate("/my-info")}>
          <S.UserInfo src={UserInfoIcon}></S.UserInfo>
          <S.UserInfoText>내 정보</S.UserInfoText>
        </S.UserInfoBox>
      </S.UserInfoWrap>
      <S.CategoryWrap>
        <S.AllButton
          $color={sidebar.category}
          onClick={() => sidebar.handleClickCategory("all")}>
          전체
        </S.AllButton>
        <S.MyButton
          $color={sidebar.category}
          onClick={() => sidebar.handleClickCategory("my")}>
          내 메모
        </S.MyButton>
      </S.CategoryWrap>
      <S.MemoListWrap>
        <S.MemoListButtonWrap>
          <S.MemoListTitle>
            {sidebar.category === "my" ? "내가 작성한 메모" : "작성된 메모"}
          </S.MemoListTitle>
          {sidebar.category === "my" && (
            <S.MemoCreateButton
              src={MemoCreateIcon}
              onClick={() => navigate("write")}></S.MemoCreateButton>
          )}
        </S.MemoListButtonWrap>
        <S.MemoList>
          {sidebar.memoList.map((memo) => (
            <S.Memo key={memo.idx}>
              <S.MemoTitleWrap onClick={() => navigate(`/${memo.idx}`)}>
                <S.MemoTitle>{memo.title}</S.MemoTitle>
              </S.MemoTitleWrap>
              {sidebar.myName === memo.author && (
                <>
                  <S.MemoButtonWrap>
                    <S.MemoButton
                      src={MemoModifyIcon}
                      onClick={() => navigate(`/modify/${memo.idx}`)}></S.MemoButton>
                  </S.MemoButtonWrap>
                  <S.MemoButtonWrap>
                    <S.MemoButton
                      src={MemoDeleteIcon}
                      onClick={() =>sidebar.handleClickDelete(memo.idx)}></S.MemoButton>
                  </S.MemoButtonWrap>
                </>
              )}
            </S.Memo>
          ))}
        </S.MemoList>
      </S.MemoListWrap>
    </S.Container>
  );
};

export default Sidebar;
