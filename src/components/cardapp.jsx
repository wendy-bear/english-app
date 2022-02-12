import "./cardapp.css";
import wordbook from "./dictionary";
import React, { useState, useEffect, useRef, useContext } from "react";
import { WordContext } from "./wordscontext";
import Wordtable from "./mainapp";

function Card({
  english,
  russian,
  transcription,
  tags,
  id,
  changeLearn,
  reverse,
  //  setReverse,
}) {
  const wordapiProp = useContext(WordContext);

  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  });

  let handleReverse = () => {
    changeLearn();
  };

  return (
    <div className="card-wrapper">
      <div className="card-word">{english}</div>
      <div className="card-transcription">{transcription}</div>

      {reverse ? (
        <div className="card-translate">{russian}</div>
      ) : (
        <button onClick={handleReverse} className="card-reverse" ref={ref}>
          Проверить
        </button>
      )}
    </div>
  );
}

export default Card;
