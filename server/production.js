/* eslint-disable import/no-dynamic-require */
const path = require('path');

const ClientStatsPath = path.join(__dirname, '../dist/stats.json');
const ServerRendererPath = path.join(__dirname, '../dist/server.js');
const ServerRenderer = require(ServerRendererPath).default;
const Stats = require(ClientStatsPath);

module.exports = (app) => {
  app.use(ServerRenderer(Stats));
};
