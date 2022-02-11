import Card from "./cardapp";
import "./cardapp.css";
import wordbook from "./dictionary";
import React, { useState, useRef, useEffect, useContext } from "react";
import { WordContext } from "./wordscontext";

function Cardlist(changeLearn, id, reverse) {
  const wordapiProp = useContext(WordContext);

  let [currentIndex, changeCurentIndex] = useState(0);

  let [currentLearn, changeCurentLearn] = useState(0);

  // let [words, setWords] = useState(wordbook);
  let [words, setWords] = useState(wordapiProp);

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
  console.log(wordapiProp);

  return (
    <div className="element-wrapper">
      {currentIndex === 0 ? null : (
        <button className="nav-btn nav-left" onClick={changePrev}></button>
      )}
      <div className="card-container">
        <Card
          {...wordapiProp[currentIndex]}
          id={id}
          changeLearn={changeLearn}
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
