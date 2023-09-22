const { parse } = require("csv-parse");
const fs = require("fs");

const result = [];

function isHabitablePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.35 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

fs.createReadStream("data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
    })
  )
  .on("data", (data) => {
    if (isHabitablePlanet(data)) result.push(data);
  })
  .on("error", (error) => {
    console.log(error);
  })
  .on("end", () => {
    console.log(result.map((planet) => planet["kepler_name"]));
    console.log(result.length);
  });
