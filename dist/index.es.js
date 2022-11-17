import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { jsx, jsxs } from 'react/jsx-runtime';
import React, { forwardRef, memo, useState, useEffect, Component } from 'react';
import ReactDOM from 'react-dom';

const positions = ['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right'];
const defaultOptions = {
  position: 'bottom-left',
  message: 'Write your message',
  duration: 5,
  animation: 'smooth',
  verticalMargin: 0,
  horizontalMargin: 0,
  topic: 'Toast example',
  variant: 'info',
  id: 1
};
const numbers = /^[0-9.]+$/;
const animation = ['smooth', 'bouce'];

const getMargin = function () {
  var _position$, _position$2;
  let positionProp = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'bottom-left';
  let horizontalMargin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  let verticalMargin = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  const position = positionProp.split('-');
  const vertical = (_position$ = position[0]) !== null && _position$ !== void 0 && _position$.includes('top') ? {
    'margin-top': verticalMargin
  } : {
    'margin-bottom': verticalMargin
  };
  const horizontal = (_position$2 = position[1]) !== null && _position$2 !== void 0 && _position$2.includes('right') ? {
    'margin-right': horizontalMargin
  } : {
    'margin-left': horizontalMargin
  };
  return {
    horizontalMargin: horizontal,
    verticalMargin: vertical
  };
};

class ToastService {
  constructor() {
    if (ToastService.instance) {
      return ToastService.instance;
    }
    this.setToasts = null;
    this.toasts = [];
    ToastService.instance = this;
  }
  getOptions(options) {
    const defOptions = {
      ...defaultOptions
    };
    Object.keys(defOptions).forEach(key => {
      if (key in defOptions) {
        if (key === 'position' && positions.includes(options[key])) {
          defOptions[key] = options[key];
        } else if ((key === 'duration' || key === 'verticalMargin' || key === 'horizontalMargin') && numbers.test(options[key]) === true) {
          defOptions[key] = options[key];
          return;
        } else if (key === 'animation' && animation.includes(options[key])) {
          defOptions[key] = options[key];
        } else {
          var _options$key;
          if (((_options$key = options[key]) === null || _options$key === void 0 ? void 0 : _options$key.length) > 0) {
            defOptions[key] = options[key];
          }
        }
      }
    });
    return defOptions;
  }
  addToast(toast) {
    if (this.toasts.length < 3) {
      const options = {
        ...this.getOptions(toast)
      };
      const margin = getMargin(options.position, options === null || options === void 0 ? void 0 : options.horizontalMargin, options === null || options === void 0 ? void 0 : options.verticalMargin);
      const toastOptions = {
        ...options,
        ...margin
      };
      this.setToasts && this.setToasts([...this.toasts, toastOptions]);
      this.toasts.push(toastOptions);
    }
  }
  bindSetToasts(setToasts) {
    this.setToasts = setToasts;
  }
  success(message, options) {
    this.addToast({
      message: message,
      variant: 'success',
      id: uuid(),
      ...options
    });
  }
  error(message, options) {
    this.addToast({
      message: message,
      variant: 'error',
      id: uuid(),
      ...options
    });
  }
  warning(message, options) {
    this.addToast({
      message: message,
      variant: 'warning',
      id: uuid(),
      ...options
    });
  }
  info(message, options) {
    this.addToast({
      message: message,
      variant: 'info',
      id: uuid(),
      ...options
    });
  }
  removeToast(id) {
    this.toasts = this.toasts.filter(item => item.id !== id);
    this.setToasts && this.setToasts([...this.toasts]);
  }
  getLastToast() {
    var _this$toasts;
    return this.toasts[((_this$toasts = this.toasts) === null || _this$toasts === void 0 ? void 0 : _this$toasts.length) - 1];
  }
  getAllToasts() {
    return this.toasts;
  }
}
const toast = new ToastService();

var _excluded$4 = ["color", "size", "title"];

function _extends$4() { _extends$4 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$4.apply(this, arguments); }

