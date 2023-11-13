// Write your JavaScript code here!

window.addEventListener("load", function() {

  let listedPlanets;
  // Set listedPlanetsResponse equal to the value returned by calling myFetch()
  const listedPlanetsResponse = myFetch();
  listedPlanetsResponse.then(function (result) {
    listedPlanets = result;
    console.log(listedPlanets);
  }).then(function () {
    console.log(listedPlanets);
    // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    let planet = pickPlanet(listedPlanets);
    console.log(planet);
    addDestinationInfo(document, planet.name, planet.diameter, planet.star, planet.distance, planet.moons, planet.image);
  });

  const button = document.getElementById("formSubmit");
  button.addEventListener("click", (e) => {
    const pilotName = document.querySelector("input[name=pilotName]");
    const copilotName = document.querySelector("input[name=copilotName]");
    const fuel = document.querySelector("input[name=fuelLevel]");
    const cargoMass = document.querySelector("input[name=cargoMass]");
    e.preventDefault();
    formSubmission(document, null, pilotName.value, copilotName.value, fuel.value, cargoMass.value);
  });

});