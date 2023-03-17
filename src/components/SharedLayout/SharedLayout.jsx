import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import Loader from '../Loader';
import cinemaImg from '../../images/cinema.png';
import { Container, Header, Logo, Link } from './SharedLayout.styled';

const SharedLayout = () => (
  <Container>
    <Header>
      <nav>
        <Link to="/" end>
          Home
        </Link>
        <Link to="/movies">Movies</Link>
      </nav>

      <Logo>
        <span>
          <img src={cinemaImg} width="40" alt="cinema" />
        </span>
        Filmoteka
      </Logo>
    </Header>
    <main>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </main>
  </Container>
);

export default SharedLayout;
