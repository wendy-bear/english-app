import { createContext, useState, useEffect } from "react";

export const WordContext = createContext();

export function WordContextProvider(props) {
  const [wordapi, setWordApi] = useState([]);

  useEffect(() => {
    fetchApi();
  }, []);

  function fetchApi() {
    fetch("http://itgirlschool.justmakeit.ru/api/words")
      .then((response) => response.json())
      .then((response) => setWordApi({ wordapi: response }));

    console.log(wordapi);
  }

  return (
    <WordContext.Provider value={{ wordapi }}>
      {props.children}
    </WordContext.Provider>
  );
}
