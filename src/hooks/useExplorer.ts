import { useState, useEffect } from "react";
import { ExplorerType } from "../dataTypes/dataTypes";
import { useQuery } from "@tanstack/react-query";

const useExplorer = () => {
  // const [explorer, setExplorer] = useState<ExplorerType>({} as ExplorerType);

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["explorer"],
    queryFn: async () => {
      const response = await fetch(
        `https://explorer-server-mocha.vercel.app/folder`
      );
      if (!response.ok) {
        alert("can't fetch data, try again!");
      } else {
        return response.json();
      }
    },
  });

  // useEffect(() => {
  //   fetch(`https://explorer-server-mocha.vercel.app/folder`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setExplorer(data[0]);
  //     });
  // }, []);

  return { data, isLoading, refetch };
};

export default useExplorer;
