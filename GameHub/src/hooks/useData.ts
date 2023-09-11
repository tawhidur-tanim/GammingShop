import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../Services/apiClient";

interface FetchGameResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, seterror] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    apiClient
      .get<FetchGameResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        seterror(err.message);

        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);

  return { data, error, isLoading };
};

export default useData;
