import axios from 'axios';
import capitalize from 'lodash.capitalize';
import { Node } from './nodes';

// TODO: Could have as a parameter the season
const getAPIUrl = () => 'http://data.nba.net/10s/prod/v1/2017/players.json';

const getPlayerImage = personId => `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${personId}.png`;

export async function sourceNodes({ actions }) {
  const { createNode } = actions;

  // Make the request to the API
  await axios.get(getAPIUrl()).then(response => response.data.league.standard
  // Filter out players who did not play in the NBA
    .filter(player => player.teams.length > 0)
  // Filter players that did not play in the NBA since last season
    .filter(player => player.teams[player.teams.length - 1].seasonEnd === '2017')
  // eslint-disable-next-line array-callback-return
    .map(player => {
      const node = Node(capitalize('player'), {
        ...player,
        image: getPlayerImage(player.personId),
      });
      createNode(node);
    }));
  // eslint-disable-next-line no-useless-return
  return;
}
