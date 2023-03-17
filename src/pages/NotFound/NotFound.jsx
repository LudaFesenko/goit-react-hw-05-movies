import { Link } from 'react-router-dom';

import { Container, Number, Text } from './NotFound.styled';

const NotFound = () => (
  <Container>
    <Number>404</Number>
    <Text>Sorry, we couldn't find that page</Text>
    <Link to="/">Home</Link>
  </Container>
);

export default NotFound;
