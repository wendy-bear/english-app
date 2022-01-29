import "./word.css";
import wordbook from "./dictionary";
import React, { useState } from "react";

function Word({ english, russian, transcription, tags, id }) {
  let [save, showSave] = useState(false);

  let handleSave = () => {
    showSave(false);
  };

  let handleCancel = () => {
    showSave(false);
    setEnglishDef(english);
    setRussianDef(russian);
    setTranscriptionDef(transcription);
    setTagsDef(tags);
  };

  let handleEdit = () => {
    showSave(true);
  };

  let [englishDef, setEnglishDef] = useState(english);

  let [russianDef, setRussianDef] = useState(russian);

  let [transcriptionDef, setTranscriptionDef] = useState(transcription);

  let [tagsDef, setTagsDef] = useState(tags);

  if (!save) {
    return (
      <tr>
        <td>{englishDef}</td>
        <td>{russianDef}</td>
        <td>{transcriptionDef}</td>
        <td>{tagsDef}</td>
        <td>
          <button className="edit-btn" onClick={handleEdit}></button>
          <button className="delete-btn"></button>
        </td>
      </tr>
    );
  }

  if (!englishDef || !russianDef || !transcriptionDef || !tagsDef) {
    return (
      <tr>
        <td>
          <input
            value={englishDef}
            onChange={(event) => setEnglishDef(event.target.value)}
            className={englishDef === "" && "error-inp"}
          />
        </td>
        <td>
          <input
            value={russianDef}
            onChange={(event) => setRussianDef(event.target.value)}
            className={russianDef === "" && "error-inp"}
          />
        </td>
        <td>
          <input
            value={transcriptionDef}
            onChange={(event) => setTranscriptionDef(event.target.value)}
            className={transcriptionDef === "" && "error-inp"}
          />
        </td>
        <td>
          <input
            value={tagsDef}
            onChange={(event) => setTagsDef(event.target.value)}
            className={tagsDef === "" && "error-inp"}
          />
        </td>
        <td>
          <button className="save-btn" onClick={handleSave} disabled></button>
          <button className="cancel-btn" onClick={handleCancel}></button>
          <button className="edit-btn" onClick={handleEdit}></button>
          <button className="delete-btn"></button>
        </td>
      </tr>
    );
  }

  return (
    <tr>
      <td>
        <input
          value={englishDef}
          onChange={(event) => setEnglishDef(event.target.value)}
        />
      </td>
      <td>
        <input
          value={russianDef}
          onChange={(event) => setRussianDef(event.target.value)}
        />
      </td>
      <td>
        <input
          value={transcriptionDef}
          onChange={(event) => setTranscriptionDef(event.target.value)}
        />
      </td>
      <td>
        <input
          value={tagsDef}
          onChange={(event) => setTagsDef(event.target.value)}
        />
      </td>
      <td>
        <button className="save-btn" onClick={handleSave}></button>
        <button className="cancel-btn" onClick={handleCancel}></button>
        <button className="edit-btn" onClick={handleEdit}></button>
        <button className="delete-btn"></button>
      </td>
    </tr>
  );
}

export default Word;
