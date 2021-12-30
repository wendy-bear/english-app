import "./word.css";
import wordbook from "./dictionary";

function Word({ english, russian, transcription, tags, id }) {
  return (
    <tr>
      <td>{english}</td>
      <td>{russian}</td>
      <td>{transcription}</td>
      <td>{tags}</td>
      <td>
        <button className="edit">Редактировать</button>
        <button className="delete">Удалить</button>
      </td>
    </tr>
  );
}
export default Word;
