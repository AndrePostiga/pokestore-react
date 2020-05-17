import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg)
  }
`;

export const Loading = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;

  svg {
        animation: ${rotate} 2s linear infinite;
  }
`;