'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const { INTEGER, STRING, DATE } = Sequelize;
    return queryInterface.createTable('video_decodes', {
      id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      trans_path: STRING,
      chunk_path: STRING,
      status_id: Sequelize.INTEGER,
      created_at: DATE,
      updated_at: DATE,
      deleted_at: DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('video_decodes');
  },
};
