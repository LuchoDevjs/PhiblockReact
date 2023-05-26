import { useEffect, useState } from "react";
import { TestingService } from "../services/Testing.service";

export const useRequest = () => {
  const [info, setInfo] = useState();

  const fetchInfo = async () => {
    const { data } = await TestingService();
    setInfo(data);
  };

  useEffect(() => {
    try {
      fetchInfo();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {
    info,
  };
};
