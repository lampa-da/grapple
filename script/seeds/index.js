const userSeed = require("./user");
const challengeSeed = require("./challenge");
const userChallengeSeed = require("./userChallenge");
const connectionSeed = require("./connection");
const dailyUserChallengeSeed = require("./dailyUserChallenge");
const stravaSeed = require("./strava");

const { db } = require("../../server/db");

async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  const [users] = await Promise.all([userSeed()]);
  const [challenges] = await Promise.all([challengeSeed()]);
  const [userChallenges] = await Promise.all([userChallengeSeed()]);
  const [connection] = await Promise.all([connectionSeed()]);
  const [dailyUserChallenges] = await Promise.all([dailyUserChallengeSeed()]);
  const [stravaWorkouts] = await Promise.all([stravaSeed()]);

  console.log(`
  
  
            seeded successfully
            
            
  `);
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
