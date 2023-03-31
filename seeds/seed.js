require('dotenv').config();
const sequelize = require('../config/connection');
const { User, Comment, Post } = require('../models');

const userData = [
  {
    name: "testname1",
    email: "test1@email.com",
    password: "password1",
  },
  {
    name: "testname2",
    email: "test2@email.com",
    password: "password2",
  },
  {
    name: "testname3",
    email: "test3@email.com",
    password: "password3",
  }
]

const postData = [
  {
    content: "STUFFHERELOL",
    title: "TITLE1",
    user_id: 1
  },
  {
    content: "HELLO",
    title: "TITLE2",
    user_id: 2
  },
  {
    content: "HEHEHE",
    title: "TITLE3",
    user_id: 3
  },
]

const commentData = [
  {
    body: "STUFFHERELOL",
    user_id: 3,
    post_id: 1,
  },
  {
    body: "HELLO",
    user_id: 2,
    post_id: 2,
  },
  {
    body: "HEHEHE",
    user_id: 1,
    post_id: 3,
  },
]

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: true });
    await User.bulkCreate(userData, {
      individualHooks: true,
      returning: true,
    });
    await Post.bulkCreate(postData);
    await Comment.bulkCreate(commentData);
    console.log('Finished seeding database.');
  } catch (error) {
    console.error(error);
    console.error(
      'An error occurred attempting to seed the database. Scroll up for additional details.'
    );
  } finally {
    await sequelize.close();
    process.exit(0);
  }
};

seedDatabase();
