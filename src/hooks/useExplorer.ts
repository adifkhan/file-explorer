import { useQuery } from "@tanstack/react-query";

const useExplorer = () => {
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

  return { data, isLoading, refetch };
};

export default useExplorer;
