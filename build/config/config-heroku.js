"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
const configHeroku = {
  database: 'd4apc07ejupcal',
  username: 'xstfovzijqznpv',
  password: 'c9403e2b211773f4b28c267d2a4828b6f693111c21f254565613a6cd20e782fe',
  host: 'ec2-34-230-198-12.compute-1.amazonaws.com',
  port: 5432,
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 3000,
    idle: 10000
  }
};
var _default = configHeroku;
exports.default = _default;
//# sourceMappingURL=config-heroku.js.map