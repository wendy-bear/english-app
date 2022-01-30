import "./cardapp.css";
import wordbook from "./dictionary";
import React, { useState, useEffect, useRef } from "react";

function Card({
  english,
  russian,
  transcription,
  tags,
  id,
  changeLearn,
  reverse,
  setReverse,
  //handleReverse,
}) {
  // let [reverse, setReverse] = useState(false);

  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  });

  let handleReverse = () => {
    changeLearn();
  };

  // перерисовка карточки при смене id
  // useEffect(() => {
  //   setReverse(false);
  // }, [id]);

  //  useEffect(() => ref.current.addEventListener("click", handleReverse), [id]);

  // код со старой кнопкой переворота
  //  <button onClick={handleReverse} className="card-reverse" ref={ref}>
  //    {reverse ? "Скрыть" : "Проверить"}
  //  </button>
  //  {reverse && <div className="card-translate">{russian}</div>}

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
