import style from "../../styles/sidebar.module.css";
import Folder from "../Folder";
import useTraverseTree from "../../hooks/useTraverseTree";
import useExplorer from "../../hooks/useExplorer";
import Loading from "../Loading";
import toast from "react-hot-toast";

const Sidebar = () => {
  const { data, isLoading, refetch } = useExplorer();
  const { insertNode, removeNode } = useTraverseTree();
  const explorer = data?.[0];

  // create new folder and insert it to data
  const handleInsertNode = (folderId: string, folderName: string) => {
    const finalTree = insertNode(explorer, folderId, folderName);
    if (finalTree) {
      fetch("https://explorer-server-mocha.vercel.app/folder", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalTree),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (!data.acknowledged) {
            return toast.error("Something went wrong, try again!");
          }
          refetch();
          return toast.success("Folder created successfully!");
        });
    }
  };
  // Remove folder from the node //
  const handleRemoveNode = (folderId: string) => {
    const finalTree = removeNode(explorer, folderId);
    if (finalTree) {
      fetch("https://explorer-server-mocha.vercel.app/folder", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalTree),
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          if (!data.acknowledged) {
            return toast.error("Something went wrong, try again!");
          }
          refetch();
          return toast.success("Folder removed successfully!");
        });
    }
  };
  return (
    <div className={style.sidebar}>
      {isLoading ? (
        <Loading />
      ) : (
        <Folder
          explorer={explorer}
          handleInsertNode={handleInsertNode}
          handleRemoveNode={handleRemoveNode}
        />
      )}
    </div>
  );
};

export default Sidebar;
