import "./cardapp.css";
import wordbook from "./dictionary";
import React, { useState, useEffect } from "react";

function Card({ english, russian, transcription, tags, id }) {
  let [reverse, setReverse] = useState(false);

  let handleReverse = () => {
    setReverse(!reverse);
  };

  useEffect(() => {
    setReverse(false);
  }, [id]);

  // заменила показ перевода на && (выводит элемент после &&, если условие true)

  return (
    <div className="card-wrapper">
      <div className="card-word">{english}</div>
      <div className="card-transcription">{transcription}</div>

      <button onClick={handleReverse} className="card-reverse">
        {reverse ? "Скрыть" : "Проверить"}
      </button>
      {reverse && <div className="card-translate">{russian}</div>}
    </div>
  );
}

export default Card;
