import "./App.css";
import Header from "./componets/Header";
import Movie from "./componets/Movie";
import movies from "./movie.json";

function App() {
  return (
    <div class="App">
      <Header />
      <div className="main">
        {movies.map((element) => {
          return (
            <Movie
              key={element.imdbID}
              tittle={element.Title}
              year={element.Year}
              img={element.Poster}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
