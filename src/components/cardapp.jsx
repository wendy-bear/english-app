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
  currentLearn,
}) {
  let [reverse, setReverse] = useState(false);

  const ref = useRef();

  const reffocus = useRef();

  let handleReverse = () => {
    setReverse(!reverse);
  };

  // перерисовка карточки при смене id
  useEffect(() => {
    setReverse(false);
  }, [id]);

  useEffect(() => ref.current.addEventListener("click", changeLearn), [id]);

  // нужно ли тут снятие обработчика кликов?
  // useEffect(() => ref.current.removeEventListener("click", changeLearn), [id]);

  // не понимаю, как фокус на кнопку повесить
  //useEffect(() => reffocus.current.focus(), [id]);
  //console.log(reffocus);

  // выводит элемент после &&, если условие true)
  return (
    <div className="card-wrapper">
      <div className="card-word">{english}</div>
      <div className="card-transcription">{transcription}</div>

      <button
        onClick={handleReverse}
        className="card-reverse"
        ref={ref}
        reffocus={reffocus}
      >
        {reverse ? "Скрыть" : "Проверить"}
      </button>
      {reverse && <div className="card-translate">{russian}</div>}
    </div>
  );
}

export default Card;
