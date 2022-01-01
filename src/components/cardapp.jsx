import "./cardapp.css";
import wordbook from "./dictionary";

function Card(english, russian, transcription, tags, id) {
  return (
    <div className="card-wrapper">
      <div className="card-word">{english}</div>
      <div className="card-transcription">{transcription}</div>
      <button className="card-reverse">Проверить</button>
    </div>
  );
}

export default Card;
