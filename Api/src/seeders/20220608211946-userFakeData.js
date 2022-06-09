'use strict';

const Chance = require('chance');

const chance = new Chance();

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     Example:
    await queryInterface.bulkInsert('users', [{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologies: ["HTML", "CSS3", "Java"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologies: ["HTML", "JavaScript"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologies: ["Java", "C#"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologies: ["JavaScript"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologies: ["MySQL", "Java", "Python"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologies: ["SQLite", "JavaScript", "C"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologies: ["Java", "C#", "Oracle"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologies: ["PostgreSQL", "MongoDB", "Java"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologies: ["HTML", "CSS3", "C#", "MySQL"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologies: ["Java"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologies: ["C", "C#"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologies: ["JavaScript", 'MongoDB'], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologies: ["Python", "Oracle"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologies: ["C", "C#", "Oracle"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "empleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologies: ["JavaScript", "C#", "Oracle"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },{
      email: chance.email(), name: chance.name(), employment_status: "desempleado", 
      age: chance.age(), image: chance.url({extensions: ['jpg', 'png']}), description: chance.sentence(), 
      technologies: ["JavaScript", "MongoDB", "Java"], nationality: chance.country({ full: true }), url: chance.domain(), 
      cv: chance.url({extensions: ['pdf']}), createdAt: new Date(), updatedAt: new Date()
    },], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
