import React from "react";
import BaseLayout from "../components/shared/BaseLayout";
import style from "../styles/home.module.css";
import { MdOutlineCreateNewFolder } from "react-icons/md";

const Home = () => {
  const createNewFolder = () => {
    const folderId = "001";

    const folderInput = prompt(
      "Enter Folder Name ( 5-16 ) characters",
      "Folder"
    );
    if (folderInput) {
      const folder = { folderName: folderInput.trim(), subFolder: [] };
      fetch(`http://localhost:5000/createfolder/${folderId}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(folder),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged) {
            return alert("new folder created successfully!");
          }
          console.log(data);
        });
    }
  };
  return (
    <BaseLayout>
      <div className={style.outlet}>
        <div className={style.button_wrapper}>
          <button className={style.create_btn} onClick={createNewFolder}>
            <span className={style.create_icon}>
              <MdOutlineCreateNewFolder />
            </span>{" "}
            New Folder
          </button>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;
