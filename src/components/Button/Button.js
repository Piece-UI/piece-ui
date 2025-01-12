import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import './Button.css';

const ButtonPiece = styled.button`
  border-radius: 4px;
  display: flex;
  align-items:center;
  gap: 8px;
  position: relative;
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

  .piece__badge--dot, .piece__badge--num{
        width: ${({badgeSize}) =>{
          switch(badgeSize){
            case 'small' : 
              return '10px';
            case 'md':
              return '14px';
            case 'large' : 
              return '16px'
            default :
              return '10px'
          }
        }};
        height: ${({badgeSize})=>{
          switch (badgeSize) {
            case 'small' : 
              return '10px';
            case 'md' :
              return '14px';
            case 'large' : 
              return '16px'
            default :
              return '10px'
          }
        }};
        background-color: ${({badgeColor}) => badgeColor};
        border-radius: 100%;
        position: absolute;
        top: -5px;
        right: -5px;
  }

  .piece__badge--num{
          width: 23px;
          height: 23px;
          text-align: center;
          line-height: 18px;
          padding: 2px;
          font-size: 11px;
          white-space: nowrap;
          text-overflow: ellipsis;
          font-weight: 700;
          letter-spacing: 0.7px;
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
    isNotifyDot,
    badgeSize,
    badgeColor,
    isNotifyNum,
    notifyCount,
    imgIconAfter}) => (

    <ButtonPiece 
        type={type} 
        onClick={onClick}
        bgCustomColor={bgCustomColor} 
        btnSize={btnSize}
        rounded={rounded}
        badgeSize={badgeSize}
        disabled={disabled}
        badgeColor={badgeColor}
        className={`piece__btn piece__btn--${color} ${className} ${disabled === true ? 'piece__btn--disabled' : ''}`}>
        {imgIconBefore ? imgIconBefore : ''}
        {iconBefore ? iconBefore : ''}
        {label}
        {iconAfter ? iconAfter : ''}
        {imgIconAfter ? imgIconAfter : ''}
        {isNotifyDot ? <span className='piece__badge--dot'></span> : ''}
        {isNotifyNum ? (
          <span className='piece__badge--num'>
            {notifyCount >= 100 ? '99+' : notifyCount >= 10 ? notifyCount : notifyCount}
          </span>
        ) : ''}


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
