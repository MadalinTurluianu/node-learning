const { planets } = require("../../models/planets.model");

function getAllPlanets(req, res) {
  res.status(200).json(planets);
  return;
}

module.exports = {
  getAllPlanets,
};
