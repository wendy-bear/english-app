import "./word.css";
import wordbook from "./dictionary";

function Word({ english, russian, transcription, tags, id, showSave }) {
  return (
    <tr>
      <td>{showSave ? <input defaultValue={english} /> : english}</td>
      <td>{showSave ? <input defaultValue={russian} /> : russian}</td>
      <td>
        {showSave ? <input defaultValue={transcription} /> : transcription}
      </td>
      <td>{showSave ? <input defaultValue={tags} /> : tags}</td>
      <td>
        {showSave ? <button className="save-btn"></button> : null}
        <button className="edit-btn"></button>
        <button className="delete-btn"></button>
      </td>
    </tr>
  );
}
export default Word;
