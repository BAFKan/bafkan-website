"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = require("../db/project.json");

    data.forEach((element) => {
      element.createdAt = element.updatedAt = new Date();
    });

    await queryInterface.bulkInsert("Projects", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Projects", null, {});
  },
};
