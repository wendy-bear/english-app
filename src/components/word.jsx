import "./word.css";
import wordbook from "./dictionary";
import React, { useState } from "react";

function Word({ english, russian, transcription, tags, id }) {
  let [save, showSave] = useState(false);

  //на кнопке save будет другая функция? типа сохранить отредактированное или нет в массив?

  //  let handleSave = () => {
  //    showSave(false);
  //  };

  let handleCancel = () => {
    showSave(false);
  };

  let handleEdit = () => {
    showSave(true);
  };

  //вот тут value пропсов вынесены в стейты. добавила каждому инпуту свой onchange. редактировать строку дает
  // при повторном входе в режим редактирования показывает измененный стейт каждого инпута - это так и должно быть? или что-то пошло не так?)

  let [englishDef, setEnglishDef] = useState(english);

  let [russianDef, setRussianDef] = useState(russian);

  let [transcriptionDef, setTranscriptionDef] = useState(transcription);

  let [tagsDef, setTagsDef] = useState(tags);

  console.log(englishDef);

  if (!save) {
    return (
      <tr>
        <td>{english}</td>
        <td>{russian}</td>
        <td>{transcription}</td>
        <td>{tags}</td>
        <td>
          <button className="edit-btn" onClick={handleEdit}></button>
          <button className="delete-btn"></button>
        </td>
      </tr>
    );
  }

  //кнопка edit в режиме редактирования работать как бы не должна же? отменяется редактирование через cancel

  return (
    <tr>
      <td>
        <input
          value={englishDef}
          onChange={(event) => setEnglishDef(event.target.value)}
        />
      </td>
      <td>
        <input
          value={russianDef}
          onChange={(event) => setRussianDef(event.target.value)}
        />
      </td>
      <td>
        <input
          value={transcriptionDef}
          onChange={(event) => setTranscriptionDef(event.target.value)}
        />
      </td>
      <td>
        <input
          value={tagsDef}
          onChange={(event) => setTagsDef(event.target.value)}
        />
      </td>
      <td>
        <button className="save-btn"></button>
        <button className="cancel-btn" onClick={handleCancel}></button>

        <button className="edit-btn" onClick={handleEdit}></button>
        <button className="delete-btn"></button>
      </td>
    </tr>
  );
}
export default Word;
