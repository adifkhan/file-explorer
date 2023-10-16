import React from "react";
import style from "../../styles/baselayout.module.css";
import Sidebar from "./Sidebar";

type BaseLayoutProps = {
  children: React.ReactNode;
};
const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <div className={style.layout}>
      <Sidebar />
      {children}
    </div>
  );
};

export default BaseLayout;
