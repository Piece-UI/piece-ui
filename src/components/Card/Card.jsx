import React from "react";
import Button from "../Button/Button";
import "./card.css";
import styled from "@emotion/styled";

const CardPiece = styled.div`
  background-color: ${({ bgCustomColor }) => bgCustomColor};
  border-radius: ${({ cardRound }) => cardRound};
  border: ${({ border }) => border};
`;
// footer, classname, typo, events
const Card = ({
  border,
  cardHeading,
  actions = [],
  cadrImg,
  cardBodyTitle,
  cardText,
  bgCustomColor,
  bgColor,
  textColor,
  cardRound,
  footerContent
}) => {
  return (
    <CardPiece
      className={`piece__card ${bgColor}`}
      bgCustomColor={bgCustomColor}
      cardRound={cardRound}
      border={border}
      style={{ color: bgCustomColor ? textColor : "" }}
    >
      <div className="piece__cardHead">
        <h2
          className={`piece__cardHeading ${
            cardHeading.length > 12 ? "piece__text--elipese" : ""
          }`}
          title={cardHeading}
        >
          {cardHeading}
        </h2>
        <div className="piece__card__headAction">
          {actions.map((action, index) => (
            <span key={index}>
              {action.image && action.image}
              {action.icon && action.icon}
            </span>
          ))}
        </div>
      </div>
      <div className="piece__cardBody">
        {cadrImg ? (
          <img
            className="img-responisve"
            src={cadrImg}
            alt="body img"
            width="100"
            height="100"
          />
        ) : (
          ""
        )}
        <div className="piece__cardContent">
          {cardBodyTitle ? (
            <h5 className="piece__card--bodyTitle">{cardBodyTitle}</h5>
          ) : (
            ""
          )}
          {cardText ? <p className="piece__cardText">{cardText}</p> : ""}
        </div>
      </div>
      {footerContent && 
        <div className="piece__cardFooter">
            {footerContent}
        </div>
      }
        
    </CardPiece>
  );
};

export default Card;
