import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  width: 30%;
  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 10px;
    margin-left: 0;
  }

  border-radius: 4px;
  background-color: #fff;
  margin-left: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ProductCartView = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  height: 350px;
  overflow: auto;

  @media (max-width: 900px) {
    height: 200px;
  }

  li {
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    & + li {
      padding-top: 15px;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      @media (max-width: 900px) {
        padding-top: 5px;
      }
    }

    img {
      max-width: 60px;

      @media (max-width: 900px) {
        max-width: 30px;
      }
    }

    button {
      background: red;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      padding: 20px;

      @media (max-width: 900px) {
        padding: 5px;
      }

      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, 'red')};
      }
    }
  }
`;

export const CartFooter = styled.div`
  div {
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    strong {
      font-size: 20px;
      line-height: 20px;
      color: #333;
    }

    span {
      font-size: 20px;
      line-height: 20px;
      font-weight: bold;
    }
  }

  button {
    background: ${(props) => props.theme};
    color: #fff;
    border: 0;
    border-radius: 4px;
    width: 100%;
    overflow: hidden;
    padding: 12px;
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
