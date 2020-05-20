import styled, { keyframes } from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    margin: 10px;
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

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  max-width: 20%;
  margin: auto;

  @media (max-width: 900px) {
    max-width: 100%;
  }

  button {
    background: ${(props) => props.theme};
    color: #fff;
    border: 0;
    border-radius: 4px;
    width: 100%;
    overflow: hidden;
    padding: 12px;
    margin: 5px;
    transition: background 0.2s;

    &:hover {
      background: ${(props) => darken(0.03, props.theme)};
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }
`;
