const Movie = ({ title, playtime, img, release, genre }) => {
  return (
    <>
      <img src={img} alt="" width={200} />
      <div className="secPartCard">
        <h2>{title}</h2>
        <div className="box">
          <p>{release}</p>
          <p>{playtime}</p>
        </div>
      </div>
    </>
  );
};

export default Movie;
