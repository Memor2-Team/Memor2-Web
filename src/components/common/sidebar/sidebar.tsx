import { useNavigate } from "react-router-dom";
import * as S from "./style";
import UserInfoIcon from "src/assets/img/sidebar/User_Info_Icon.svg";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.UserInfoWrap>
        <S.UserInfoBox onClick={() => navigate("/my-info")}>
          <S.UserInfo src={UserInfoIcon}></S.UserInfo>
          <S.UserInfoText>내 정보</S.UserInfoText>
        </S.UserInfoBox>
      </S.UserInfoWrap>
      
    </S.Container>
  );
};

export default Sidebar;
