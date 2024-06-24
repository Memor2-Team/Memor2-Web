import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Memor2Axios } from "src/libs/axios/customAxios";

const useMemo = () => {
  const { id } = useParams();
  const [memoData, setMemoData] = useState<any>([]);

  useEffect(() => {
    const memoDataRead = async () => {
      try {
        await Memor2Axios.get("post/find", {
          params: {
            idx: id,
          },
        }).then((res) => {
          setMemoData(res.data.data);
        });
      } catch (error) {
        console.log(error);
      }
    };

    memoDataRead();
  }, [id]);

  return {
    memoData,
  };
};

export default useMemo;
