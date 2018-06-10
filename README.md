# gatsby-source-nba

Source plugin for pulling data into [Gatsby][gatsby] from [NBA API][nba-api]

## Features

- Provides information about NBA Players pulling the data from the NBA API

## Install

```sh
npm install --save gatsby-source-nba
```

## How to use

```js
// In your gatsby-config.js
plugins: [
  {
    resolve: 'gatsby-source-nba',
  },
];
```

## How to query

You can query nodes created from the NBA API using GraphQL like the following:

**Note**: Learn to use the GraphQL tool and Ctrl+Spacebar at
<http://localhost:3000/___graphql> to discover the types and properties of your
GraphQL model.

```graphql
{
  allNbaPlayer {
    edges {
      node {
        id
        firstName
        lastName
      }
    }
  }
}
```

## TO-DO

- Complete player infor with statistics and team information

- Add teams information + roster

- Make the plugin configurable to choose with info you want to get pulled by the API.

[gatsby]: https://www.gatsbyjs.org/
[nba-api]: http://nbasense.com/
