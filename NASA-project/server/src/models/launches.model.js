class Launch {
  constructor({
    mission,
    rocket,
    launchDate,
    customers,
    destination,
    flightNumber,
    upcoming,
    success,
  }) {
    this.mission = mission;
    this.rocket = rocket;
    this.launchDate = launchDate;
    this.customers = customers ?? ["ZTM", "NASA"];
    this.destination = destination;
    this.flightNumber = flightNumber;
    this.upcoming = upcoming ?? true;
    this.success = success ?? true;
  }

  static launches = new Map();

  static lastLaunch = 0;

  static addLaunch = ({
    mission,
    rocket,
    launchDate,
    customers,
    destination,
    upcoming,
    success,
  }) => {
    const flightNumber = this.lastLaunch + 1;
    const launch = new Launch({
      mission,
      rocket,
      launchDate,
      customers,
      destination,
      upcoming,
      success,
      flightNumber,
    });
    this.lastLaunch = flightNumber;
    this.launches.set(flightNumber, launch);
    return launch;
  };

  static getLaunch = (flightNumber) => this.launches.get(flightNumber);

  static getAllLaunches = () => Array.from(this.launches.values());

  static abortLaunch = (flightNumber) => {
    const launch = this.launches.get(flightNumber);
    launch.success = false;
    launch.upcoming = false;

    return launch;
  };

  static launchExists = (flightNumber) =>
    this.launches.get(flightNumber) != null;
}

Launch.addLaunch({
  mission: "Kepler Exploration X",
  rocket: "Explorer IS1",
  launchDate: new Date("Dec 27 2023"),
  destination: "Kepler-442 b",
});

module.exports = { Launch };
