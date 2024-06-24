import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Memor2Axios } from "src/libs/axios/customAxios";
import { showToast } from "src/libs/toast/swal";

const useWrite = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleClickCreate = async () => {
    try {
      await Memor2Axios.post(
        "post",
        {},
        {
          params: {
            title: title,
            content: content,
          },
        }
      ).then((res) => {
        console.log(res);
        showToast("success", "메모 등록 성공");
        navigate("/");
      });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    title,
    content,
    handleChangeTitle,
    handleChangeContent,
    handleClickCreate,
  };
};

export default useWrite;
