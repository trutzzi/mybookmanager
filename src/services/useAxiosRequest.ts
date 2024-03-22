import { useState } from "react";
import { useSWRConfig } from "swr";
import { HTTP } from "./http";

export const useAxiosRequest = (
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE"
) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  const { mutate } = useSWRConfig();

  const triggerEvent = async (id: number, payload = null) => {
    try {
      await HTTP.request({
        url: `/${url}/${id}`,
        method,
        data: payload || "",
      }).then(({ data, status }) => {
        setData(data);

        if (status === 200 || status === 204) {
          //Trigger refetch only on success
          mutate(url);
        }
      });
    } catch {
      setError("Fetch failed");
    } finally {
      setLoaded(true);
    }
  };

  return [triggerEvent, data, error, loaded];
};
