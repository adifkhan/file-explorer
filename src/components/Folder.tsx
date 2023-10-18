import style from "../styles/sidebar.module.css";
import { useState } from "react";
import { ExplorerItem, FolderItem } from "../data/folderData";
import { IoIosArrowDown } from "react-icons/io";
import { FaFolderPlus } from "react-icons/fa6";
import { FaFolderMinus } from "react-icons/fa6";
import { useContext } from "react";
import { GlobalContext } from "../context/ContextProvider";

const Folder = ({ explorer }: ExplorerItem) => {
  const [expand, setExpend] = useState(false);
  const { setActiveFolder } = useContext(GlobalContext);
  const handleFolderClick = (item: FolderItem) => {
    setActiveFolder(item);
  };
  const createFolder = () => {
    const folderName = prompt(
      "Enter folder name (5-16) characters",
      "New Folder"
    );
    console.log(folderName);
  };
  const removeFolder = (id: string) => {
    console.log(id);
  };
  return (
    <div className={style.folder_container}>
      <div className={style.folder_wrapper}>
        <div className={style.folder_title}>
          <span
            className={expand ? `${style.reverse_arrow}` : `${style.arrow}`}
            onClick={() => setExpend(!expand)}
          >
            <IoIosArrowDown />
          </span>
          <label onClick={() => handleFolderClick(explorer)}>
            {explorer.name}
          </label>
        </div>
        <div className={style.folder_btns}>
          <span title="Create Folder" onClick={createFolder}>
            <FaFolderPlus />
          </span>
          <span
            title="Remove Folder"
            onClick={() => removeFolder(explorer._id)}
          >
            <FaFolderMinus />
          </span>
        </div>
      </div>
      <div style={{ display: expand ? "block" : "none", paddingLeft: "5px" }}>
        {explorer.explorer.length > 0 ? (
          explorer.explorer.map((explorer) => (
            <Folder explorer={explorer} key={explorer._id} />
          ))
        ) : (
          <p style={{ paddingLeft: "15px", fontSize: "14px", color: "dark" }}>
            empty folder
          </p>
        )}
      </div>
    </div>
  );
};

export default Folder;
