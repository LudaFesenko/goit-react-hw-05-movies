import { React, useEffect, useState } from 'react';
import { Notify } from 'notiflix';

import MoviesList from '../../components/MoviesList/MoviesList';
import Loader from '../../components/Loader';
import { fetchTrending } from '../../api';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const trending = await fetchTrending();
        setTrendingMovies(trending.results);
      } catch (error) {
        return Notify.failure(`Sorry, please try again`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <h2>Trending today</h2>
      {isLoading && <Loader />}

      {trendingMovies && <MoviesList movies={trendingMovies} />}
    </>
  );
};

export default Home;
