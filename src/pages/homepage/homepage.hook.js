import { useEffect, useState, useRef, useCallback } from "react";
import axios from "axios";
import { BASE_URL } from "modules/constants/api.const";

const useHomepage = () => {
  const [search, setSearch] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [movieDetail, setMovieDetail] = useState({});
  const [movieList, setMovieList] = useState([]);

  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setMovieList([]);
  }, [search]);

  useEffect(() => {
    handleInfiniteScroll();
  }, [search, pageNumber]);

  const handleInfiniteScroll = () => {
    setLoading(true);
    setError(false);
    let cancel;
    axios({
      method: "GET",
      url: `${BASE_URL}`,
      params: { s: search, page: pageNumber },
      cancelToken: new axios.CancelToken((c) => (cancel = c)),
    })
      .then((res) => {
        if (res.data.Search.length > 0) {
          setMovieList((prevMovies) => {
            return [...new Set([...prevMovies, ...res.data.Search])];
          });
          setLoading(false);
        }
      })
      .catch((e) => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  };

  const observer = useRef();
  const lastMovieElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPageNumber((prevPageNumber) => prevPageNumber + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  const closeModal = () => {
    setModalVisible(false);
  };

  const getMovieDetail = (title, poster, id) => {
    let movieDetailUpdate = { title, poster, id };
    setMovieDetail(movieDetailUpdate);
    setModalVisible(true);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setPageNumber(1);
  };

  return {
    search,
    handleSearch,
    closeModal,
    modalVisible,
    getMovieDetail,
    movieDetail,
    movieList,
    lastMovieElementRef,
    error,
  };
};

export default useHomepage;
