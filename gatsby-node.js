'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sourceNodes = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

var sourceNodes = exports.sourceNodes = function () {
  var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_ref2, pluginOptions) {
    var actions = _ref2.actions;

    var now, createNode, _pluginOptions$season, seasonStart;

    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            now = new Date();
            createNode = actions.createNode;
            _pluginOptions$season = pluginOptions.seasonStart, seasonStart = _pluginOptions$season === undefined ? now.getFullYear() : _pluginOptions$season;

            // Make the request to the API

            _context.next = 5;
            return axios.get(getAPIUrl(seasonStart)).then(function (response) {
              return response.data.league.standard
              // Filter out players who did not play in the NBA
              .filter(function (player) {
                return player.teams.length > 0;
              }).map(function (player) {
                return mapPlayerToNode(player, createNode);
              });
            });

          case 5:
            return _context.abrupt('return');

          case 6:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function sourceNodes(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var axios = require('axios');
var capitalize = require('lodash.capitalize');

var _require = require('./nodes'),
    Node = _require.Node;

var getAPIUrl = function getAPIUrl(seasonStart) {
  return 'http://data.nba.net/10s/prod/v1/' + seasonStart + '/players.json';
};

var getPlayerImage = function getPlayerImage(personId) {
  return 'https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/' + personId + '.png';
};

var mapPlayerToNode = function mapPlayerToNode(player, createNode) {
  var node = Node(capitalize('player'), (0, _extends3.default)({}, player, {
    image: getPlayerImage(player.personId)
  }));
  createNode(node);
};