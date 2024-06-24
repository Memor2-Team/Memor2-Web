import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Memor2Axios } from "src/libs/axios/customAxios";
import { MemoListProps } from "src/types/memo/memoListProps.interface";
import Swal from "sweetalert2";
import { showToast } from "src/libs/toast/swal";

const useSidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [category, setCategory] = useState<string>("my");
  const [memoList, setMemoList] = useState<MemoListProps[]>([]);
  const [myName, setMyName] = useState<string>("");

  const handleClickCategory = (category: string) => {
    setCategory(category);
    if (category === "my") {
      navigate("/");
    } else {
      navigate("all");
    }
  };

  const handleClickDelete = (id: number) => {
    Swal.fire({
      title: "정말로 메모를 삭제하시겠습니까?",
      text: "메모를 삭제하면 다시 되돌릴 수 없습니다.",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#D9D9D9",
      confirmButtonText: "메모 삭제",
      cancelButtonText: "취소",
      reverseButtons: false,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await Memor2Axios.delete("post", {
            params: { idx: id },
          }).then(() => {
            showToast("success", "메모 삭제성공");
            setMemoList((prevData) =>
              prevData.filter((item) => item.idx !== id)
            );
          });
        } catch (error) {
          showToast("error", "메모 삭제실패");
          console.log(error);
        }
      }
    });
  };

  useEffect(() => {
    const UserInfo = async () => {
      try {
        await Memor2Axios.get("user").then((res) => {
          setMyName(res.data.email);
        });
      } catch (error) {
        console.log(error);
      }
    };

    UserInfo();
  }, []);

  useEffect(() => {
    const PostListRead = async () => {
      try {
        await Memor2Axios.get(`post/list-${category}`, {
          params: {
            page: 1,
            size: 100,
          },
        }).then((res) => {
          setMemoList(res.data.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    PostListRead();
  }, [pathname, category]);

  return {
    myName,
    category,
    memoList,
    handleClickCategory,
    handleClickDelete,
  };
};

export default useSidebar;
