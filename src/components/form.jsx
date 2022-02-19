import "./form.css";
import InputNew from "./inputnewwords";
import { regexRu, regexEng } from "./helpers.js";

function AddNewWords(props) {
  function onValidateEng(inputValue) {
    if (inputValue.length < 1) {
      return false;
    }

    if (regexEng.test(inputValue)) {
      // return true;
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
      // return true;
    } else if (regexEng.test(inputValue)) {
      return false;
    }

    return true;
  }

  return (
    <div className="form-wrapper">
      <p>English:</p>
      <InputNew regexEng={regexEng} onValidateEng={onValidateEng} value="" />
      <p>Перевод:</p>
      <InputNew regexRu={regexRu} onValidateRu={onValidateRu} value="" />
      <p>Транскрипция:</p>
      <InputNew value="" />
      <p> Категория:</p>
      <InputNew value="" />
      <button className="add-btn">Добавить</button>
    </div>
  );
}

export default AddNewWords;
