const Movie = ({ img, tittle, year }) => {
  return (
    <div className="movie">
      <img src={img} alt="" />
      <p>{tittle}</p>
      <p>Year: {year}</p>
    </div>
  );
};

export default Movie;
