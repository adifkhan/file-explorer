import { useState, useEffect } from "react";

type FolderDetailsType = {
  _id: string;
  folderName: string;
  subFolder: string[];
};

const UseFolder = () => {
  const [allFoldersDetails, setllFoldersDetails] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/folders`)
      .then((res) => res.json())
      .then((data) => setllFoldersDetails(data));
  }, []);

  return { allFoldersDetails };
};

export default UseFolder;
