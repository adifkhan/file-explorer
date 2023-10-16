import { useContext, useState } from "react";
import UseFolder from "../../hooks/UseFolder";
import style from "../../styles/sidebar.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { TiDelete } from "react-icons/ti";
import { GlobalContext } from "../../context/ContextProvider";

const Sidebar = () => {
  //   const { setActiveFolder } = useContext(GlobalContext);
  const { allFoldersDetails } = UseFolder();
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleDeleteFolder = (id: string) => {
    // setActiveFolder(id);
    console.log(id);
  };
  const handleFolderClick = (id: string) => {
    console.log(id);
  };

  return (
    <div className={style.sidebar}>
      <div className={style.folder_Container}>
        <div
          className={style.folder_wrapper}
          onClick={() => handleFolderClick("652d32215e2761322e2763e3")}
        >
          <span className={style.arrow}>
            <IoIosArrowDown />
          </span>
          <label htmlFor="">Root Folder</label>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
