import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 70%;
  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
  }

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    @media (max-width: 900px) {
      padding: 10px;
    }

    img {
      align-self: center;
      max-width: 200px;
      @media (max-width: 900px) {
        max-width: 100px;
      }
    }

    > strong {
      font-size: 16px;
      line-height: 20px;
      margin-top: 5px;
      color: #333;
    }

    > span {
      font-size: 21px;
      font-weight: bold;
      margin: 5px 0 20px;
      @media (max-width: 900px) {
        font-size: 15px;
        margin: 5px 0 10px;
      }
    }

    button {
      background: ${(props) => props.theme};
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      padding: 12px;
      transition: background 0.2s;

      @media (max-width: 900px) {
        padding: 5px;
      }

      &:hover {
        background: ${(props) => darken(0.03, props.theme)};
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
        color: #fff;

        @media (max-width: 900px) {
          font-size: 12px;
        }
      }
    }
  }
`;
