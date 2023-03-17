import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import { Notify } from 'notiflix';

import MoviesList from '../../components/MoviesList';
import Loader from '../../components/Loader';
import SearchBox from '../../components/SearchBox';
import { fetchMoviesBySearchString } from '../../api/index';

const Movies = () => {
  const [foundMovies, setFoundMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchString = searchParams.get('query') ?? '';

  useEffect(() => {
    const abortController = new AbortController();
    if (!searchString) {
      return;
    }

    const fetchData = async () => {
      setLoading(true);
      try {
        const movies = await fetchMoviesBySearchString(
          searchString,
          abortController
        );

        setFoundMovies(movies.results);

        if (!movies.results.length) {
          Notify.failure('Please write correct movie');
        }
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }

        const errorMessage = error?.response?.data?.status_message;
        Notify.failure(errorMessage || 'Write correct movie');
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [searchString]);

  const handleSubmit = query => {
    if (loading) {
      return;
    }

    setSearchParams({ query });
  };

  return (
    <>
      <SearchBox onSubmit={handleSubmit} submitting={loading} />
      {loading && <Loader />}
      {foundMovies && <MoviesList movies={foundMovies} />}
    </>
  );
};

export default Movies;
