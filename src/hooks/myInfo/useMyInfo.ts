import { useEffect, useState } from "react";
import { Memor2Axios } from "src/libs/axios/customAxios";
import token from "src/libs/token/token";

const useMyInfo = () => {
  const [userInfo, setUserInfo] = useState<any>([]);

  const handleClickLogout = () => {
    window.location.href = "/login"
    token.clearToken();
  }

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
    handleClickLogout
  };
};

export default useMyInfo;
