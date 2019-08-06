const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  development: {
    username: 'estudy',
    password: 'tjdwns2702',
    database: 'Exnode',
    host: 'e-com.ckzlr3hjcfba.ap-northeast-1.rds.amazonaws.com',
    dialect: 'mysql',
  },
  // test: {
  //   username: 'root',
  //   password: process.env.DB_PASSWORD,
  //   database: 'jun',
  //   host: 'arn:aws:rds:ap-northeast-1:924828916262:db:jun',
  //   dialect: 'mysql',
  // },
  // production: {
  //   username: 'root',
  //   password: process.env.DB_PASSWORD,
  //   database: 'jun',
  //   host: 'arn:aws:rds:ap-northeast-1:924828916262:db:jun',
  //   dialect: 'mysql',
  // },
};
