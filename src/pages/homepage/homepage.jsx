import { Input, Card, Row, Col } from "antd";
import { useHistory } from "react-router-dom";
import MovieSlide from "modules/components/movie-slide";
import Modal from "modules/components/modal";
import useHomepage from "./homepage.hook";
import "./homepage.scss";

const Homepage = () => {
  const history = useHistory();
  const {
    search,
    handleSearch,
    modalVisible,
    closeModal,
    getMovieDetail,
    movieDetail,
    lastMovieElementRef,
    loading,
    movieList,
    error,
  } = useHomepage();
  const { Search } = Input;

  return (
    <>
      <MovieSlide />
      <div className="movie-list">
        <div className="movie-list__title">
          <h1>Find Your Favorite Movie!</h1>
        </div>
        <Search
          className="movie-list__search"
          placeholder="search movie"
          onChange={handleSearch}
          value={search}
          style={{ width: "50%" }}
        />
        <div>
          <Row justify="space-around" className="movie-list__movie">
            {movieList.length > 0 &&
              movieList.map((movie, index) => {
                if (movieList.length === index + 1) {
                  return (
                    <div ref={lastMovieElementRef} key={movie.imdbID}>
                      <Col>
                        <Card
                          className="movie-list__movie__card"
                          title={movie.Title}
                          bordered={false}
                          style={{ width: 300 }}
                        >
                          <img
                            src={movie.Poster}
                            width="50%"
                            onClick={() =>
                              getMovieDetail(
                                movie.Title,
                                movie.Poster,
                                movie.imdbID
                              )
                            }
                          />
                          <p>Type: {movie.Type}</p>
                          <p>Year: {movie.Year}</p>
                        </Card>
                      </Col>
                    </div>
                  );
                } else {
                  return (
                    <div key={movie.imdbID}>
                      <Col>
                        <Card
                          className="movie-list__movie__card"
                          title={movie.Title}
                          bordered={false}
                          style={{ width: 300 }}
                        >
                          <img
                            src={movie.Poster}
                            width="50%"
                            onClick={() =>
                              getMovieDetail(
                                movie.Title,
                                movie.Poster,
                                movie.imdbID
                              )
                            }
                          />
                          <p>Type: {movie.Type}</p>
                          <p>Year: {movie.Year}</p>
                        </Card>
                      </Col>
                    </div>
                  );
                }
              })}
            {loading && <p>loading....</p>}
            {error && <p>no data....</p>}
          </Row>
          <Modal
            movieTitle={movieDetail.title}
            movieImages={movieDetail.poster}
            visible={modalVisible}
            closeModal={() => closeModal()}
            onClickDetailMovie={() => history.push(`/detail/${movieDetail.id}`)}
          ></Modal>
        </div>
      </div>
    </>
  );
};

export default Homepage;
