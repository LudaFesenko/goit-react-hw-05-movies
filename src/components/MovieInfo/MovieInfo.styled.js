import styled from 'styled-components';

export const MovieBlock = styled.div`
  display: flex;
  border-bottom: 1px solid black;
`;

export const Title = styled.h2`
  margin-left: 24px;
`;

export const Info = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
`;

export const Year = styled.span`
  color: orangered;
  font-size: 18px;
  font-weight: 600;
`;

export const Score = styled.p`
  margin-left: 24px;
`;

export const Genres = styled.div`
  margin-left: 24px;
`;

export const OverviewBlock = styled.div`
  margin-left: 24px;
`;

export const Block = styled.div`
  display: flex;
  gap: 30px;
`;

export const MoviePoster = styled.img`
  width: 200px;

  height: 300px;
  object-fit: cover;
`;
