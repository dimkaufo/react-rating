import React from 'react';

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      _defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }
  return target;
}
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
function _defineProperty(obj, key, value) {
  key = _toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}
function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return _assertThisInitialized(self);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");
  return typeof key === "symbol" ? key : String(key);
}

var style = {
  display: 'inline-block',
  borderRadius: '50%',
  border: '5px double white',
  width: 30,
  height: 30
};
var Style = {
  empty: _objectSpread2(_objectSpread2({}, style), {}, {
    backgroundColor: '#ccc'
  }),
  full: _objectSpread2(_objectSpread2({}, style), {}, {
    backgroundColor: 'black'
  }),
  placeholder: _objectSpread2(_objectSpread2({}, style), {}, {
    backgroundColor: 'red'
  })
};

// Return the corresponding React node for an icon.
var _iconNode = function _iconNode(icon) {
  // If it is already a React Element just return it.
  if ( /*#__PURE__*/React.isValidElement(icon)) {
    return icon;
  }
  // If it is an object, try to use it as a CSS style object.
  if (_typeof(icon) === 'object' && icon !== null) {
    return /*#__PURE__*/React.createElement("span", {
      style: icon
    });
  }
  // If it is a string, use it as class names.
  if (Object.prototype.toString.call(icon) === '[object String]') {
    return /*#__PURE__*/React.createElement("span", {
      className: icon
    });
  }
};
var RatingSymbol = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(RatingSymbol, _React$PureComponent);
  var _super = _createSuper(RatingSymbol);
  function RatingSymbol() {
    _classCallCheck(this, RatingSymbol);
    return _super.apply(this, arguments);
  }
  _createClass(RatingSymbol, [{
    key: "render",
    value: function render() {
      var _iconContainerStyle;
      var _this$props = this.props,
        index = _this$props.index,
        inactiveIcon = _this$props.inactiveIcon,
        activeIcon = _this$props.activeIcon,
        percent = _this$props.percent,
        direction = _this$props.direction,
        readonly = _this$props.readonly,
        onClick = _this$props.onClick,
        onMouseMove = _this$props.onMouseMove,
        onTouchEnd = _this$props.onTouchEnd;
      var backgroundNode = _iconNode(inactiveIcon);
      var showbgIcon = percent < 100;
      var bgIconContainerStyle = showbgIcon ? {} : {
        visibility: 'hidden'
      };
      var iconNode = _iconNode(activeIcon);
      var iconContainerStyle = (_iconContainerStyle = {
        display: 'inline-block',
        position: 'absolute',
        overflow: 'hidden',
        top: 0
      }, _defineProperty(_iconContainerStyle, direction === 'rtl' ? 'right' : 'left', 0), _defineProperty(_iconContainerStyle, "width", "".concat(percent, "%")), _iconContainerStyle);
      var style = {
        cursor: !readonly ? 'pointer' : 'inherit',
        display: 'inline-block',
        position: 'relative'
      };
      function handleMouseMove(e) {
        if (onMouseMove) {
          onMouseMove(index, e);
        }
      }
      function handleMouseClick(e) {
        if (onClick) {
          // [Supporting both TouchEvent and MouseEvent](https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent)
          // We must prevent firing click event twice on touch devices.
          e.preventDefault();
          onClick(index, e);
        }
      }
      function handleTouchEnd(e) {
        if (onTouchEnd) {
          onTouchEnd(index, e);
        }
      }
      return /*#__PURE__*/React.createElement("span", {
        style: style,
        onClick: handleMouseClick,
        onMouseMove: handleMouseMove,
        onTouchMove: handleMouseMove,
        onTouchEnd: handleTouchEnd
      }, /*#__PURE__*/React.createElement("span", {
        style: bgIconContainerStyle
      }, backgroundNode), /*#__PURE__*/React.createElement("span", {
        style: iconContainerStyle
      }, iconNode));
    }
  }]);
  return RatingSymbol;
}(React.PureComponent); // Define propTypes only in development. They will be void in production.

