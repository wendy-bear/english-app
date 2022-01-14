import "./cardapp.css";
import wordbook from "./dictionary";
import React, { useState } from "react";

function Card({ english, russian, transcription, tags, id }) {
  let [reverse, setReverse] = useState(false);

  let handleReverse = () => {
    setReverse(!reverse);
  };

  // заменила показ перевода на && (выводит элемент после &&, если условие true)

  return (
    <div className="element-wrapper">
      <button className="nav-btn nav-left"></button>
      <div className="card-container">
        <div className="card-wrapper">
          <div className="card-word">{english}</div>
          <div className="card-transcription">{transcription}</div>

          <button onClick={handleReverse} className="card-reverse">
            {reverse ? "Скрыть" : "Проверить"}
          </button>
          {reverse && <div className="card-translate">{russian}</div>}
        </div>
        <div className="card-numbers">/ {wordbook.length}</div>
      </div>

      <button className="nav-btn"></button>
    </div>
  );
}

export default Card;
