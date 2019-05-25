import axios from 'axios';
import capitalize from 'lodash.capitalize';
import { Node } from './nodes';

const getAPIUrl = (season, entity) => `http://data.nba.net/10s/prod/v1/${season}/${entity}.json`;

const getTeamLogo = triCode => `https://i.cdn.turner.com/nba/nba/assets/logos/teams/primary/web/${triCode}.svg`;

const getPlayerImage = personId => `https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${personId}.png`;

export async function sourceNodes({ actions }, pluginOptions) {
  const { createNode } = actions;

  // In case the season is not provided, the default one would be the current one
  const season = pluginOptions.season || new Date().getFullYear() - 1;

  const teams = await axios.get(getAPIUrl(season, 'teams')).then(response => response.data.league.standard
    .filter(team => team.isNBAFranchise)
  // eslint-disable-next-line array-callback-return
    .map(team => {
      const node = Node(capitalize('team'), {
        ...team,
        logo: getTeamLogo(team.tricode),
      });
      createNode(node);
    }));

  // Make the request to the API
  await axios.get(getAPIUrl(season, 'players')).then(response => response.data.league.standard
  // Filter out players who did not play in the NBA
    .filter(player => player.teams.length > 0)
  // Filter players that did not play in the NBA since last season
    .filter(player => player.teams[player.teams.length - 1].seasonEnd === '2017')
  // eslint-disable-next-line array-callback-return
    .map(player => {
      const node = Node(capitalize('player'), {
        ...player,
        image: getPlayerImage(player.personId),
        team: teams.find(team => team.teamId === player.teamId),
      });
      createNode(node);
    }));
  // eslint-disable-next-line no-useless-return
  return;
}
