import styled from 'styled-components';

export const Container = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;
