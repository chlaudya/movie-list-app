import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovieDetail } from "store/actions/movies";

const useDetailPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const movieDetail = useSelector((state) => state.movies.movieDetail);

  useEffect(() => {
    dispatch(fetchMovieDetail(id));
  }, []);

  return {
    movieDetail,
  };
};

export default useDetailPage;
