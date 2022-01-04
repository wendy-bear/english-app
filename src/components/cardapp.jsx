import "./cardapp.css";
import wordbook from "./dictionary";
import React, { useState } from "react";

function Card({ english, russian, transcription, tags, id }) {
  let [reverse, setReverse] = useState(false);

  let handleReverse = () => {
    setReverse(!reverse);
  };

  //через if рендеринг работает и кнопка убирается

  //  if (!reverse) {
  //    return (
  //      <div className="card-wrapper">
  //        <div className="card-word">{english}</div>
  //        <div className="card-transcription">{transcription}</div>
  //        <button onClick={handleReverse} className="card-reverse">
  //          Проверить
  //        </button>
  //      </div>
  //    );
  //  } else {
  //    return (
  //      <div className="card-wrapper">
  //        <div className="card-word">{english}</div>
  //        <div className="card-transcription">{transcription}</div>
  //        <div className="card-translate">{russian}</div>
  //      </div>
  //    );
  //  }

  // рендеринг по кнопке - получается немного не то, что нужно. Не понимаю, куда нужно див для рендеринга засунуть, чтобы кнопка убиралась

  return (
    <div className="card-wrapper">
      <div className="card-word">{english}</div>
      <div className="card-transcription">{transcription}</div>

      <button onClick={handleReverse} className="card-reverse">
        {reverse ? "Скрыть" : "Проверить"}
      </button>
      {reverse ? <div className="card-translate">{russian}</div> : null}
    </div>
  );
}

export default Card;
