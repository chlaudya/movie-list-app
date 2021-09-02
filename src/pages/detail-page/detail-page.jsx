import { Col, Row, Divider } from "antd";
import useDetailPage from "./detail-page.hook";

import "./detail-page.scss";

const DetailPage = () => {
  const { movieDetail } = useDetailPage();
  return (
    <div className="detail-page">
      <h1>{movieDetail.Title}</h1>
      <Divider />
      <Row>
        <Col flex={"30%"} className="detail-page__poster">
          <img src={movieDetail.Poster} alt={`poster-${movieDetail.Title}`} />
        </Col>
        <Col flex={"70%"} className="detail-page__description">
          <p>
            <span>Plot:</span> {movieDetail.Plot}
          </p>
          <Divider />

          <p>
            <span>Released:</span> {movieDetail.Released}
          </p>
          <Divider />

          <p>
            <span>Actors: </span> {movieDetail.Actors}
          </p>
          <Divider />

          <p>
            <span>Director:</span> {movieDetail.Director}
          </p>
          <Divider />

          <p>
            <span>Genre: </span>
            {movieDetail.Genre}
          </p>
          <Divider />

          <p>
            <span>Runtime: </span>
            {movieDetail.Runtime}
          </p>
          <Divider />

          <p>
            <span>imdbRating:</span> {movieDetail.imdbRating}
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default DetailPage;
