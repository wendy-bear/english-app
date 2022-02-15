import "./form.css";
import InputNew from "./inputnewwords";

function AddNewWords() {
  return (
    <div className="form-wrapper">
      <p>English:</p>
      <InputNew />
      <p>Перевод:</p>
      <InputNew />
      <p>Транскрипция:</p>
      <InputNew />
      <p> Категория:</p>
      <InputNew />
      <button className="add-btn">Добавить</button>
    </div>
  );
}

export default AddNewWords;
