import { useState } from "react";
import { useSWRConfig } from "swr";
import { HTTP } from "./http";

export const useAxiosWithParam = (
  url: string,
  method: "GET" | "POST" | "PUT" | "DELETE"
) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState<null | string>(null);
  const [loaded, setLoaded] = useState(false);

  const { mutate } = useSWRConfig();

  const triggerEvent: (
    id: number | undefined,
    payload: object | undefined
  ) => void = async (id = undefined, payload = undefined) => {
    /**
     * Used for PUT&DELETE
     */
    try {
      await HTTP.request({
        url: id ? `/${url}/${id}` : url,
        method,
        data: payload || "",
      }).then(({ data, status }) => {
        setData(data);

        if (status === 200 || status === 204 || status === 201) {
          //Trigger refetch only on success
          mutate(url);
        }
      });
    } catch {
      setError("Failed to fetch");
      throw new Error("Failed API NETWORK");
    } finally {
      setLoaded(true);
    }
  };
  return { triggerEvent, data, error, loaded };
};
