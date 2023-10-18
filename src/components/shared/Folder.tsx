import style from "../../styles/sidebar.module.css";
import { useState } from "react";
import { ExplorerItem } from "../../data/folderData";
import { IoIosArrowDown } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import { useContext } from "react";
import { GlobalContext } from "../../context/ContextProvider";

const Folder = ({ explorer }: ExplorerItem) => {
  const [expand, setExpend] = useState(false);
  const { setActiveFolder } = useContext(GlobalContext);
  const handleFolderClick = (id: string) => {
    setActiveFolder(id);
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
          <label onClick={() => handleFolderClick(explorer._id)}>
            {explorer.name}
          </label>
        </div>
        <span className={style.delete_btn}>
          <TiDelete />
        </span>
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
