import style from "../../styles/sidebar.module.css";
import Folder from "../Folder";
import useTraverseTree from "../../hooks/useTraverseTree";
import useExplorer from "../../hooks/useExplorer";

const Sidebar = () => {
  const { explorer } = useExplorer();
  const { insertNode, removeNode } = useTraverseTree();

  // create new folder and insert it to data
  const handleInsertNode = (folderId: string, folderName: string) => {
    const finalTree = insertNode(explorer, folderId, folderName);
    if (finalTree) {
      fetch("http://localhost:5000/folder", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalTree),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (!data.acknowledged) {
            return alert("Something went wrong, try again!");
          }
          return alert("Folder created successfully");
        });
    }
  };
  // Remove folder from the node //
  const handleRemoveNode = (folderId: string) => {
    const finalTree = removeNode(explorer, folderId);
    if (finalTree) {
      fetch("http://localhost:5000/folder", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalTree),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (!data.acknowledged) {
            return alert("Something went wrong, try again!");
          }
          return alert("Folder removed successfully");
        });
    }
  };
  return (
    <div className={style.sidebar}>
      <Folder
        explorer={explorer}
        handleInsertNode={handleInsertNode}
        handleRemoveNode={handleRemoveNode}
      />
    </div>
  );
};

export default Sidebar;
