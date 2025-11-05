import Filter from "./Controls/Filter";
import Search from "./Controls/Search";
import FilmList from "./FilmList";
import { useState } from "react";
import { useEffect } from "react";

const Main = () => {
  const [filmList, setFilmList] = useState([]);

  useEffect(() => {
    fetch("http://www.omdbapi.com/?apikey=436600bc&s=game")
      .then((response) => response.json())
      .then((data) => setFilmList(data.Search))
      .catch((err) => console.log(err));
  }, []);

  console.log(filmList);
  return (
    <>
      <div className="container">
        <Search />
        <Filter />
        <FilmList filmList={filmList} />
      </div>
    </>
  );
};

export default Main;

// инициализация
// монтирование
// обновление
// размонтирование
