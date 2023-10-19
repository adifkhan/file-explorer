import { createContext, useState } from "react";
import {
  ContextProps,
  ExplorerType,
  FolderContextType,
} from "../dataTypes/dataTypes";

export const GlobalContext = createContext<FolderContextType>(
  {} as FolderContextType
);
export const ContextProvider = ({ children }: ContextProps) => {
  const [activeFolder, setActiveFolder] = useState<ExplorerType>(
    {} as ExplorerType
  );
  return (
    <GlobalContext.Provider value={{ activeFolder, setActiveFolder }}>
      {children}
    </GlobalContext.Provider>
  );
};
