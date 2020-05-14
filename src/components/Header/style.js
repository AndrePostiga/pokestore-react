import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background: orange;
`;

export const Navigation = styled.nav`
  background: orange;
  display: flex;
  justify-content: baseline;
  width: 100% !important;
  padding: 20px 30px;

  input {
    width: 100%;
    border: 1px solid #ddd;
    border-radius: 4px;
    color: #666;
    margin-left: 20px;
    box-sizing: border-box;
    padding-left: 20px;
  }

  button {
    background: orange;
    border: 0;
    border-radius: 4px;
    overflow: hidden;

    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, 'orange')};
    }
  }
`;
