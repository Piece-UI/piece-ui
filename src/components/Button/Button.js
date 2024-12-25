import React from 'react';
import styled from '@emotion/styled';
import './Button.css';

const ButtonPiece = styled.button`
  border-radius: 4px;
  border:none;
  display: flex;
  align-items:center;
  gap: 5px;
  background-color: ${({bgCustomColor}) => bgCustomColor};
  padding: ${({btnSize}) =>{
    switch (btnSize) {
      case 'small' : return '8px 10px'
      case 'md' : return '10px 16px'
      case 'large' : return '10px 20px'
      default:
        return '10px 16px'
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
    imgIconAfter}) => (
    <ButtonPiece 
        type={type} 
        onClick={onClick}
        bgCustomColor={bgCustomColor} 
        btnSize={btnSize} 
        className={`btn btn-${color}`}>

        {imgIconBefore ? <img src={imgIconBefore} alt={label} className='imgicon' /> : ''}
        <span>{label}</span>
        {imgIconAfter ? <img src={imgIconAfter} alt={label} className='imgicon' /> : ''}
        
    </ButtonPiece>
);

export default Button;
