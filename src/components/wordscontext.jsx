import { createContext, useState, useEffect } from "react";
import "./word.css";

export const WordContext = createContext({});

export function WordContextProvider(props) {
  const [wordapi, setWordApi] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(!isLoading);
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
          setIsLoading(isLoading);
          setWordApi(data);
          console.log(data);
        });
    } catch (error) {
      setError(error);
    }
  }, []);

  // console.log(wordapi);
  // wordapi объект

  if (error) {
    return <p className="loading">{error.message}</p>;
  }

  if (isLoading) {
    return <p className="loading">Loading ...</p>;
  }

  return (
    <div>
      <WordContext.Provider value={wordapi}>
        {props.children}
      </WordContext.Provider>
    </div>
  );
}
