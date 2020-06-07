'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Node = undefined;

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var _gatsbyNodeHelpers = require('gatsby-node-helpers');

var _gatsbyNodeHelpers2 = _interopRequireDefault(_gatsbyNodeHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _createNodeHelpers = (0, _gatsbyNodeHelpers2.default)({
  typePrefix: 'NBA'
}),
    createNodeFactory = _createNodeHelpers.createNodeFactory;

/**
 * Node factory with `type` option based on
 * original `createNodeFactory`.
 *
 * @param {string} type - Node type
 * @param {object} node - Node
 * @constructor
 */


var Node = exports.Node = function Node(type, n) {
  return createNodeFactory(type, function (node) {
    return (0, _extends3.default)({}, node, {
      id: node.personId
    });
  })(n);
};