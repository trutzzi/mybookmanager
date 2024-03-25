import { useEffect } from "react";
import useNotification from "../components/snackBarSystem";
import { fetcher } from "./axios";
import useSWR from "swr";

export interface Books {
  id: number;
  author: string;
  description: string;
  genre: string;
  title: string;
}

export function useGetBooks() {
  const { data, error, isLoading } = useSWR<Books[]>(`books`, fetcher);
  const [sendNotification] = useNotification();

  useEffect(() => {
    if (error) {
      sendNotification({
        msg: `Error fetching books. Make sure you have a valid API endpoint running or please set up a mocked one from readme file.`,
        variant: "error",
      });
    }
  }, [error]);

  return {
    data,
    isLoading,
    error,
  };
}