function _objectWithoutProperties$4(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$4(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$4(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Bug = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      title = _ref.title,
      rest = _objectWithoutProperties$4(_ref, _excluded$4);

  return /*#__PURE__*/React.createElement("svg", _extends$4({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: size,
    height: size,
    fill: color
  }, rest), title ? /*#__PURE__*/React.createElement("title", null, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M4.355.522a.5.5 0 0 1 .623.333l.291.956A4.979 4.979 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A4.985 4.985 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623zM4 7v4a4 4 0 0 0 3.5 3.97V7H4zm4.5 0v7.97A4 4 0 0 0 12 11V7H8.5zM12 6a3.989 3.989 0 0 0-1.334-2.982A3.983 3.983 0 0 0 8 2a3.983 3.983 0 0 0-2.667 1.018A3.989 3.989 0 0 0 4 6h8z"
  }));
});
Bug.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string
};
Bug.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null
};
var Bug$1 = Bug;

var _excluded$3 = ["color", "size", "title"];

function _extends$3() { _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$3.apply(this, arguments); }

function _objectWithoutProperties$3(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$3(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$3(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Check2Circle = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      title = _ref.title,
      rest = _objectWithoutProperties$3(_ref, _excluded$3);

  return /*#__PURE__*/React.createElement("svg", _extends$3({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: size,
    height: size,
    fill: color
  }, rest), title ? /*#__PURE__*/React.createElement("title", null, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"
  }));
});
Check2Circle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string
};
Check2Circle.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null
};
var Check2Circle$1 = Check2Circle;

var _excluded$2 = ["color", "size", "title"];

function _extends$2() { _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$2.apply(this, arguments); }

function _objectWithoutProperties$2(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$2(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$2(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var ExclamationCircle = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      title = _ref.title,
      rest = _objectWithoutProperties$2(_ref, _excluded$2);

  return /*#__PURE__*/React.createElement("svg", _extends$2({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: size,
    height: size,
    fill: color
  }, rest), title ? /*#__PURE__*/React.createElement("title", null, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"
  }));
});
ExclamationCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string
};
ExclamationCircle.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null
};
var ExclamationCircle$1 = ExclamationCircle;

var _excluded$1 = ["color", "size", "title"];

function _extends$1() { _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends$1.apply(this, arguments); }

function _objectWithoutProperties$1(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose$1(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose$1(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var InfoCircle = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      title = _ref.title,
      rest = _objectWithoutProperties$1(_ref, _excluded$1);

  return /*#__PURE__*/React.createElement("svg", _extends$1({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: size,
    height: size,
    fill: color
  }, rest), title ? /*#__PURE__*/React.createElement("title", null, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"
  }));
});
InfoCircle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string
};
InfoCircle.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null
};
var InfoCircle$1 = InfoCircle;

var _excluded = ["color", "size", "title"];

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var XLg = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var color = _ref.color,
      size = _ref.size,
      title = _ref.title,
      rest = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement("svg", _extends({
    ref: ref,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 16 16",
    width: size,
    height: size,
    fill: color
  }, rest), title ? /*#__PURE__*/React.createElement("title", null, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
  }));
});
XLg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  title: PropTypes.string
};
XLg.defaultProps = {
  color: 'currentColor',
  size: '1em',
  title: null
};
var XLg$1 = XLg;

const theme = {
  space: {
    marginRight: [10, 15, 20, 25, 30, 35, 40],
    marginTop: [15],
    marginLeft: [],
    padding: [10]
  },
  sizes: {
    height: [60],
    width: [130, 300],
    minHeight: [50]
  },
  shadows: {
    boxShadow: ['3px 3px 3px rgba(0, 0, 0, 0.2)']
  },
  fontSizes: {
    fontSize: [8, 14, 20, 26, 32]
  },
  borders: {
    borderRadius: [10]
  },
  colors: {
    color: ['#000000', '#FFFFFF']
  },
  notifications: {
    success: {
      backgroundColor: '#06D6A0',
      color: '#FFFFFF',
      icon: /*#__PURE__*/jsx(Check2Circle$1, {
        size: 30
      })
    },
    error: {
      backgroundColor: '#E63946',
      color: '#FFFFFF',
      icon: /*#__PURE__*/jsx(Bug$1, {
        size: 30
      })
    },
    warning: {
      backgroundColor: '#FFBD00',
      color: '#000000',
      icon: /*#__PURE__*/jsx(ExclamationCircle$1, {
        size: 30
      })
    },
    info: {
      backgroundColor: '#7209B7',
      color: '#FFFFFF',
      icon: /*#__PURE__*/jsx(InfoCircle$1, {
        size: 30
      })
    },
    closeIcon: /*#__PURE__*/jsx(XLg$1, {
      size: 20
    })
  }
};