var Rating = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(Rating, _React$PureComponent);
  var _super = _createSuper(Rating);
  function Rating(props) {
    var _this;
    _classCallCheck(this, Rating);
    _this = _super.call(this, props);
    _this.state = {
      // Indicates the value that is displayed to the user in the form of symbols.
      // It can be either 0 (for no displayed symbols) or (0, end]
      displayValue: _this.props.value,
      // Indicates if the user is currently hovering over the rating element
      interacting: false
    };
    _this.onMouseLeave = _this.onMouseLeave.bind(_assertThisInitialized(_this));
    _this.symbolMouseMove = _this.symbolMouseMove.bind(_assertThisInitialized(_this));
    _this.symbolClick = _this.symbolClick.bind(_assertThisInitialized(_this));
    _this.symbolEnd = _this.symbolEnd.bind(_assertThisInitialized(_this));
    return _this;
  }

  // NOTE: This callback is a little bit fragile. Needs some "care" because
  // it relies on brittle state kept with different props and state
  // combinations to try to figure out from where we are coming, I mean, what
  // caused this update.
  _createClass(Rating, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.value !== prevProps.value) {
        this.setState({
          displayValue: this.props.value !== prevProps.value ? this.props.value : prevState.displayValue
        });
      }

      // When hover ends, call this.props.onHover with no value.
      if (prevState.interacting && !this.state.interacting) {
        return this.props.onHover();
      }

      // When hover over.
      // Hover in should only be emitted while we are hovering (interacting),
      // unless we changed the value, usually originated by an onClick event.
      // We do not want to emit a hover in event again on the clicked
      // symbol.
      if (this.state.interacting && prevProps.value == this.props.value) {
        this.props.onHover(this.state.displayValue);
      }
    }
  }, {
    key: "symbolEnd",
    value: function symbolEnd(symbolIndex, event) {
      // Do not raise the click event on quiet mode when a touch end is received.
      // On quiet mode the touch end event only notifies that we have left the
      // symbol. We wait for the actual click event to call the symbolClick.
      // On not quiet mode we simulate the click event on touch end and we just
      // prevent the real on click event to be raised.
      // NOTE: I know how we manage click events on touch devices is a little bit
      // weird because we do not notify the starting value that was clicked but
      // the last (touched) value.
      if (!this.props.quiet) {
        this.symbolClick(symbolIndex, event);
        event.preventDefault();
      }
      // On touch end we are "leaving" the symbol.
      this.onMouseLeave();
    }
  }, {
    key: "symbolClick",
    value: function symbolClick(symbolIndex, event) {
      var value = this.calculateDisplayValue(symbolIndex, event);
      this.props.onClick(value, event);
    }
  }, {
    key: "symbolMouseMove",
    value: function symbolMouseMove(symbolIndex, event) {
      var value = this.calculateDisplayValue(symbolIndex, event);
      // This call should cause an update only if the state changes.
      // Mainly the first time the mouse enters and whenever the value changes.
      // So DidComponentUpdate is NOT called for every mouse movement.
      this.setState({
        interacting: !this.props.readonly,
        displayValue: value
      });
    }
  }, {
    key: "onMouseLeave",
    value: function onMouseLeave() {
      this.setState({
        displayValue: this.props.value,
        interacting: false
      });
    }
  }, {
    key: "calculateDisplayValue",
    value: function calculateDisplayValue(symbolIndex, event) {
      var percentage = this.calculateHoverPercentage(event);
      // Get the closest top fraction.
      var fraction = Math.ceil(percentage % 1 * this.props.fractions) / this.props.fractions;
      // Truncate decimal trying to avoid float precission issues.
      var precision = Math.pow(10, 3);
      var displayValue = symbolIndex + (Math.floor(percentage) + Math.floor(fraction * precision) / precision);
      // ensure the returned value is greater than 0 and lower than totalSymbols
      return displayValue > 0 ? displayValue > this.props.totalSymbols ? this.props.totalSymbols : displayValue : 1 / this.props.fractions;
    }
  }, {
    key: "calculateHoverPercentage",
    value: function calculateHoverPercentage(event) {
      var clientX = event.nativeEvent.type.indexOf("touch") > -1 ? event.nativeEvent.type.indexOf("touchend") > -1 ? event.changedTouches[0].clientX : event.touches[0].clientX : event.clientX;
      var targetRect = event.target.getBoundingClientRect();
      var delta = this.props.direction === 'rtl' ? targetRect.right - clientX : clientX - targetRect.left;

      // Returning 0 if the delta is negative solves the flickering issue
      return delta < 0 ? 0 : delta / targetRect.width;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        readonly = _this$props.readonly,
        quiet = _this$props.quiet,
        totalSymbols = _this$props.totalSymbols,
        value = _this$props.value,
        placeholderValue = _this$props.placeholderValue,
        direction = _this$props.direction,
        emptySymbol = _this$props.emptySymbol,
        fullSymbol = _this$props.fullSymbol,
        placeholderSymbol = _this$props.placeholderSymbol,
        className = _this$props.className,
        id = _this$props.id,
        style = _this$props.style,
        tabIndex = _this$props.tabIndex;
      var _this$state = this.state,
        displayValue = _this$state.displayValue,
        interacting = _this$state.interacting;
      var symbolNodes = [];
      var empty = [].concat(emptySymbol);
      var full = [].concat(fullSymbol);
      var placeholder = [].concat(placeholderSymbol);
      var shouldDisplayPlaceholder = placeholderValue !== 0 && value === 0 && !interacting;

      // The value that will be used as base for calculating how to render the symbols
      var renderedValue;
      if (shouldDisplayPlaceholder) {
        renderedValue = placeholderValue;
      } else {
        renderedValue = quiet ? value : displayValue;
      }

      // The amount of full symbols
      var fullSymbols = Math.floor(renderedValue);
      for (var i = 0; i < totalSymbols; i++) {
        var percent = void 0;
        // Calculate each symbol's fullness percentage
        if (i - fullSymbols < 0) {
          percent = 100;
        } else if (i - fullSymbols === 0) {
          percent = (renderedValue - i) * 100;
        } else {
          percent = 0;
        }
        symbolNodes.push( /*#__PURE__*/React.createElement(RatingSymbol, _extends({
          key: i,
          index: i,
          readonly: readonly,
          inactiveIcon: empty[i % empty.length],
          activeIcon: shouldDisplayPlaceholder ? placeholder[i % full.length] : full[i % full.length],
          percent: percent,
          direction: direction
        }, !readonly && {
          onClick: this.symbolClick,
          onMouseMove: this.symbolMouseMove,
          onTouchMove: this.symbolMouseMove,
          onTouchEnd: this.symbolEnd
        })));
      }
      return /*#__PURE__*/React.createElement("span", _extends({
        id: id,
        style: _objectSpread2(_objectSpread2({}, style), {}, {
          display: 'inline-block',
          direction: direction
        }),
        className: className,
        tabIndex: tabIndex,
        "aria-label": this.props['aria-label']
      }, !readonly && {
        onMouseLeave: this.onMouseLeave
      }), symbolNodes);
    }
  }]);
  return Rating;
}(React.PureComponent); // Define propTypes only in development.

