import { HiArrowLeft } from 'react-icons/hi';

import { StyledLink } from './BackLink.styled';

export const BackLink = ({ to, children }) => (
  <StyledLink to={to}>
    <HiArrowLeft size="24" />
    {children}
  </StyledLink>
);