const StyledButton = styled.button.withConfig({
  displayName: "styled__StyledButton",
  componentId: "sc-1dp3dlr-0"
})(["width:", "px;height:", "px;border:none;border-radius:", "px;transition:all 0.5s;&:active{transform:scale(0.87);}background-color:", ";color:", ";"], theme.sizes.width[0], theme.sizes.height[0], theme.borders.borderRadius[0], theme.colors.color[0], theme.colors.color[1]);

function Button(_ref) {
  let {
    position,
    duration,
    animation,
    variant,
    message,
    backgroundColor,
    topic,
    horizontalMargin,
    verticalMargin
  } = _ref;
  const options = {
    position,
    duration,
    animation,
    variant,
    message,
    backgroundColor,
    topic,
    horizontalMargin,
    verticalMargin
  };
  const handleClick = () => {
    switch (variant) {
      case 'success':
        toast.success(message, {
          ...options
        });
        break;
      case 'error':
        toast.error(message, {
          ...options
        });
        break;
      case 'warning':
        toast.warning(message, {
          ...options
        });
        break;
      case 'info':
        toast.info(message, {
          ...options
        });
        break;
      default:
        toast.info('No such option', {
          ...options
        });
        break;
    }
  };
  return /*#__PURE__*/jsx(StyledButton, {
    "data-test": "toast-gen",
    onClick: handleClick,
    children: "Generate toast"
  });
}
Button.propTypes = {
  position: PropTypes.oneOf(['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right']),
  duration: PropTypes.string,
  animation: PropTypes.oneOf(['smooth', 'bounce']),
  backgroundColor: PropTypes.string,
  variant: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  message: PropTypes.string,
  topic: PropTypes.string,
  horizontalMargin: PropTypes.string,
  verticalMargin: PropTypes.string
};
Button.defaultProps = {
  topic: 'Toast topic',
  message: 'Toast example',
  position: 'bottom-left',
  animation: 'smooth',
  duration: '3'
};

function setAnimation(position, animation) {
  switch (position) {
    case 'bottom-left':
      if (animation === 'bounce') {
        return 'left-right-bounce';
      } else {
        return 'left-right-smooth';
      }
    case 'bottom-center':
      if (animation === 'bounce') {
        return 'down-up-bounce';
      } else {
        return 'down-up-smooth';
      }
    case 'bottom-right':
      if (animation === 'bounce') {
        return 'right-left-bounce';
      } else {
        return 'right-left-smooth';
      }
    case 'top-left':
      if (animation === 'bounce') {
        return 'left-right-bounce';
      } else {
        return 'left-right-smooth';
      }
    case 'top-center':
      if (animation === 'bounce') {
        return 'up-down-bounce';
      } else {
        return 'up-down-smooth';
      }
    case 'top-right':
      if (animation === 'bounce') {
        return 'right-left-bounce';
      } else {
        return 'right-left-smooth';
      }
  }
}

const leftRight$1 = keyframes(["from{transform:translateX(-110vw);}to{transform:translateX(0);}"]);
const rightLeft$1 = keyframes(["0%{transform:translateX(100vw);}100%{transform:translateX(0);}"]);
const upDown$1 = keyframes(["from{transform:translateY(-100vh);}to{transform:translateY(0);}"]);
const downUp$1 = keyframes(["from{transform:translateY(100vh);}to{transform:translateY(0);}"]);
const leftRightHide$1 = keyframes(["from{transform:translateX(0);}to{transform:translateX(-110vw);}"]);
const rightLeftHide$1 = keyframes(["from{transform:translateX(0);}to{transform:translateX(110vw);}"]);
const upDownHide$1 = keyframes(["from{transform:translateY(0);}to{transform:translateY(-100vh);}"]);
const downUpHide$1 = keyframes(["from{transform:translateY(0);}to{transform:translateY(120vh);}"]);

