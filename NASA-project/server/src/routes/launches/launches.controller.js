const { Launch } = require("../../models/launches.model");

function getAllLaunches(req, res) {
  res.status(200).json(Launch.getAllLaunches());
  return;
}

function postLaunch(req, res) {
  const launchInfo = req.body;
  console.log(launchInfo);
  if (
    !launchInfo.mission ||
    !launchInfo.rocket ||
    !launchInfo.launchDate ||
    !launchInfo.destination
  ) {
    res.status(400).json({
      error: "Missing required launch property",
    });
    return;
  }

  const launchDate = new Date(launchInfo.launchDate);
  if (launchDate.toString() === "Invalid Date") {
    res.status(400).json({
      error: "Invalid launch date",
    });
    return;
  }

  const launch = Launch.addLaunch({ ...launchInfo, launchDate });
  res.status(201).json(launch);
  return;
}

function deleteLaunch(req, res) {
  const flightNumber = req.params.id;
  const launch = Launch.deleteLaunch(Number(flightNumber));

  if (launch.error) {
    res.status(404).json({
      error: "Flight number not found",
    });
  }

  res.status(200).json(launch);
  return;
}

module.exports = {
  getAllLaunches,
  postLaunch,
  deleteLaunch,
};
