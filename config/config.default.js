'use strict';
const Sequelize = require('sequelize');
const path = require('path');

module.exports = appInfo => {
  const config = (exports = {});
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1541178168304_2532';
  config.security = {
    csrf: {
      enable: false,
    },
    xframe: {
      enable: false,
    },
  };
  // add your config here
  config.middleware = [];
  config.view = {
    mapping: {
      '.tpl': 'nunjucks',
    },
  };

  const uploadStaticPrefix = 'app';
  const uploadStaticDir = '/public/';
  config.upload = {
    staticPrefix: uploadStaticPrefix,
    staticDir: uploadStaticDir,
    baseDir: `${uploadStaticPrefix}${uploadStaticDir}`,
    avatorDir: 'upload/avator/',
    picDir: 'upload/pic/',
    videoDir: 'upload/video/',
  };
  config.transcode = {
    baseDir: 'transcode/',
    sourceDir: 'source/',
    targetDir: 'target/',
  };
  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    database: 'database_development',
    username: 'root',
    // password: 'luotian520',
    password: 'root',
    operatorsAliases: Sequelize.Op,
    benchmark: false,
  };

  return config;
};
