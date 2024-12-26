import React from "react";
import Button from "../Button/Button";
import "./card.css";
import styled from "@emotion/styled";

const CardPiece = styled.div`
    background-color: ${({bgCustomColor}) => bgCustomColor};
`;
// footer, classname, typo, events
const Card = ({
  cardHeading,
  actions = [],
  cadrImg,
  cardBodyTitle,
  cardText,
  bgCustomColor,
  bgColorclass,
  textClor,
  cardRound,
}) => {
  return (
    <CardPiece className="card"  bgCustomColor={bgCustomColor}>
      <div className="card-head">
        <h2 className="card-heading" title={cardHeading}>{cardHeading}</h2>
        <div className="card-head-action">
            {actions.map((action, index) => (
              <div key={index}>
                <img 
                  src={action.icon}
                  alt={action.icon}
                  width='25'
                  height='25'
                  onClick={action.onClick}
                />
              </div> 
            ))}
        </div>
      </div>
      <div className="card-body">
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
        <div className="card-content">
          {cardBodyTitle ? (
            <h5 className="card-body-title">{cardBodyTitle}</h5>
          ) : (
            ""
          )}
          {cardText ? <p className="card-text">{cardText}</p> : ""}
        </div>
      </div>
      {
        <div className="card-footer">
          <Button color='outline-error-100' label="Cancel"></Button>
          <Button color='accent-60' label="OK" className="btn-primary"></Button>
        </div>
      }
    </CardPiece>
  );
};

export default Card;
