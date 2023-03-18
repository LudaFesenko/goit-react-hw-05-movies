import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix';

import { fetchMovieCredits } from '../../api';
import Loader from '../Loader';
import CastItem from '../CastItem';
import { StyledCast } from './Cast.styled';

const Cast = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cast, setCast] = useState(null);
  const { movieId } = useParams('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await fetchMovieCredits(movieId);
        setCast(result.cast);
      } catch (error) {
        return Notify.failure('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  if (cast?.length === 0) {
    return <p>Sorry we don't have any casts for this movie!</p>;
  }

  return (
    <>
      {isLoading && <Loader />}
      <StyledCast>
        {cast?.map(({ id, profile_path, name, original_name, character }) => (
          <CastItem
            key={id}
            profilePath={profile_path}
            name={name}
            originalName={original_name}
            character={character}
          />
        ))}
      </StyledCast>
    </>
  );
};

export default Cast;
