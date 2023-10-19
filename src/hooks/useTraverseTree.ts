import { ExplorerType } from "../dataTypes/dataTypes";

const useTraverseTree = () => {
  // inserts a node when a new folder created//
  function insertNode(
    tree: ExplorerType,
    folderId: string,
    folderName: string
  ): ExplorerType {
    if (tree._id === folderId) {
      tree.explorer.push({
        _id: new Date().getTime().toString(),
        name: folderName,
        explorer: [],
      });
      return tree;
    }
    let latestNode = [];
    latestNode = tree.explorer.map((item) => {
      return insertNode(item, folderId, folderName);
    });
    return { ...tree, explorer: latestNode };
  }

  //removes a node from the tree when the folder is deleted //
  function removeNode(tree: ExplorerType, folderId: string): ExplorerType {
    const isFolder = tree.explorer.find(
      (explorer) => explorer._id === folderId
    );
    if (isFolder) {
      const newTree = tree.explorer.filter((item) => item._id !== folderId);
      return { ...tree, explorer: newTree };
    }
    let latestNode = [];
    latestNode = tree.explorer.map((item) => {
      return removeNode(item, folderId);
    });
    return { ...tree, explorer: latestNode };
  }

  return { insertNode, removeNode };
};

export default useTraverseTree;
