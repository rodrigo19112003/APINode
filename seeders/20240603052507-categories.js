'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('category', [
            { name: 'Acción', protected: true, createdAt: new Date(), updatedAt: new Date() },
            { name: "Aventura", protected: true, createdAt: new Date(), updatedAt: new Date() },
            { name: "Animación", protected: true, createdAt: new Date(), updatedAt: new Date() },
            { name: "Ciencia ficción", protected: true, createdAt: new Date(), updatedAt: new Date() },
            { name: "Comedia", protected: true, createdAt: new Date(), updatedAt: new Date() },
            { name: "Crimen", protected: true, createdAt: new Date(), updatedAt: new Date() },
            { name: "Documental", protected: true, createdAt: new Date(), updatedAt: new Date() },
            { name: "Drama", protected: true, createdAt: new Date(), updatedAt: new Date() },
            { name: "Familiar", protected: true, createdAt: new Date(), updatedAt: new Date() },
            { name: "Fantasia", protected: true, createdAt: new Date(), updatedAt: new Date() },
            { name: "Historia", protected: true, createdAt: new Date(), updatedAt: new Date() },
            { name: "Horror", protected: true, createdAt: new Date(), updatedAt: new Date() },
            { name: "Musica", protected: true, createdAt: new Date(), updatedAt: new Date() },
            { name: "Misterio", protected: true, createdAt: new Date(), updatedAt: new Date() },
            { name: "Romance", protected: true, createdAt: new Date(), updatedAt: new Date() },
        ]);
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('category', null, {});
    }
};