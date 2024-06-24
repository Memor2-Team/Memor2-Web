import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Memor2Axios } from "src/libs/axios/customAxios";
import { showToast } from "src/libs/toast/swal";

const useModify = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [createdDateTime, setCreatedDateTime] = useState<Date>();

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleClickModify = async () => {
    try {
      await Memor2Axios.patch(
        "post",
        {},
        {
          params: {
            idx: id,
            title: title,
            content: content,
          },
        }
      ).then(() => {
        showToast("success", "메모 수정 성공");
        navigate("/");
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const memoDataRead = async () => {
      try {
        await Memor2Axios.get("post/find", {
          params: {
            idx: id,
          },
        }).then((res) => {
          const newMemoData = res.data.data;
          setTitle(newMemoData.title);
          setContent(newMemoData.content);
          setCreatedDateTime(newMemoData.createdDateTime);
        });
      } catch (error) {
        console.log(error);
      }
    };

    memoDataRead();
  }, [id]);
  return {
    title,
    content,
    createdDateTime,
    handleChangeTitle,
    handleChangeContent,
    handleClickModify,
  };
};

export default useModify;
