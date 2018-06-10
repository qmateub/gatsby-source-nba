import axios from 'axios';
import { Node } from './nodes';
import { capitalize } from 'lodash';

export async function sourceNodes({ boundActionCreators }) {
  const { createNode } = boundActionCreators;
  console.log('here');
  const promise = await axios
    .get('http://data.nba.net/10s/prod/v1/2017/players.json')
    .then(response =>
      response.data.league.standard
        .filter(player => player.teams.length > 0)
        .filter(
          player => player.teams[player.teams.length - 1].seasonEnd === '2017'
        )
        .map(player => {
          const node = Node(capitalize('player'), {
            ...player,
            image: `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${
              player.personId
            }.png`
          });
          createNode(node);
        })
    );
  // return data
  return;
}
