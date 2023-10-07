const { parse } = require("csv-parse");
const fs = require("fs");
const path = require("path");

const planets = [];

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.35 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
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
    .on("data", (data) => {
      if (isHabitablePlanet(data)) planets.push(data);
    })
    .on("error", (error) => {
      throw new Error(`ERROR in models/planets.models.js: ${error}`);
    });
}

module.exports = { loadPlanetsData, planets };
