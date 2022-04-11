import "./mainapp.css";
import wordbook from "./dictionary";
import Word from "./word";
import React, { useState } from "react";

function Wordtable() {
  let [notes, setNotes] = useState(wordbook);

  const removeItem = (item) => {
    let newNotes = [...notes];
    setNotes(newNotes.filter((p) => p.id !== item));
    console.log(newNotes);
  };

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
          return <Word {...item} key={item.id} removeItem={removeItem} />;
        })}
      </tbody>
    </table>
  );
}

export default Wordtable;
