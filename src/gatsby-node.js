import axios from 'axios';
import capitalize from 'lodash.capitalize';
import { Node } from './nodes';

const getAPIUrl = seasonStart =>
  `http://data.nba.net/10s/prod/v1/${seasonStart}/players.json`;

const getPlayerImage = personId =>
  `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${personId}.png`;

export async function sourceNodes({ actions }, pluginOptions) {
  const now = new Date();
  const { createNode } = actions;
  const { seasonStart = now.getFullYear() } = pluginOptions;

  // Make the request to the API
  await axios.get(getAPIUrl(seasonStart)).then(response =>
    response.data.league.standard
      // Filter out players who did not play in the NBA
      .filter(player => player.teams.length > 0)
      // eslint-disable-next-line array-callback-return
      .map(player => {
        const node = Node(capitalize('player'), {
          ...player,
          image: getPlayerImage(player.personId),
        });
        createNode(node);
      })
  );
  // eslint-disable-next-line no-useless-return
  return;
}
