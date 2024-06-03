'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('categorymovie', [
            { movieId: 1, categoryId: 6, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 2, categoryId: 6, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 2, categoryId: 8, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 3, categoryId: 1, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 3, categoryId: 2, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 3, categoryId: 8, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 4, categoryId: 8, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 5, categoryId: 6, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 5, categoryId: 8, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 6, categoryId: 8, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 6, categoryId: 15, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 7, categoryId: 8, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 8, categoryId: 1, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 8, categoryId: 2, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 9, categoryId: 1, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 9, categoryId: 2, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 9, categoryId: 10, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 10, categoryId: 1, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 10, categoryId: 4, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 11, categoryId: 1, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 11, categoryId: 2, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 11, categoryId: 4, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 12, categoryId: 1, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 12, categoryId: 2, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 12, categoryId: 8, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 13, categoryId: 1, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 13, categoryId: 2, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 13, categoryId: 4, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 14, categoryId: 2, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 14, categoryId: 4, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 14, categoryId: 5, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 15, categoryId: 2, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 15, categoryId: 5, createdAt: new Date(), updatedAt: new Date() },
            { movieId: 15, categoryId: 10, createdAt: new Date(), updatedAt: new Date() }
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('categorymovie', null, {});
    }
};