"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HatenaBookmark =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HatenaBookmark, _React$Component);

  function HatenaBookmark() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HatenaBookmark);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HatenaBookmark)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      initialized: false
    });

    return _this;
  }

  _createClass(HatenaBookmark, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.state.initialized) {
        return;
      }

      var s = document.createElement('script');
      s.src = '//b.st-hatena.com/js/bookmark_button.js';
      s.type = 'text/javascript';
      s.charset = 'utf-8';
      s.async = true;
      document.body.appendChild(s);
      this.setState({
        initialized: true
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          url = _this$props.url,
          title = _this$props.title,
          label = _this$props.label,
          counter = _this$props.counter,
          lang = _this$props.lang,
          design = _this$props.design,
          size = _this$props.size,
          width = _this$props.width,
          height = _this$props.height;
      var layout = '';

      switch (design) {
        case 'basic':
          layout = "basic".concat(label && '-label').concat(counter && '-counter');
          break;

        case 'touch':
          layout = "touch".concat(counter && '-counter');
          break;

        case 'vertical':
          layout = "vertical-".concat(size);
          break;

        default:
          layout = design;
          break;
      }

      return _react.default.createElement("a", {
        ref: function ref(r) {
          return _this2.hatenaButton = r;
        },
        href: "http://b.hatena.ne.jp/entry/".concat(url),
        className: "hatena-bookmark-button ".concat(this.className),
        "data-hatena-bookmark-title": title,
        "data-hatena-bookmark-layout": layout,
        "data-hatena-bookmark-lang": lang,
        "data-hatena-bookmark-width": width,
        "data-hatena-bookmark-height": height,
        title: title,
        target: "_top",
        style: this.style
      }, this.children);
    }
  }]);

  return HatenaBookmark;
}(_react.default.Component);

HatenaBookmark.propTypes = {
  url: _propTypes.default.string,
  title: _propTypes.default.string,
  design: _propTypes.default.oneOf(['basic', 'touch', 'vertical', 'simple']),
  size: _propTypes.default.oneOf(['normal', 'large']),
  label: _propTypes.default.bool,
  counter: _propTypes.default.bool,
  lang: _propTypes.default.oneOf(['ja', 'en']),
  width: _propTypes.default.number,
  height: _propTypes.default.number
};
HatenaBookmark.defaultProps = {
  url: window !== 'undefined' ? window.location : '',
  title: 'このエントリーをはてなブックマークに追加',
  design: 'basic',
  size: 'normal',
  label: true,
  counter: true,
  lang: 'ja',
  width: 20,
  height: 20
};
var _default = HatenaBookmark;
exports.default = _default;