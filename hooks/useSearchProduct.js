import React, { useEffect, useContext, useState } from "react";
import { DemoContext } from "../contexts/DemoContext";
const useSearchProduct = (term, limit) => {
  const { handleCallApi } = useContext(DemoContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    const getDataApi = async () => {
      const params = {
        limit: limit,
        location: "location",
        term: term,
      };
      handleCallApi(params, (data) => {
        setData(data.businesses);
      });
    };
    getDataApi();
  }, [term, limit]);
  return data;
};

export default useSearchProduct;
