import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  margin: 50px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
`;

export const Cart = styled.div`
  width: 30%;
  @media (max-width: 900px) {
    width: 100%;
    margin-bottom: 50px;
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

export const ProductList = styled.ul`
  width: 70%;
  @media (max-width: 900px) {
    width: 100%;
    grid-template-columns: repeat(1, 1fr);
  }
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 4px;
    padding: 20px;

    img {
      align-self: center;
      max-width: 200px;
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
    }

    button {
      background: orange;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      padding: 12px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, 'red')};
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;

export const ProductCartView = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  height: 350px;
  overflow: auto;

  li {
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    & + li {
      padding-top: 15px;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }

    img {
      max-width: 60px;
    }

    button {
      background: red;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      padding: 20px;

      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, 'red')};
      }
    }
  }
`;

export const Footer = styled.div`
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
    background: red;
    color: #fff;
    border: 0;
    border-radius: 4px;
    width: 100%;
    overflow: hidden;
    padding: 12px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, 'red')};
    }

    span {
      flex: 1;
      text-align: center;
      font-weight: bold;
    }
  }
`;
