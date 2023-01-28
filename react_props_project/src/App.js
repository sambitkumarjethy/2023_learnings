import "./App.css";
import Header from "./componets/Header";
import Movie from "./componets/Movie";
import movies from "./movie.json";

function App() {
  let login = true;
  if (login === false) {
    return <h1>You are not logged In.</h1>;
  }
  return (
    <div className="App">
      <Header />
      {login === false ? <h1>You are not logged In.</h1> : <div>Logged In</div>}
      {/* Use of If else inside return */}
      {(() => {
        if (login) {
          return <h1>Logged Inn.</h1>;
        } else if (login === "sdfsf") {
          return <h1>you can use else if here.</h1>;
        } else {
          return <h1>You are not logged Inn.</h1>;
        }
      })()}
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
