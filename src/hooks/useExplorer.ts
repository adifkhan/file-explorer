import { useState, useEffect } from "react";
import { ExplorerType } from "../dataTypes/dataTypes";

const useExplorer = () => {
  const [explorer, setExplorer] = useState<ExplorerType>({} as ExplorerType);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/folder`)
      .then((res) => res.json())
      .then((data) => {
        setExplorer(data[0]);
        setLoading(false);
      });
  }, []);

  return { explorer, loading };
};

export default useExplorer;
