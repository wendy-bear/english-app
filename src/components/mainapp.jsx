import "./mainapp.css";
import wordbook from "./dictionary";
import Word from "./word";
import { WordContext } from "./wordscontext";
import { useContext } from "react";

function Wordtable() {
  const context = useContext(WordContext);
  const wordapi = context.wordapi;
  const removeItem = context.removeItem;
  const updateItem = context.updateItem;

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
        {wordapi.map((item) => {
          return (
            <Word
              {...item}
              key={item.id}
              removeItem={removeItem}
              updateItem={updateItem}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default Wordtable;
