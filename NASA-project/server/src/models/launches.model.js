const launches = require("./launches.mongo");

async function getLaunch(flightNumber) {
  return await launches.findOne({ flightNumber });
}

async function getLaunches() {
  return await launches.find({});
}

async function saveLaunch(launch) {
  await launches.updateOne({ flightNumber: launch.flightNumber }, launch, {
    upsert: true,
  });
}

async function deleteLaunch(flightNumber) {
  return await launches.deleteOne({ flightNumber });
}

saveLaunch({
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("Dec 27 2023"),
  destination: "Kepler-442 b",
});

module.exports = {
  saveLaunch,
  getLaunches,
  getLaunch,
  deleteLaunch,
};
