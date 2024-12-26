import React from "react";
import Button from "../Button/Button";
import "./card.css";

// import styled from "@emotion/styled/macro";

// const cardPiece = styled.div`
//     background-color: ${({bgCustomColor}) => bgCustomColor};
// `;

const Card = ({
  cardHeading,
  cardShareimg,
  cardSettingimg,
  cardCloseimg,
  cadrImg,
  cardBodyTitle,
  cardText,
  bgCustomecolor,
  bgColorclass,
  textClor,
  cardRound,
}) => {
  return (
    <div className="card">
      <div className="card-head">
        <h2 className="card-heading">{cardHeading}</h2>
        <div className="card-head-action">
          {cardShareimg ? (
            <div className="card-share">
              <img
                className="img-responisve"
                src={cardShareimg}
                alt="share"
                width="25"
                height="25"
              />
            </div>
          ) : (
            ""
          )}
          {cardSettingimg ? (
            <div className="card-setting">
              <img
                className="img-responisve"
                src={cardSettingimg}
                alt="setting"
                width="25"
                height="25"
              />
            </div>
          ) : (
            ""
          )}
          {cardCloseimg ? (
            <div className="card-close">
              <img
                className="img-responisve"
                src={cardCloseimg}
                alt="close"
                width="25"
                height="25"
              />
            </div>
          ) : (
            ""
          )}
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
          <Button label="Cancel"></Button>
          <Button label="OK" className="btn-primary"></Button>
        </div>
      }
    </div>
  );
};

export default Card;
