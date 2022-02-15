import "./headerapp.css";
import logoImg from "./logo.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
  Link,
} from "react-router-dom";

function Header() {
  return (
    <>
      <header className="header">
        <h1>Learnglish</h1>

        <Link to="/">
          <img src={logoImg} alt="лого" />
        </Link>

        <nav>
          <Link to="/wordtable">
            <button>Список слов</button>
          </Link>
          <Link to="/game">
            <button>Учиться!</button>
          </Link>
          <Link to="/add">
            <button>Добавить слово</button>
          </Link>
        </nav>
      </header>
    </>
  );
}

export default Header;
