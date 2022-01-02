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

  // вход в режим просмотра доступен по функци на кнопке  handleSave
  //возможно схема работы этой кнопки должна была быть по собственному стейту(

  return (
    <tr>
      <td>{save ? <input defaultValue={english} /> : english}</td>
      <td>{save ? <input defaultValue={russian} /> : russian}</td>
      <td>{save ? <input defaultValue={transcription} /> : transcription}</td>
      <td>{save ? <input defaultValue={tags} /> : tags}</td>
      <td>
        {save ? <button className="save-btn"></button> : null}
        {save ? (
          <button className="cancel-btn" onClick={handleSave}></button>
        ) : null}

        <button className="edit-btn" onClick={handleSave}></button>
        <button className="delete-btn"></button>
      </td>
    </tr>
  );
}
export default Word;
