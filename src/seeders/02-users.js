"use strict";

const bcrypt = require("bcrypt");
const { faker } = require("@faker-js/faker");
const { v4: uuidv4 } = require("uuid");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // Fetch existing role IDs
    const roles = await queryInterface.sequelize.query(
      'SELECT id FROM "Roles"',
    );
    const roleIds = roles[0].map((role) => role.id);

    console.log('Retrieved role IDs:', roleIds);

    if (roleIds.length === 0) {
      throw new Error('No roles found. Make sure to seed roles before running this seeder.');
    }


    const users = Array.from({ length: 100 }).map(() => {
      const gender = faker.person.sex();
      const firstName = faker.person.firstName(gender);
      const lastName = faker.person.lastName();
      const email = faker.internet.email({ firstName, lastName });

      return {
        id: uuidv4(),
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: bcrypt.hashSync("TestPassword123", 10),
        profilePhoto: faker.image.avatar(),
        phoneNumber: faker.phone.number(),
        occupation: faker.person.jobTitle(),
        age: Math.floor(Math.random() * (50 - 18 + 1) + 18),
        dateOfBirth: faker.date.birthdate({ min: 18, max: 65, mode: "age" }),
        verified: faker.datatype.boolean(),
        bio: faker.person.bio(),
        country: faker.location.country(),
        createdAt: new Date(),
        updatedAt: new Date(),
      };
    });

    await queryInterface.bulkInsert("Users", users, {});

    console.log('Random role ID:', roleIds[Math.floor(Math.random * roleIds.length)]);

    const userRoles = users.map((user => ({
      userId: user.id,
      roleId: roleIds[Math.floor(Math.random() * roleIds.length)],
      createdAt: new Date(),
      updatedAt: new Date(),
    })));

    return queryInterface.bulkInsert('UserRoles', userRoles);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
