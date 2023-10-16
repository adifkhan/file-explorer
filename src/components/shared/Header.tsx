import style from "../../styles/header.module.css";

const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.logo}>
        <h1>File Explorer</h1>
      </div>
      <div className={style.user_button}>
        <button>Sign Up</button>
        <button>Sign In</button>
      </div>
    </header>
  );
};

export default Header;
