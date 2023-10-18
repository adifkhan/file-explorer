import style from "../../styles/sidebar.module.css";
import Folder from "./Folder";
import { explorer } from "../../data/folderData";

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <Folder explorer={explorer} />
    </div>
  );
};

export default Sidebar;
