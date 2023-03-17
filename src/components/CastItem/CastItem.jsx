import React from 'react';
import PropTypes from 'prop-types';

import defaultPicture from '../../images/defaultPicture.png';
import { ItemCast, Image, NameActor } from './CastItem.styled';
import { IMAGE_BASE_URL } from '../../constants';

const CastItem = ({ name, original_name, character, profilePath }) => {
  const imageSrc = profilePath
    ? `${IMAGE_BASE_URL}${profilePath}`
    : defaultPicture;

  return (
    <ItemCast>
      <Image src={imageSrc} alt={name} />
      <NameActor>{original_name || name}</NameActor>
      <p>Character: {character}</p>
    </ItemCast>
  );
};

CastItem.propTypes = {
  name: PropTypes.string.isRequired,
  original_name: PropTypes.string,
  character: PropTypes.string.isRequired,
  profilePath: PropTypes.string,
};

export default CastItem;
