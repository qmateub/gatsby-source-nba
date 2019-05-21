import createNodeHelpers from 'gatsby-node-helpers';

const { createNodeFactory } = createNodeHelpers({
  typePrefix: 'NBA',
});

/**
 * Node factory with `type` option based on
 * original `createNodeFactory`.
 *
 * @param {string} type - Node type
 * @param {object} node - Node
 * @constructor
 */
export const Node = (type, n) => createNodeFactory(type, node => ({
  ...node,
  id: node.personId,
}))(n);