function noop() {}
noop._name = 'react_rating_noop';

var RatingAPILayer = /*#__PURE__*/function (_React$PureComponent) {
  _inherits(RatingAPILayer, _React$PureComponent);
  var _super = _createSuper(RatingAPILayer);
  function RatingAPILayer(props) {
    var _this;
    _classCallCheck(this, RatingAPILayer);
    _this = _super.call(this, props);
    _this.state = {
      value: props.initialRating
    };
    _this.handleClick = _this.handleClick.bind(_assertThisInitialized(_this));
    _this.handleHover = _this.handleHover.bind(_assertThisInitialized(_this));
    return _this;
  }
  _createClass(RatingAPILayer, [{
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      this.setState({
        value: nextProps.initialRating
      });
    }
  }, {
    key: "handleClick",
    value: function handleClick(value, e) {
      var _this2 = this;
      var newValue = this.translateDisplayValueToValue(value);
      this.props.onClick(newValue);
      // Avoid calling setState if not necessary. Micro optimisation.
      if (this.state.value !== newValue) {
        // If we have a new value trigger onChange callback.
        this.setState({
          value: newValue
        }, function () {
          return _this2.props.onChange(_this2.state.value);
        });
      }
    }
  }, {
    key: "handleHover",
    value: function handleHover(displayValue) {
      var value = displayValue === undefined ? displayValue : this.translateDisplayValueToValue(displayValue);
      this.props.onHover(value);
    }
  }, {
    key: "translateDisplayValueToValue",
    value: function translateDisplayValueToValue(displayValue) {
      var translatedValue = displayValue * this.props.step + this.props.start;
      // minimum value cannot be equal to start, since it's exclusive
      return translatedValue === this.props.start ? translatedValue + 1 / this.props.fractions : translatedValue;
    }
  }, {
    key: "tranlateValueToDisplayValue",
    value: function tranlateValueToDisplayValue(value) {
      if (value === undefined) {
        return 0;
      }
      return (value - this.props.start) / this.props.step;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
        step = _this$props.step,
        emptySymbol = _this$props.emptySymbol,
        fullSymbol = _this$props.fullSymbol,
        placeholderSymbol = _this$props.placeholderSymbol,
        readonly = _this$props.readonly,
        quiet = _this$props.quiet,
        fractions = _this$props.fractions,
        direction = _this$props.direction,
        start = _this$props.start,
        stop = _this$props.stop,
        id = _this$props.id,
        className = _this$props.className,
        style = _this$props.style,
        tabIndex = _this$props.tabIndex;
      function calculateTotalSymbols(start, stop, step) {
        return Math.floor((stop - start) / step);
      }
      return /*#__PURE__*/React.createElement(Rating, {
        id: id,
        style: style,
        className: className,
        tabIndex: tabIndex,
        "aria-label": this.props['aria-label'],
        totalSymbols: calculateTotalSymbols(start, stop, step),
        value: this.tranlateValueToDisplayValue(this.state.value),
        placeholderValue: this.tranlateValueToDisplayValue(this.props.placeholderRating),
        readonly: readonly,
        quiet: quiet,
        fractions: fractions,
        direction: direction,
        emptySymbol: emptySymbol,
        fullSymbol: fullSymbol,
        placeholderSymbol: placeholderSymbol,
        onClick: this.handleClick,
        onHover: this.handleHover
      });
    }
  }]);
  return RatingAPILayer;
}(React.PureComponent);
RatingAPILayer.defaultProps = {
  start: 0,
  stop: 5,
  step: 1,
  readonly: false,
  quiet: false,
  fractions: 1,
  direction: 'ltr',
  onHover: noop,
  onClick: noop,
  onChange: noop,
  emptySymbol: Style.empty,
  fullSymbol: Style.full,
  placeholderSymbol: Style.placeholder
};

export default RatingAPILayer;
