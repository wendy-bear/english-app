import "./headerapp.css";

function Header() {
  return (
    <>
      <header className="header">
        <h1>Learnglish</h1>
        <nav>
          <button>Список слов</button>
          <button>Учиться!</button>
          <button>Темы</button>
        </nav>
      </header>
    </>
  );
}

export default Header;
