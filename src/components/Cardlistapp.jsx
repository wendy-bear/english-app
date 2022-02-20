import Card from "./cardapp";
import "./cardapp.css";
import wordbook from "./dictionary";
import React, { useState, useRef, useEffect, useContext } from "react";
import { WordContext } from "./wordscontext";

function Cardlist(changeLearn, id, reverse) {
  const context = useContext(WordContext);
  const wordapi = context.wordapi;
  const reverseCard = context.reverseCard;

  let [currentIndex, changeCurentIndex] = useState(0);

  let [currentLearn, changeCurentLearn] = useState(0);

  changeLearn = () => {
    changeCurentLearn(currentLearn + 1);
    reverseCard(currentIndex);
  };

  function changeNext() {
    changeCurentIndex(currentIndex + 1);
  }
  function changePrev() {
    changeCurentIndex(currentIndex - 1);
  }

  return (
    <div className="element-wrapper">
      {currentIndex === 0 ? null : (
        <button className="nav-btn nav-left" onClick={changePrev}></button>
      )}
      <div className="card-container">
        <Card {...wordapi[currentIndex]} id={id} changeLearn={changeLearn} />
        <div className="card-numbers">
          {currentIndex + 1} / {wordapi.length}
        </div>
        <div className="card-learned">Вы изучили {currentLearn} слов</div>
      </div>
      {currentIndex === wordapi.length - 1 ? null : (
        <button className="nav-btn" onClick={changeNext}></button>
      )}
    </div>
  );
}
export default Cardlist;
