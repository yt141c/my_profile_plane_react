import styled from 'styled-components';

export const LinkButtonComponent = styled.a`
  /* ButtonComponent.styles.css */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 10%;
  border: none;
  /* box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.1); */
  cursor: pointer;
  text-decoration: none;
  color: transparent;
  background-color: transparent;
  font-size: 20px;
  transition: all 0.3s ease;

  &.button:hover {
    transform: translateY(-2px);
    /* box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15); */
  }

  &.button:active {
    transform: translateY(1px);
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15); */
  }

  &.button-default {
    background-color: #007bff;
  }

  &.button-default:hover {
    background-color: #0056b3;
  }
  & .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    fill: #282c34;
    opacity: 0.9;
  }
`;