var smooth = /*#__PURE__*/Object.freeze({
  __proto__: null,
  leftRight: leftRight$1,
  rightLeft: rightLeft$1,
  upDown: upDown$1,
  downUp: downUp$1,
  leftRightHide: leftRightHide$1,
  rightLeftHide: rightLeftHide$1,
  upDownHide: upDownHide$1,
  downUpHide: downUpHide$1
});

const leftRight = keyframes(["0%{transform:translateX(-100vw);}20%{transform:translateX(10%)}50%{transform:translateX(-10%)}100%{transform:translateX(0%)}"]);
const rightLeft = keyframes(["0%{transform:translateX(110vw);}20%{transform:translateX(-10%);}50%{transform:translateX(10%);}100%{transform:translateX(0);}"]);
const upDown = keyframes(["0%{transform:translateY(-100vh);}20%{transform:translateY(10%);}50%{transform:translateY(-10%);}100%{transform:translateY(0);}"]);
const downUp = keyframes(["0%{transform:translateY(100vh);}20%{transform:translateY(-10%);}50%{transform:translateY(10%);}100%{transform:translateY(0);}"]);
const leftRightHide = keyframes(["0%{transform:translateX(0);}60%{transform:translateX(20%);}100%{transform:translateX(-100vw);}"]);
const rightLeftHide = keyframes(["0%{transform:translateX(0);}60%{transform:translateX(-20%);}100%{transform:translateX(110vw);}"]);
const upDownHide = keyframes(["0%{transform:translateY(0);}60%{transform:translateY(20%);}100%{transform:translateY(-110vh);}"]);
const downUpHide = keyframes(["0%{transform:translateY(0);}60%{transform:translateY(-20%);}100%{transform:translateY(110vh);}"]);

var bounce = /*#__PURE__*/Object.freeze({
  __proto__: null,
  leftRight: leftRight,
  rightLeft: rightLeft,
  upDown: upDown,
  downUp: downUp,
  leftRightHide: leftRightHide,
  rightLeftHide: rightLeftHide,
  upDownHide: upDownHide,
  downUpHide: downUpHide
});

