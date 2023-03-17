import { NavLink } from 'react-router-dom';
import React from 'react';
import PropTypes from 'prop-types';

import {
  MovieBlock,
  Title,
  Info,
  Year,
  Score,
  Genres,
  OverviewBlock,
  Block,
  MoviePoster,
} from './MovieInfo.styled';
import { IMAGE_BASE_URL } from '../../constants';
import movieCard from '../../images/movieCard.png';

const MovieInfo = ({
  movie: {
    poster_path,
    title,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  },
}) => (
  <div>
    <MovieBlock>
      <div>
        <MoviePoster
          src={poster_path ? `${IMAGE_BASE_URL}${poster_path}` : movieCard}
          alt={title}
        />
      </div>

      <div>
        <Info>
          <Title>{title || original_title}</Title>
          <Year>{`(${release_date?.slice(0, 4)})`}</Year>
        </Info>
        <Score>
          User score: <span>{Math.round(vote_average * 10)}%</span>
        </Score>
        <Genres>
          <h3>Genres</h3>
          <p>{genres && genres.map(genre => genre.name).join(' || ')}</p>
        </Genres>
        <OverviewBlock>
          <h3>Overview</h3>
          <p>{overview}</p>
        </OverviewBlock>
      </div>
    </MovieBlock>

    <div>
      <h3>Additional information</h3>
      <Block>
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
      </Block>
    </div>
  </div>
);

MovieInfo.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string.isRequired,
    original_title: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
  }).isRequired,
};

export default MovieInfo;
