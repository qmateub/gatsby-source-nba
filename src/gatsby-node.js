import axios from 'axios';
import capitalize from 'lodash.capitalize';
import { Node } from './nodes';

export async function sourceNodes({ boundActionCreators }) {
  const { createNode } = boundActionCreators;

  // Make the request to the API
  await axios.get('http://data.nba.net/10s/prod/v1/2017/players.json').then(response =>
    response.data.league.standard
      // Filter out player who did not play in the NBA
      .filter(player => player.teams.length > 0)
      // Filter players that did not play in the NBA since last season
      .filter(player => player.teams[player.teams.length - 1].seasonEnd === '2017')
      .map(player => {
        const node = Node(capitalize('player'), {
          ...player,
          image: `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${
            player.personId
          }.png`,
        });
        createNode(node);
      }));
  // eslint-disable-next-line
  return;
}

export default sourceNodes;
