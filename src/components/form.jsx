import "./form.css";
import InputNew from "./inputnewwords";

function AddNewWords() {
  return (
    <div className="form-wrapper">
      <p>English:</p>
      <InputNew value="" />
      <p>Перевод:</p>
      <InputNew value="" />
      <p>Транскрипция:</p>
      <InputNew value="" />
      <p> Категория:</p>
      <InputNew value="" />
      <button className="add-btn">Добавить</button>
    </div>
  );
}

export default AddNewWords;
