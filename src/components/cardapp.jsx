import "./cardapp.css";
import wordbook from "./dictionary";
import React, { useState } from "react";

function Card({ english, russian, transcription, tags, id }) {
  let [reverse, setReverse] = useState(true);

  let handleReverse = () => {
    setReverse(!reverse);
  };

  if (reverse) {
    return (
      <div className="card-wrapper">
        <div className="card-word">{english}</div>
        <div className="card-transcription">{transcription}</div>
        <button onClick={handleReverse} className="card-reverse">
          Проверить
        </button>
      </div>
    );
  } else {
    return (
      <div className="card-wrapper">
        <div className="card-word">{english}</div>
        <div className="card-transcription">{transcription}</div>
        <div className="card-translate">{russian}</div>;
      </div>
    );
  }
  //вот тут не понимаю как через тернарный оператор редактирование сделать
  return (
    <div className="card-wrapper">
      <div className="card-word">{english}</div>
      <div className="card-transcription">{transcription}</div>
      <button className="card-reverse" onClick={handleReverse}>
        Проверить
      </button>
    </div>
  );
}

export default Card;
