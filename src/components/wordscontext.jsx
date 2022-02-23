import { createContext, useState, useEffect } from "react";
import "./word.css";

export const WordContext = createContext({});

export function WordContextProvider(props) {
  const [wordapi, setWordApi] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);
  const [status, setStatus] = useState("Вы удалили слово!");

  //подняли в контекст функцию переворота карточки по ее колбек-индексу в массиве с сервера
  function reverseCard(currentIndex) {
    let newWords = [...wordapi];
    newWords[currentIndex].reverse = true;
    setWordApi(newWords);
  }

  function loadingData() {
    setIsLoading(true);
    try {
      fetch("http://itgirlschool.justmakeit.ru/api/words")
        .then((response) => {
          if (response.ok) {
            //Проверяем что код ответа 200
            return response.json();
          } else {
            throw new Error("Ой, что-то пошло не так...");
          }
        })

        .then((data) => {
          setIsLoading(false);
          setWordApi(data);
          console.log(data);
        });
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }
  //добавление нового слова
  async function sendNewWords(createNewWord) {
    let data = await fetch("/api/words/add", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createNewWord),
    });

    let result = await data.json();
    console.log(result);
  }

  //удаление слова
  function removeItem(id) {
    fetch("api/words/" + id + "/delete", {
      method: "POST",
    });
    setStatus(status);
    alert(status);
    setWordApi(wordapi.filter((item) => item.id !== id));
  }

  //редактирование слова слова
  function updateItem(id) {
    fetch("api/words/" + id + "/update", {
      method: "POST",
    });
    setStatus("вы изменили слово");
  }

  useEffect(() => {
    loadingData();
  }, []);

  if (error) {
    return <p className="loading">{error.message}</p>;
  }

  if (isLoading) {
    return <p className="loading">Loading ...</p>;
  }
  //value атрибут, но туда передаем объект с ключами
  return (
    <div>
      <WordContext.Provider
        value={{
          wordapi: wordapi,
          reverseCard: reverseCard,
          sendNewWords: sendNewWords,
          removeItem: removeItem,
          updateItem: updateItem,
          setWordApi: setWordApi,
        }}
      >
        {props.children}
      </WordContext.Provider>
    </div>
  );
}
