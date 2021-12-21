import "./wordcard.css";
import ShuffleBut from "./shufflebutton";
import RestartBut from "./restartbutton";
import wordbook from "./components/dictionary";

function LearningWord() {
  return (
    <div className="wraper">
      <header></header>
      <div className="card-main">
        <ShuffleBut></ShuffleBut>
        <RestartBut></RestartBut>
      </div>
    </div>
  );
}

export default LearningWord;
