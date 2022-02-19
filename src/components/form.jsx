import "./form.css";
import InputNew from "./inputnewwords";
import { regexRu, regexEng } from "./helpers.js";
import { useState, useEffect, useContext } from "react";
import { WordContext } from "./wordscontext";

function AddNewWords(props) {
  function onValidateEng(inputValue) {
    if (inputValue.length < 1) {
      return false;
    }

    if (regexEng.test(inputValue)) {
    } else if (regexRu.test(inputValue)) {
      return false;
    }

    return true;
  }

  function onValidateRu(inputValue) {
    if (inputValue.length < 1) {
      return false;
    }

    if (regexRu.test(inputValue)) {
    } else if (regexEng.test(inputValue)) {
      return false;
    }

    return true;
  }

  const context = useContext(WordContext);

  function onSubmitForm(e) {
    e.preventDefault();
    const formNewWord = new FormData(e.target);

    const createNewWord = {
      english: formNewWord.get("english"),
      russian: formNewWord.get("russian"),
      transcription: formNewWord.get("transcription"),
      tags: formNewWord.get("tags"),
    };

    context.sendNewWords(createNewWord);
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={onSubmitForm}>
        <p>English:</p>
        <InputNew
          regexEng={regexEng}
          onValidateEng={onValidateEng}
          value=""
          name="english"
        />
        <p>Перевод:</p>
        <InputNew
          regexRu={regexRu}
          onValidateRu={onValidateRu}
          value=""
          name="russian"
        />
        <p>Транскрипция:</p>
        <InputNew value="" name="transcription" />
        <p> Категория:</p>
        <InputNew value="" name="tags" />
        <button className="add-btn">Добавить</button>
      </form>
    </div>
  );
}

export default AddNewWords;
