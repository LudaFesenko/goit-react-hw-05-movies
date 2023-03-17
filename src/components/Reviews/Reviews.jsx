import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Notify } from 'notiflix';

import { fetchMovieReviews } from '../../api';
import Loader from '../Loader';
import { Card } from './Reviews.styled';

const Reviews = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [review, setReview] = useState(null);
  const { movieId } = useParams('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const result = await fetchMovieReviews(movieId);
        setReview(result.results);
      } catch (error) {
        return Notify.success('Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  if (!review) {
    return null;
  }

  if (review.length === 0) {
    return <p>Sorry we don't have any reviews for this movie!</p>;
  }

  return (
    <>
      {isLoading && <Loader />}
      <Card>
        {review?.map(({ id, author, content }) => (
          <li key={id}>
            <h2>
              Author: <span>{author}</span>
            </h2>
            <p>{content}</p>
          </li>
        ))}
      </Card>
    </>
  );
};

export default Reviews;
