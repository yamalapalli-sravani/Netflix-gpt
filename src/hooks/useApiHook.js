import { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";

export const useApiHook = ({ url, method, dispatchAction }) => {
  const dispatch = useDispatch();
  const [data, setData] = useState();
  const handleApiData = async () => {
    const apiData = await fetch(url, API_OPTIONS, {
      method: method,
      headers: API_OPTIONS,
    });
    const jsonData = await apiData.json();
    setData(jsonData?.results);
    if (dispatchAction)
      dispatch(dispatchAction(jsonData?.results || jsonData.data));
  };
  useEffect(() => {
    handleApiData();
  }, []);
  return { data };
};
