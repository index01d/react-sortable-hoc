'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = SortableElement;

var _react = require('react');

var _react2 = babelHelpers.interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _invariant = require('invariant');

var _invariant2 = babelHelpers.interopRequireDefault(_invariant);

// Export Higher Order Sortable Element Component
function SortableElement(WrappedComponent) {
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
                var _props = this.props;
                var collection = _props.collection;
                var disabled = _props.disabled;
                var index = _props.index;


                if (!disabled) {
                    this.setDraggable(collection, index);
                }
            }
        }, {
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
                var index = this.props.index;

                if (index !== nextProps.index && this.node) {
                    this.node.sortableInfo.index = nextProps.index;
                }
                if (this.props.disabled !== nextProps.disabled) {
                    var collection = nextProps.collection;
                    var disabled = nextProps.disabled;
                    var _index = nextProps.index;

                    if (disabled) {
                        this.removeDraggable(collection);
                    } else {
                        this.setDraggable(collection, _index);
                    }
                }
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                var _props2 = this.props;
                var collection = _props2.collection;
                var disabled = _props2.disabled;


                if (!disabled) this.removeDraggable(collection);
            }
        }, {
            key: 'setDraggable',
            value: function setDraggable(collection, index) {
                var node = this.node = (0, _reactDom.findDOMNode)(this);

                node.sortableInfo = { index: index, collection: collection };

                this.ref = { node: node };
                this.context.manager.add(collection, this.ref);
            }
        }, {
            key: 'removeDraggable',
            value: function removeDraggable(collection) {
                this.context.manager.remove(collection, this.ref);
            }
        }, {
            key: 'getWrappedInstance',
            value: function getWrappedInstance() {
                (0, _invariant2.default)(config.withRef, 'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call');
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
    }(_react.Component), _class.displayName = WrappedComponent.displayName ? 'SortableElement(' + WrappedComponent.displayName + ')' : 'SortableElement', _class.WrappedComponent = WrappedComponent, _class.contextTypes = {
        manager: _react.PropTypes.object.isRequired
    }, _class.propTypes = {
        index: _react.PropTypes.number.isRequired,
        collection: _react.PropTypes.oneOfType([_react.PropTypes.number, _react.PropTypes.string]),
        disabled: _react.PropTypes.bool
    }, _class.defaultProps = {
        collection: 0
    }, _temp;
}