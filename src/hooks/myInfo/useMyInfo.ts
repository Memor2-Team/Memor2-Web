import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Memor2Axios } from "src/libs/axios/customAxios";
import token from "src/libs/token/token";

const useMyInfo = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState<any>([]);

  const handleClickReturn = () => {
    navigate("/");
  };

  const handleClickLogout = () => {
    window.location.href = "/login";
    token.clearToken();
  };

  useEffect(() => {
    const UserInfo = async () => {
      try {
        await Memor2Axios.get("user").then((res) => {
          setUserInfo(res.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    UserInfo();
  }, []);

  return {
    userInfo,
    handleClickReturn,
    handleClickLogout,
  };
};

export default useMyInfo;
