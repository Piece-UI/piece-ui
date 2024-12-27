import React from 'react';
import styled from '@emotion/styled';
import './Button.css';

const ButtonPiece = styled.button`
  border-radius: 4px;
  display: flex;
  align-items:center;
  gap: 5px;
  cursor: pointer;
  background-color: ${({bgCustomColor}) => bgCustomColor};
  border-radius: ${({rounded}) => rounded};
  padding: ${({btnSize}) =>{
    switch (btnSize) {
      case 'small' : return '6px 12px '
      case 'md' : return '8px 10px'
      case 'large' : return '12px 12px'
      default:
        return '8px 6px'
    }
  }};

  font-size: ${({ btnSize }) => {
    switch (btnSize) {
      case 'small':
        return '10px';
      case 'md':
        return '12px';
      case 'large':
        return '14px';
      default:
        return '12px';
    }
  }};

`;

const Button = ({ 
    label, 
    onClick, 
    type = 'button',
    color,  
    bgCustomColor, 
    btnSize, 
    imgIconBefore, 
    rounded,
    iconBefore,
    iconAfter,
    className,
    imgIconAfter}) => (
    <ButtonPiece 
        type={type} 
        onClick={onClick}
        bgCustomColor={bgCustomColor} 
        btnSize={btnSize}
        rounded={rounded}
        className={`btn btn--${color} ${className}`}>
        {imgIconBefore ? imgIconBefore : ''}
        {iconBefore ? iconBefore : ''}
        <span>{label}</span>
        {iconAfter ? iconAfter : ''}
        {imgIconAfter ? imgIconAfter : ''}
    </ButtonPiece>
);

export default Button;
