import axios from "axios";
import {
  GETMOVIES_ALL,
  SEARCH_BY_TITLE,
  GETMOVIE_DETAIL,
} from "store/actions/types";
import { BASE_URL } from "modules/constants/api.const";

export const fetchData = (data) => {
  return {
    type: GETMOVIES_ALL,
    data,
  };
};

export const searchData = (data) => {
  return {
    type: SEARCH_BY_TITLE,
    data,
  };
};

export const fetchDetail = (data) => {
  return {
    type: GETMOVIE_DETAIL,
    data,
  };
};

export const fetchAllMovies = () => {
  return (dispatch) => {
    return axios
      .get(`${BASE_URL}s=Batman`)
      .then((response) => {
        dispatch(fetchData(response.data.Search));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const searchMovie = (search, pageNumber) => {
  return (dispatch) => {
    return axios({
      method: "GET",
      url: `${BASE_URL}`,
      params: { s: search, page: pageNumber },
    })
      .then((response) => {
        alert("search complete");
        dispatch(searchData(response.data.Search));
      })
      .catch((error) => {
        throw error;
      });
  };
};

export const fetchMovieDetail = (id) => {
  return (dispatch) => {
    return axios
      .get(`${BASE_URL}i=${id}`)
      .then((response) => {
        dispatch(fetchDetail(response.data));
      })
      .catch((error) => {
        throw error;
      });
  };
};
