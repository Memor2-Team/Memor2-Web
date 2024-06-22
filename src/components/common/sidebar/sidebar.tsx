import * as S from "./style";
import UserInfoIcon from "src/assets/img/sidebar/User_Info_Icon.svg";

const Sidebar = () => {
  return (
    <S.Container>
      <S.UserInfoWrap>
        <S.UserInfoBox>
          <S.UserInfo src={UserInfoIcon}></S.UserInfo>
          <S.UserInfoText>내 정보</S.UserInfoText>
        </S.UserInfoBox>
      </S.UserInfoWrap>
      
    </S.Container>
  );
};

export default Sidebar;
