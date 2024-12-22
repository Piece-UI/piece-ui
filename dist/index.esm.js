import React from 'react';

const Button = _ref => {
  let {
    label,
    onClick,
    type = 'button'
  } = _ref;
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    onClick: onClick,
    className: "btn"
  }, label);
};

export { Button };
