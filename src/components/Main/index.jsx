import Filter from "./Controls/Filter";
import Search from "./Controls/Search";
import FilmList from "./FilmList";

const Main = () => {
  return (
    <div className="container">
      <Search />
      <Filter />
      <FilmList />
    </div>
  );
};

export default Main;
