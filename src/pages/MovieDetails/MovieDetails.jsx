import { useEffect, useState, Suspense, useRef } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import { Notify } from 'notiflix';

import { BackLink } from '../../components/BackLink/BackLink';
import MovieInfo from '../../components/MovieInfo';
import Loader from '../../components/Loader';
import { fetchMovieDetails } from '../../api';
import wrongPicture from '../../images/wrongPicture.png';
import { ImageWrong, Wrapper } from './MovieDetails.styled.js';

const MovieDetails = () => {
  const location = useLocation();
  // const backLinkHref = location.state?.from ?? '/';
  const backLinkRef = useRef(location.state?.from ?? '/');

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      try {
        const details = await fetchMovieDetails(movieId, abortController);
        setMovie(details);
      } catch (error) {
        if (axios.isCancel(error)) {
          return;
        }
        setError(error);

        const errorMessage = error?.response?.data?.status_message;

        Notify.failure(errorMessage || `Please try again`);
      }
    };

    fetchData();

    return () => {
      abortController.abort();
    };
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkRef.current}>Go back</BackLink>
      {error && (
        <Wrapper>
          <ImageWrong src={wrongPicture} alt="not found" width={400} />
          <p>The resource you requested could not be found</p>
        </Wrapper>
      )}
      {movie && <MovieInfo movie={movie} />}
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
