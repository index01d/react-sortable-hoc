'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = SortableHandle;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _invariant = require('invariant');

var _invariant2 = babelHelpers.interopRequireDefault(_invariant);

// Export Higher Order Sortable Element Component
function SortableHandle(WrappedComponent) {
    var _class, _temp;

    var config = arguments.length <= 1 || arguments[1] === undefined ? { withRef: false } : arguments[1];

    return _temp = _class = function (_Component) {
        babelHelpers.inherits(_class, _Component);

        function _class() {
            babelHelpers.classCallCheck(this, _class);
            return babelHelpers.possibleConstructorReturn(this, Object.getPrototypeOf(_class).apply(this, arguments));
        }

        babelHelpers.createClass(_class, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var node = (0, _reactDom.findDOMNode)(this);
                node.sortableHandle = true;
            }
        }, {
            key: 'getWrappedInstance',
            value: function getWrappedInstance() {
                (0, _invariant2.default)(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call');
                return this.refs.wrappedInstance;
            }
        }, {
            key: 'render',
            value: function render() {
                var ref = config.withRef ? 'wrappedInstance' : null;
                return _react2.default.createElement(WrappedComponent, babelHelpers.extends({ ref: ref }, this.props));
            }
        }]);
        return _class;
    }(_react.Component), _class.displayName = WrappedComponent.displayName ? 'SortableHandle(' + WrappedComponent.displayName + ')' : 'SortableHandle', _class.WrappedComponent = WrappedComponent, _temp;
}