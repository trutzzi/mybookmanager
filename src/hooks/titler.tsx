import { useEffect } from "react";
import { PROJECT_NAME } from "../constants/setup";

export default function useTitler(title: string) {
  useEffect(() => {
    document.title = `${title} - ${PROJECT_NAME}`;
  }), [title];

}