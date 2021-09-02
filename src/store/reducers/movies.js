import {
  GETMOVIES_ALL,
  SEARCH_BY_TITLE,
  GETMOVIE_DETAIL,
} from "store/actions/types";

const initialState = {
  movies: [],
  movieDetail: {},
};

const movies = (state = initialState, action) => {
  switch (action.type) {
    case GETMOVIES_ALL:
      return {
        ...state,
        movies: action.data,
      };
    case SEARCH_BY_TITLE:
      if (action.data.length > 0) {
        return {
          ...state,
          movies: action.data,
        };
      } else {
        return {
          ...state,
        };
      }
    case GETMOVIE_DETAIL:
      return {
        ...state,
        movieDetail: action.data,
      };
    default:
      return state;
  }
};
export default movies;
