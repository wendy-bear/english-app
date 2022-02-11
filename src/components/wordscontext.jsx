import { createContext, useState, useEffect } from "react";

export const WordContext = createContext({});

export function WordContextProvider(props) {
  const [wordapi, setWordApi] = useState([]);

  useEffect(() => {
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => response.json())
      .then((data) => {
        setWordApi(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <WordContext.Provider value={wordapi}>
        {props.children}
      </WordContext.Provider>
    </div>
  );
}
