'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _find = require('lodash/find');

var _find2 = babelHelpers.interopRequireDefault(_find);

var _sortBy = require('lodash/sortBy');

var _sortBy2 = babelHelpers.interopRequireDefault(_sortBy);

var Manager = function () {
	function Manager() {
		babelHelpers.classCallCheck(this, Manager);
		this.refs = {};
	}

	babelHelpers.createClass(Manager, [{
		key: 'add',
		value: function add(collection, ref) {
			if (!this.refs[collection]) this.refs[collection] = [];

			this.refs[collection].push(ref);
		}
	}, {
		key: 'remove',
		value: function remove(collection, ref) {
			var index = this.getIndex(collection, ref);

			if (index !== -1) {
				this.refs[collection].splice(index, 1);
			}
		}
	}, {
		key: 'getActive',
		value: function getActive() {
			var _this = this;

			return (0, _find2.default)(this.refs[this.active.collection], function (_ref) {
				var node = _ref.node;
				return node.sortableInfo.index == _this.active.index;
			});
		}
	}, {
		key: 'getIndex',
		value: function getIndex(collection, ref) {
			return this.refs[collection].indexOf(ref);
		}
	}, {
		key: 'getOrderedRefs',
		value: function getOrderedRefs() {
			var collection = arguments.length <= 0 || arguments[0] === undefined ? this.active.collection : arguments[0];

			return (0, _sortBy2.default)(this.refs[collection], function (_ref2) {
				var node = _ref2.node;
				return node.sortableInfo.index;
			});
		}
	}]);
	return Manager;
}();

exports.default = Manager;