import Card from "./cardapp";
import "./cardapp.css";
import wordbook from "./dictionary";
import React, { useState, useRef } from "react";

function Cardlist(changeLearn) {
  let [currentIndex, changeCurentIndex] = useState(0);

  let [currentLearn, changeCurentLearn] = useState(0);

  changeLearn = () => {
    changeCurentLearn(currentLearn + 1);
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
        <Card {...wordbook[currentIndex]} changeLearn={changeLearn} />
        <div className="card-numbers">
          {currentIndex + 1} / {wordbook.length}
        </div>
        <div className="card-learned">Вы изучили {currentLearn} слов</div>
      </div>
      {currentIndex === wordbook.length - 1 ? null : (
        <button className="nav-btn" onClick={changeNext}></button>
      )}
    </div>
  );
}
export default Cardlist;
