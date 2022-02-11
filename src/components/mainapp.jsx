import "./mainapp.css";
import wordbook from "./dictionary";
import Word from "./word";
import { WordContext } from "./wordscontext";
import { useContext } from "react";

function Wordtable() {
  const wordapiProp = useContext(WordContext);

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
        {wordapiProp.map((item) => {
          return <Word {...item} key={item.id} />;
        })}
      </tbody>
    </table>
  );
}

export default Wordtable;
