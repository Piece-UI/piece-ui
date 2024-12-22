(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.MyLibrary = {}, global.React));
})(this, (function (exports, React) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

  const Button = _ref => {
    let {
      label,
      onClick,
      type = 'button'
    } = _ref;
    return /*#__PURE__*/React__default["default"].createElement("button", {
      type: type,
      onClick: onClick,
      className: "btn"
    }, label);
  };

  exports.Button = Button;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
