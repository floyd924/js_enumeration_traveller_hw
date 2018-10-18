const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  let map = this.journeys.map(j => j.startLocation);
  return map;
};

Traveller.prototype.getJourneyEndLocations = function () {
  let map = this.journeys.map(j => j.endLocation);
  return map;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
//filter all journeys by transport
  return this.journeys.filter(journey => journey.transport == transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter(journey => journey.distance > 1000);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  //make an array of distances
  let map1 = this.journeys.map(journey => journey.distance);
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return map1.reduce(reducer);
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  let map1 = this.journeys.map(journey => journey.transport);

  return map1.filter((transport, indexPosition) => map1.indexOf(transport) === indexPosition);


  //sort
  //if it's the same as the following index, splice it out
  //add to new array if transport != the spliced ones?
};


module.exports = Traveller;
