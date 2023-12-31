const { parse } = require("csv-parse");
const fs = require("fs");
const path = require("path");
const planets = require("./planets.mongo");

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.35 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

async function getPlanets() {
  return await planets.find({});
}

async function savePlanet(planet) {
  try {
    await planets.updateOne(
      { keplerName: planet.kepler_name },
      { keplerName: planet.kepler_name },
      { upsert: true }
    );
  } catch (error) {
    console.error(`savePlanet failed: ${error}`);
  }
}

async function loadPlanetsData() {
  fs.createReadStream(
    path.join(__dirname, "..", "..", "data", "kepler.data.csv")
  )
    .pipe(
      parse({
        comment: "#",
        columns: true,
      })
    )
    .on("data", async (data) => {
      if (isHabitablePlanet(data)) {
        savePlanet(data);
      }
    })
    .on("error", (error) => {
      throw new Error(`ERROR in models/planets.models.js: ${error}`);
    });
}

module.exports = { loadPlanetsData, getPlanets };
