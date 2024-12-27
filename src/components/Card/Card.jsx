import React from "react";
import Button from "../Button/Button";
import "./card.css";
import styled from "@emotion/styled";

const CardPiece = styled.div`
    background-color: ${({bgCustomColor}) => bgCustomColor};
    border-radius:${({cardRound})=>cardRound};
    padding:15px;
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
  textColor,
  cardRound,
  footerActions=[]

}) => {
  return (
    <CardPiece className="piece--card"  bgCustomColor={bgCustomColor} cardRound={cardRound} style={{color:(bgCustomColor)? textColor:''}}>
      <div className="piece--cardHead">
        <h2 className={`piece--cardHeading ${(cardHeading.length> 10)? 'piece--text__elipese':''}`} title={cardHeading}>{cardHeading}</h2>
        <div className="piece--card-headAction">
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
      <div className="piece--cardBody">
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
        <div className="piece--cardContent">
          {cardBodyTitle ? (
            <h5 className="piece--card-bodyTitle">{cardBodyTitle}</h5>
          ) : (
            ""
          )}
          {cardText ? <p className="piece--cardText">{cardText}</p> : ""}
        </div>
      </div>
      {(footerActions) && (
        <div className="piece--cardFooter">
          {footerActions.map((footerAction, index)=>(
            <Button key={index} label={footerAction.btnText} onClick={footerAction.onClick} color={footerAction.color}></Button>
          ))

          }
          {/* <Button color='outline-error-100' label="Cancel"></Button>
          <Button color='accent-60' label="OK" className="btn-primary"></Button> */}
        </div>
      )
      }
    </CardPiece>
  );
};

export default Card;
