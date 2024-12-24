import React from 'react';
import styled from '@emotion/styled';

const ButtonPiece = styled.button`
    background-color: ${({varient}) => (varient === 'primary') ? 'blue' : 'gray'};
    color:white;
    border:none;
    padding: 10px 20px;
    cursor: pointer;
`;

const Button = ({ label, onClick, type = 'button', varient}) => (
  <ButtonPiece type={type} onClick={onClick} className="btn" varient={varient}>
    {label}
  </ButtonPiece>
);

export default Button;
