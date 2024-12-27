import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import './Button.css';

const ButtonPiece = styled.button`
  border-radius: 4px;
  display: flex;
  align-items:center;
  gap: 8px;
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

  &.btn--disabled{
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none
  }

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
    disabled,
    imgIconAfter}) => (
    <ButtonPiece 
        type={type} 
        onClick={onClick}
        bgCustomColor={bgCustomColor} 
        btnSize={btnSize}
        rounded={rounded}
        disabled={disabled}
        className={`piece__btn piece__btn--${color} ${className} ${disabled === true ? 'piece__btn--disabled' : ''}`}>
        {imgIconBefore ? imgIconBefore : ''}
        {iconBefore ? iconBefore : ''}
        {label}
        {iconAfter ? iconAfter : ''}
        {imgIconAfter ? imgIconAfter : ''}
    </ButtonPiece>
);

ButtonPiece.propTypes = {
  label : PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
  bgCustomColor : PropTypes.string,
  btnSize : PropTypes.oneOf[('small', 'mid', 'large')],
  rounded : PropTypes.string,
  iconBefore : PropTypes.string,
  iconAfter : PropTypes.string,
  imgIconBefore : PropTypes.string,
  imgIconAfter : PropTypes.string,
  disabled : PropTypes.string,
}


export default Button;
