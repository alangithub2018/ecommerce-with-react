import axios from "axios";
import { useEffect, useState } from "react";
import { API_URL } from "../constants/env";

const useFetch = (endpoint, headers = {}) => {
  const [data, setData] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await axios
        .get(`${API_URL}/${endpoint}`, { headers })
        .then((res) => setData(res.data.data))
        .catch((err) => setError(err))
        .finally(() => setLoading(false));
    };
    fetchData();
  }, []);

  return { data, error, loading };
};

export default useFetch;