const StyledToast = styled.div.withConfig({
  displayName: "styled__StyledToast",
  componentId: "sc-fnopbw-0"
})(["@import url('https://fonts.googleapis.com/css2?family=Anek+Latin:wght@200&display=swap');font-family:'Anek Latin',sans-serif;position:relative;font-weight:700;pointer-events:all;display:flex;justify-content:space-between;pointer-events:all;align-items:center;background-color:", ";border-radius:", "px;width:", "px;min-height:", "px;box-shadow:", ";padding:", "px;justify-content:space-between;color:", ";margin-top:", "px;", ";&[data-animation='left-right-smooth']{animation:0.7s ", ";}&[data-animation='right-left-smooth']{animation:0.7s ", ";}&[data-animation='up-down-smooth']{animation:0.7s ", ";}&[data-animation='down-up-smooth']{animation:0.7s ", ";}&[data-animation='left-right-bounce']{animation:0.7s ", ";}&[data-animation='right-left-bounce']{animation:0.7s ", ";}&[data-animation='up-down-bounce']{animation:0.7s ", ";}&[data-animation='down-up-bounce']{animation:0.7s ", ";}&.close{&[data-animation='left-right-smooth']{animation:0.7s ", ";}&[data-animation='right-left-smooth']{animation:0.7s ", ";}&[data-animation='up-down-smooth']{animation:0.7s ", ";}&[data-animation='down-up-smooth']{animation:0.7s ", ";}&[data-animation='left-right-bounce']{animation:0.7s ", ";}&[data-animation='right-left-bounce']{animation:0.7s ", ";}&[data-animation='up-down-bounce']{animation:0.7s ", ";}&[data-animation='down-up-bounce']{animation:0.7s ", ";}}& > :first-child{margin-right:", "px;}&::before{content:attr(data-topic);position:absolute;top:4px;}"], _ref => {
  let {
    backgroundColor
  } = _ref;
  return backgroundColor;
}, _ref2 => {
  let {
    space
  } = _ref2;
  return space.borders.borderRadius[0];
}, _ref3 => {
  let {
    space
  } = _ref3;
  return space.sizes.width[1];
}, _ref4 => {
  let {
    space
  } = _ref4;
  return space.sizes.minHeight[0];
}, _ref5 => {
  let {
    space
  } = _ref5;
  return space.shadows.boxShadow[0];
}, _ref6 => {
  let {
    space
  } = _ref6;
  return space.space.padding[0];
}, _ref7 => {
  let {
    theme
  } = _ref7;
  return theme.color;
}, _ref8 => {
  var _space$space;
  let {
    space
  } = _ref8;
  return (_space$space = space.space) === null || _space$space === void 0 ? void 0 : _space$space.marginTop[0];
}, _ref9 => {
  let {
    horizontalMargin
  } = _ref9;
  return horizontalMargin;
}, leftRight$1, rightLeft$1, upDown$1, downUp$1, leftRight, rightLeft, upDown, downUp, leftRightHide$1, rightLeftHide$1, upDownHide$1, downUpHide$1, leftRightHide, rightLeftHide, upDownHide, downUpHide, _ref10 => {
  var _space$space2;
  let {
    space
  } = _ref10;
  return (_space$space2 = space.space) === null || _space$space2 === void 0 ? void 0 : _space$space2.marginRight[5];
});
const StyledToastContent = styled.div.withConfig({
  displayName: "styled__StyledToastContent",
  componentId: "sc-fnopbw-1"
})(["display:flex;align-items:center;margin-top:", "px;font-size:", "px;& > *{margin-right:", "px;}"], _ref11 => {
  let {
    space
  } = _ref11;
  return space.space.marginTop[0];
}, _ref12 => {
  let {
    space
  } = _ref12;
  return space.fontSizes.fontSize[2];
}, _ref13 => {
  var _space$space3;
  let {
    space
  } = _ref13;
  return (_space$space3 = space.space) === null || _space$space3 === void 0 ? void 0 : _space$space3.marginRight[0];
});
const StyledCross = styled.div.withConfig({
  displayName: "styled__StyledCross",
  componentId: "sc-fnopbw-2"
})(["align-self:flex-start;cursor:pointer;"]);

function Toast(_ref) {
  var _theme$notifications;
  let {
    message,
    variant,
    id,
    position,
    duration,
    animation,
    backgroundColor = "",
    topic,
    horizontalMargin
  } = _ref;
  const [closed, setClosed] = useState(false);
  const notificationVariant = theme.notifications[variant];
  const animationType = setAnimation(position, animation);
  const animationClass = animationType !== null && animationType !== void 0 && animationType.includes('smooth') ? 'smooth' : 'bounce';
  const defaultBackGroundColor = !backgroundColor ? theme.notifications[variant].backgroundColor : backgroundColor;
  const handleClose = () => {
    setClosed(true);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setClosed(true);
    }, duration * 1000);
    return () => clearInterval(timer);
  }, []);
  useEffect(() => {
    if (closed) {
      setTimeout(() => {
        toast.removeToast(id);
      }, 650);
    }
  }, [closed, id]);
  return /*#__PURE__*/jsx(ThemeProvider, {
    theme: notificationVariant,
    children: /*#__PURE__*/jsxs(StyledToast, {
      className: closed && 'close',
      "data-animationclass": animationClass,
      "data-test": "toast",
      "data-animation": animationType,
      "data-topic": topic,
      onAnimationEnd: () => closed && toast.removeToast(id),
      backgroundColor: defaultBackGroundColor,
      horizontalMargin: horizontalMargin,
      space: theme,
      children: [/*#__PURE__*/jsxs(StyledToastContent, {
        space: theme,
        children: [notificationVariant.icon, message]
      }), /*#__PURE__*/jsx(StyledCross, {
        "data-test": "close",
        onClick: handleClose,
        children: (_theme$notifications = theme.notifications) === null || _theme$notifications === void 0 ? void 0 : _theme$notifications.closeIcon
      })]
    })
  });
}
Toast.propTypes = {
  message: PropTypes.string,
  variant: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  id: PropTypes.string,
  position: PropTypes.oneOf(['top-left', 'top-center', 'top-right', 'bottom-left', 'bottom-center', 'bottom-right']),
  horizontalMargin: PropTypes.object,
  verticalMargin: PropTypes.object,
  duration: PropTypes.string,
  animation: PropTypes.oneOf(['smooth', 'bounce']),
  backgroundColor: PropTypes.string
};
Toast.defaultProps = {
  message: 'Toast example',
  topic: 'Toast topic',
  horizontalMargin: 0,
  verticalMargin: 0
};
var Toast$1 = /*#__PURE__*/memo(Toast);

