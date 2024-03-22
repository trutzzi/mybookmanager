import { fetcher } from "./axios"
import useSWR from 'swr'

export interface Books {
  id: number,
  author: string
  description: string
  genre: string
  title: string
}

export function useGetBooks() {
  const { data, error, isLoading } = useSWR<Books[]>(`books`, fetcher)

  return {
    data,
    isLoading,
    isError: error
  }
}