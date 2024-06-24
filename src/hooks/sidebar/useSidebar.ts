import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Memor2Axios } from "src/libs/axios/customAxios";
import { MemoListProps } from "src/types/memo/memoListProps.interface";

const useSidebar = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("my");
  const [memoList, setMemoList] = useState<MemoListProps[]>([]);

  const handleClickCategory = (category: string) => {
    setCategory(category);
    if (category === "my") {
      navigate("/");
    } else {
      navigate("all");
    }
  };

  useEffect(() => {
    const PostListRead = async () => {
      try {
        await Memor2Axios.get(`post/list-${category}`, {
          params: {
            page: 1,
            size: 10,
          },
        }).then((res) => {
            console.log(res.data.data);
            setMemoList(res.data.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    PostListRead();
  }, [category]);

  return {
    category,
    memoList,
    handleClickCategory,
  };
};

export default useSidebar;