const StyledSloatsContainer = styled.div.withConfig({
  displayName: "styled__StyledSloatsContainer",
  componentId: "sc-179ercl-0"
})(["position:fixed;display:flex;flex-direction:column;align-items:flex-end;", ";&.top-center{top:0;left:50%;transform:translateX(-50%);}&.top-left{top:0;left:0;}&.top-right{top:0;right:0;}&.bottom-left{bottom:0;left:0;}&.bottom-right{bottom:0;right:0;}&.bottom-center{bottom:0px;left:50%;transform:translateX(-50%);}"], _ref => {
  let {
    margin
  } = _ref;
  return margin;
});

function ToastSlots(_ref) {
  let {
    slotsList
  } = _ref;
  const containerPosition = slotsList[0].position;
  return /*#__PURE__*/jsx(StyledSloatsContainer, {
    "data-test": "slot",
    className: containerPosition,
    margin: slotsList[slotsList.length - 1].verticalMargin,
    children: slotsList === null || slotsList === void 0 ? void 0 : slotsList.map(item => {
      return /*#__PURE__*/jsx(Toast$1, {
        ...item
      }, item.id);
    })
  });
}

class ErrorBoundary extends Component {
  constructor() {
    super();
    this.state = {
      hasError: false,
      error: null
    };
  }
  static getDerivedStateFromError() {
    return {
      hasError: true
    };
  }
  componentDidCatch(error, info) {
    this.setState({
      error: error.toString()
    });
    console.log(info.componentStack);
  }
  render() {
    if (this.state.hasError) {
      return /*#__PURE__*/jsx("h1", {
        children: this.state.error
      });
    }
    return this.props.children;
  }
}
ErrorBoundary.propTypes = {
  children: PropTypes.node
};

const StyledToaster = styled.div.withConfig({
  displayName: "styled__StyledToaster",
  componentId: "sc-1fdv5f-0"
})(["display:flex;flex-direction:column;justify-content:flex-start;position:fixed;pointer-events:none;"]);

function usePortal() {
  const [element] = useState(document.createElement("div"));
  const [root] = useState(document.createElement("div"));
  useEffect(() => {
    document.body.append(root);
    root.id = "portal-toasts";
    root.appendChild(element);
    return () => root.removeChild(element);
  }, []);
  return element;
}

function Toaster() {
  const [toasts, setToasts] = useState([]);
  const element = usePortal();
  useEffect(() => {
    toast.bindSetToasts(setToasts);
  }, []);
  const slots = positions.map(position => {
    return [...toasts].filter(toast => {
      if (toast.position === position) {
        return true;
      }
    });
  });
  return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/jsx(ErrorBoundary, {
    children: /*#__PURE__*/jsx(StyledToaster, {
      children: slots.map(slotsList => {
        if ((slotsList === null || slotsList === void 0 ? void 0 : slotsList.length) > 0) {
          return /*#__PURE__*/jsx(ToastSlots, {
            slotsList: slotsList
          }, slotsList[0].position);
        }
      })
    })
  }), element);
}
var index = /*#__PURE__*/memo(Toaster);

export { Button, ErrorBoundary, Toast$1 as Toast, ToastSlots, index as Toaster, animation, bounce, defaultOptions, numbers, positions, smooth, theme, toast };
