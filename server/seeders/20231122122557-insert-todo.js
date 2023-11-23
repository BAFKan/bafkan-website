"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const data = require("../db/todo.json");

    data.forEach((element) => {
      element.createdAt = element.updatedAt = new Date();
    });

    await queryInterface.bulkInsert("Todos", data, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Todos", null, {});
  },
};
