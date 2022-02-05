import "./mainapp.css";
import wordbook from "./dictionary";
import Word from "./word";

function Wordtable() {
  return (
    <table border="1px">
      <thead>
        <tr>
          <td>English</td>
          <td>Перевод</td>
          <td>Транскрипция</td>
          <td>Категория</td>
          <td>Управление</td>
        </tr>
      </thead>
      <tbody>
        {wordbook.map((item) => {
          return <Word {...item} key={item.id} />;
        })}
      </tbody>
    </table>
  );
}

export default Wordtable;
