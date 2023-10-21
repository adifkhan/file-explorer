import style from "../styles/sidebar.module.css";
import { useEffect, useState } from "react";
import { ExplorerType, FolderProps } from "../dataTypes/dataTypes";
import { IoIosArrowDown } from "react-icons/io";
import { FaFolderPlus } from "react-icons/fa6";
import { FaFolderMinus } from "react-icons/fa6";
import { useContext } from "react";
import { GlobalContext } from "../context/ContextProvider";
import toast from "react-hot-toast";

const Folder = ({
  explorer,
  handleInsertNode,
  handleRemoveNode,
}: FolderProps) => {
  const [expand, setExpend] = useState(false);
  const { setActiveFolder } = useContext(GlobalContext);

  useEffect(() => {
    setActiveFolder(explorer);
  }, [explorer, setActiveFolder]);

  // handle the folder click and update active folder
  const handleFolderClick = (item: ExplorerType) => {
    setActiveFolder(item);
  };

  // create a new folder
  const createFolder = (id: string) => {
    const folderName = prompt(
      "Enter folder name (5-16) characters",
      "New Folder"
    );
    if (folderName) {
      handleInsertNode(id, folderName);
    }
  };

  //remove a folder
  const removeFolder = (item: ExplorerType) => {
    if (item._id === "65301feb5e2761322e867bd0") {
      return toast.error("cannot remove 'Root' folder!");
    }
    const removeConfirmation = window.confirm(
      "Are you sure you want to remove this folder?"
    );
    if (removeConfirmation) {
      handleRemoveNode(item._id);
    }
  };
  return (
    <div className={style.folder_container}>
      <div className={style.folder_wrapper}>
        <div className={style.folder_title} onClick={() => setExpend(!expand)}>
          <span
            className={expand ? `${style.reverse_arrow}` : `${style.arrow}`}
          >
            <IoIosArrowDown />
          </span>
          <label onClick={() => handleFolderClick(explorer)}>
            {explorer.name}
          </label>
        </div>
        <div className={style.folder_btns}>
          <span
            title="Create Folder"
            onClick={() => createFolder(explorer._id)}
          >
            <FaFolderPlus />
          </span>
          <span title="Remove Folder" onClick={() => removeFolder(explorer)}>
            <FaFolderMinus />
          </span>
        </div>
      </div>
      <div style={{ display: expand ? "block" : "none", paddingLeft: "10px" }}>
        {explorer?.explorer?.map((explorer) => (
          <Folder
            explorer={explorer}
            handleInsertNode={handleInsertNode}
            handleRemoveNode={handleRemoveNode}
            key={explorer._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Folder;
