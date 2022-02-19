import "./form.css";
import { useState, useEffect } from "react";

function InputNew(props) {
  const [value, setValue] = useState(props.value);
  const [errorInp, setErrorInp] = useState("");

  function handleInputForm(event) {
    validateForm(event.target.value);
  }

  function validateForm(inputValue) {
    setValue(inputValue);
    if (inputValue === "") {
      setErrorInp("Заполните поле!");
    } else if (props.onValidateEng && !props.onValidateEng(inputValue)) {
      setErrorInp("Неправильный формат ввода данных");
    } else if (props.onValidateRu && !props.onValidateRu(inputValue)) {
      setErrorInp("Неправильный формат ввода данных");
    } else {
      setErrorInp("");
    }
  }

  //  useEffect(() => {
  //    validateForm(value);
  // }, []);

  let className = "input-form";
  if (errorInp) {
    className += " input-error";
  }

  return (
    <>
      <input value={value} onChange={handleInputForm} className={className} />
      <div className="errorInp">{errorInp}</div>
    </>
  );
}
export default InputNew;
