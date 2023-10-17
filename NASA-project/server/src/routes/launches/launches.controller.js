const {
  getLaunch,
  getLaunches,
  saveLaunch,
  deleteLaunch,
} = require("../../models/launches.model");

function getAllLaunches(req, res) {
  res.status(200).json(getLaunches());
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

  const launch = saveLaunch({ ...launchInfo, launchDate });
  res.status(201).json(launch);
  return;
}

function abortLaunch(req, res) {
  const flightNumber = Number(req.params.id);

  if (isNaN(flightNumber)) {
    res.status(400).json({
      error: "Flight number not valid",
    });
  }

  if (!launchExists(flightNumber)) {
    res.status(404).json({
      error: "Flight number not found",
    });
  }

  const launch = deleteLaunch(flightNumber);

  res.status(200).json(launch);
  return;
}

module.exports = {
  getAllLaunches,
  postLaunch,
  abortLaunch,
};
