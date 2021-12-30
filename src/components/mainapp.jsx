import "./mainapp.css";
import wordbook from "./dictionary";
import Word from "./word";

function Wordtable() {
  //перечисляем свойства объекта word, которые определены в компоненте word, через spread оператор
  //уникальный ключ для map добавляем в отрисовываемый компонент word
  // в tbody вставляем map

  return (
    <table border="1px">
      <thead>
        <tr>
          <td>English</td>
          <td>Перевод</td>
          <td>Транскрипция</td>
          <td>Категория</td>
          <td>Управление</td>
        </tr>
      </thead>
      <tbody>
        {wordbook.map((item) => {
          return <Word {...item} key={item.id} />;
        })}
      </tbody>
    </table>
  );
}

export default Wordtable;
