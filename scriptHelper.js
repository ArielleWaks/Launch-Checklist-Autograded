// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
   const missionTarget = document.getElementById("missionTarget");

 }
 
 function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else {
        return "Is a Number";
    }
 }
 
 function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    const faultyItems = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");
    let launchStatus = document.getElementById("launchStatus")

    // let pilotName = document.querySelector("input[name=pilotName]");
    // let copilotName = document.querySelector("input[name=copilotName]");
    // fuelLevel = document.querySelector("input[name=fuelLevel]");
    // let cargoMass = document.querySelector("input[name=cargoMass]");

    if (validateInput(pilot)==="Empty" || validateInput(copilot)==="Empty" || validateInput(fuelLevel)==="Empty" || validateInput(cargoLevel)==="Empty" ) {
        alert("All fields are required");
        preventDefault();
    } else if (validateInput(pilot)==="Is a Number" || validateInput(copilot)==="Is a Number") {
        alert("Pilots are not numbers");
        preventDefault();
    } else if (validateInput(fuelLevel)==="Not a Number") {
        alert("Fuel Level must be a number");
        preventDefault();
    } else if (validateInput(cargoLevel)==="Not a Number") {
        alert("Cargo Mass must be a number");
        preventDefault();
    }

    pilotStatus.innerHTML = `${pilot} Pilot Ready`;
    copilotStatus.innerHTML = `${copilot} Co-pilot Ready`;

    if (fuelLevel < 10000 || cargoLevel > 10000) {
        faultyItems.style.visibility = "visible";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
    } else {
        launchStatus.style.color = "green";
        launchStatus.innerHTML = "Shuttle is ready for launch"
    }
    
    if (fuelLevel < 10000) {
        fuelStatus.innerHTML = "Insufficient fuel for journey";
    }

    if (cargoLevel > 10000) {
        cargoStatus.innerHTML = "Cargo mass above capacity for launch";
    }


 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch().then( function(response) {
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    // return one planet from the list with a randomly-selected index
    let index = Math.floor(Math.random()*planets.length);
    return planets[index];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;