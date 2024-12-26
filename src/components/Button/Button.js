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
      case 'md' : return '8px 6px'
      case 'large' : return '12px 10px'
      default:
        return '8px 6px'
    }
  }};

  font-size: ${({ btnSize }) => {
    switch (btnSize) {
      case 'small':
        return '12px';
      case 'md':
        return '14px';
      case 'large':
        return '16px';
      default:
        return '14px';
    }
  }};

  .imgicon{
    width: 18px;
  };

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
    imgIconAfter}) => (
    <ButtonPiece 
        type={type} 
        onClick={onClick}
        bgCustomColor={bgCustomColor} 
        btnSize={btnSize}
        rounded={rounded}
        className={`btn btn-${color}`}>

        {imgIconBefore ? <img src={imgIconBefore} alt={label} className='imgicon' /> : ''}
        <span>{label}</span>
        {imgIconAfter ? <img src={imgIconAfter} alt={label} className='imgicon' /> : ''}
        
    </ButtonPiece>
);

export default Button;
