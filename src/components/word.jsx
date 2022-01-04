import "./word.css";
import wordbook from "./dictionary";
import React, { useState } from "react";

function Word({ english, russian, transcription, tags, id }) {
  let [save, showSave] = useState(false);

  let handleSave = () => {
    showSave(!save);
  };

  let [cancel, showCancel] = useState(false);

  let handleCancel = () => {
    showCancel(!cancel);
  };

  //вот тут value пропсов вынесены в стейты. с onchange не совсем понимаю, что должно меняться. в консоль вывела измененное значение englishdef. опробовала такое на стейте с english

  let [englishDef, setEnglishDef] = useState(english);

  let [russianDef, setRussianDef] = useState(russian);

  let [transcriptionDef, setTranscriptionDef] = useState(transcription);

  let [tagsDef, setTagsDef] = useState(tags);

  // возврат в режим просмотра прописала в if cancel. то есть, мне заново рисует строку таблицы, но кнопка редактирования уже не работает
  //возможно логика должна была быть другая))
  console.log(englishDef);

  if (cancel) {
    return (
      <tr>
        <td>{english}</td>
        <td>{russian}</td>
        <td>{transcription}</td>
        <td>{tags}</td>
        <td>
          <button className="edit-btn" onClick={handleSave}></button>
          <button className="delete-btn"></button>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td>
        {save ? (
          <input
            defaultValue={englishDef}
            onChange={(event) => setEnglishDef(event.target.value)}
          />
        ) : (
          english
        )}
      </td>
      <td>{save ? <input defaultValue={russian} /> : russian}</td>
      <td>{save ? <input defaultValue={transcription} /> : transcription}</td>
      <td>{save ? <input defaultValue={tags} /> : tags}</td>
      <td>
        {save ? <button className="save-btn"></button> : null}
        {save ? (
          <button className="cancel-btn" onClick={handleCancel}></button>
        ) : null}

        <button className="edit-btn" onClick={handleSave}></button>
        <button className="delete-btn"></button>
      </td>
    </tr>
  );
}
export default Word;
