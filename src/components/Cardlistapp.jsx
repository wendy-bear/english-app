import Card from "./cardapp";
import "./cardapp.css";
import wordbook from "./dictionary";
import React, { useState, useRef, useEffect } from "react";

function Cardlist(changeLearn, id, reverse) {
  let [currentIndex, changeCurentIndex] = useState(0);

  let [currentLearn, changeCurentLearn] = useState(0);

  let [words, setWords] = useState(wordbook);

  //  let [reverse, setReverse] = useState(false);

  // let handleReverse = () => {
  //    setReverse(!reverse);
  // };

  changeLearn = () => {
    changeCurentLearn(currentLearn + 1);

    let newWords = [...words];
    newWords[currentIndex].reverse = true;
    setWords(newWords);
    console.log(newWords);
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
        <Card
          {...wordbook[currentIndex]}
          id={id}
          changeLearn={changeLearn}
          //  reverse={reverse}
          //  setReverse={setReverse}
          // handleReverse={handleReverse}
        />
        <div className="card-numbers">
          {currentIndex + 1} / {words.length}
        </div>
        <div className="card-learned">Вы изучили {currentLearn} слов</div>
      </div>
      {currentIndex === words.length - 1 ? null : (
        <button className="nav-btn" onClick={changeNext}></button>
      )}
    </div>
  );
}
export default Cardlist;
