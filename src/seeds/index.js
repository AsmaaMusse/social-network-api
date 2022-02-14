const mongoose = require("mongoose");

const { User, Thought } = require("../models");

const users = require("./data/users");
const thoughts = require("./data/thoughts");

const init = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/socialNetworkDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("[INFO]: Successfully connected to Database");

    await Thought.deleteMany({});
    await Thought.insertMany(thoughts);
    console.log("[INFO]: Successfully seeded thoughts");

    // Get all thoughts from database
    const thoughtsFromDb = await Thought.find({});
    // for each thought allocate a random Id using floor method
    thoughtsFromDb.forEach((thought) => {
      const randomId = Math.floor(Math.random() * users.length);
      //random user will equal to a user with any random id attached
      const randomUser = users[randomId];
      // change thought _id into a string type
      const thoughtId = thought._id.toString();
      // push up the random user with the an ID attached to the thoughId
      randomUser.thoughts.push(thoughtId);
      users[randomId] = randomUser;

      console.log("[INFO]: Successfully seeded Users with Thoughts");
    });

    await User.deleteMany({});
    const newUsers = await User.insertMany(users);
    console.log("[INFO]: Successfully seeded users");

    const friendPromises = newUsers.map(async (user) => {
      const username = user.username;
      const allUsers = newUsers.filter(
        (currentUser) => currentUser.username != username
      );

      const randomFriend =
        allUsers[Math.floor(Math.random() * allUsers.length)];

      user.friends.push(randomFriend._id);

      await User.findByIdAndUpdate(user._id, { ...user });
    });

    await Promise.all(friendPromises);

    console.log("[INFO]: Successfully users with friends");

    await mongoose.disconnect();
  } catch (error) {
    console.log(`[ERROR]: Database connection failed | ${error.message}`);
  }
};

init();
