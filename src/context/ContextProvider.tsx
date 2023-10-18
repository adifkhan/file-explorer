import React, { createContext, useState } from "react";
import { FolderItem } from "../data/folderData";

type ContextProps = {
  children: React.ReactNode;
};
type FolderContextType = {
  activeFolder: FolderItem;
  setActiveFolder: React.Dispatch<React.SetStateAction<FolderItem>>;
};

export const GlobalContext = createContext<FolderContextType>(
  {} as FolderContextType
);
export const ContextProvider = ({ children }: ContextProps) => {
  const [activeFolder, setActiveFolder] = useState<FolderItem>(
    {} as FolderItem
  );
  return (
    <GlobalContext.Provider value={{ activeFolder, setActiveFolder }}>
      {children}
    </GlobalContext.Provider>
  );
};
