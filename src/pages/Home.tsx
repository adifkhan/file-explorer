import BaseLayout from "../components/shared/BaseLayout";
import style from "../styles/home.module.css";
import { FaFolderClosed } from "react-icons/fa6";
import { useContext } from "react";
import { GlobalContext } from "../context/ContextProvider";

const Home = () => {
  const { activeFolder, setActiveFolder } = useContext(GlobalContext);

  return (
    <BaseLayout>
      <div className={style.outlet}>
        <div className={style.folder_container}>
          {activeFolder?.explorer?.length > 0 ? (
            activeFolder.explorer?.map((item) => (
              <div
                key={item._id}
                className={style.folder_wrapper}
                onClick={() => setActiveFolder(item)}
              >
                <span>
                  <FaFolderClosed />
                </span>
                <label>{item.name}</label>
              </div>
            ))
          ) : (
            <p className={style.empty_folder}>This Folder is Empty</p>
          )}
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;
