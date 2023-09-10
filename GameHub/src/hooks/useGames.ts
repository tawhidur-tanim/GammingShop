import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../Services/apiClient";

interface Game {
  id: number;
  name: string;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, seterror] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<FetchGameResponse>("/games", { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        seterror(err.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;