import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 8px 8px;
  margin-bottom: 16px;
  color: gray;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 0.5px grey;

  :hover {
    color: orangered;
  }
`;
