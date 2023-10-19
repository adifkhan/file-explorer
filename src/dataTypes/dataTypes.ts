export interface ExplorerType {
  _id: string;
  name: string;
  explorer: ExplorerType[];
}

export interface FolderProps {
  explorer: ExplorerType;
  handleInsertNode: (folderId: string, folderName: string) => void;
  handleRemoveNode: (id: string) => void;
}

export interface ContextProps {
  children: React.ReactNode;
}

export interface FolderContextType {
  activeFolder: ExplorerType;
  setActiveFolder: React.Dispatch<React.SetStateAction<ExplorerType>>;
}
