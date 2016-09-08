[![npm version](https://badge.fury.io/js/ruter-api.svg)](https://badge.fury.io/js/ruter-api)
[![Downloads](https://img.shields.io/npm/dm/ruter-api.svg)](https://npmjs.com/ruter-api)
[![Dependency Status](https://david-dm.org/willosof/ruter-api.svg)](https://david-dm.org/willosof/ruter-api)
[![Build Status](https://travis-ci.org/willosof/node-ruter.svg?branch=master)](https://travis-ci.org/willosof/node-ruter)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/willosof/node-ruter.svg?style=plastic)](https://github.com/willosof/node-ruter/issues)
[![GitHub forks](https://img.shields.io/github/forks/willosof/node-ruter.svg?style=plastic)](https://github.com/willosof/node-ruter/network)
[![GitHub stars](https://img.shields.io/github/stars/willosof/node-ruter.svg?style=plastic)](https://github.com/willosof/node-ruter/stargazers)

## Functions
* **api(apipath, options, result_cb)**

### Getting Started

In Node.js:

```
npm install ruter-api
```

```javascript
var ruter = require('ruter-api');

// Returns "Pong". Check API server availability
ruter.api("Heartbeat/Index", {}, response => {
	console.log(response);
});

// Get all stops within the ruter zone
ruter.api("Place/GetStopsRuter", {}, response => {
	console.log(response);
});

// Get all lines. Their name, type and respective color,
ruter.api("Line/GetLines", {}, response => {
    console.log(response);
});

```
# API (as of Sept 9 2016)

### Heartbeat

* **Heartbeat/Index**
Returns "Pong".

### Place
* **Place/GetStop/{id}**
Returns all data about a Stop

* **Place/GetArea/{id}**
This method is not official part of Ruter Open API. It may be removed or changed without prior notice.

* **Place/GetPlaceExtension/{id}?locationType={locationType}**
This method is not official part of Ruter Open API. It may be removed or changed without prior notice

* **Place/GetPlacesByIdListExtension**
This method is not official part of Ruter Open API. It may be removed or changed without prior notice

* **Place/GetPlacesByAreaExtension?xmin={xmin}&xmax={xmax}&ymin={ymin}&ymax={ymax}&unique={unique}&locationType={locationType}**
This method is not official part of Ruter Open API. It may be removed or changed without prior notice

* **Place/GetClosestPlacesExtension?coordinates={coordinates}&proposals={proposals}&maxdistance={maxdistance}&unique={unique}&locationType={locationType}**
This method is not official part of Ruter Open API. It may be removed or changed without prior notice

* **Place/GetPlaces/{id}?location={location}**
Returns a list of Places that have names similar to the search string. If a Location is provided, search results are sorted according to geographical proximity.

* **Place/GetPlacesExtension/{id}?location={location}&unique={unique}&locationType={locationType}&proposals={proposals}**
This method is not official part of Ruter Open API. It may be removed or changed without prior notice

* **Place/GetStopsByLineID/{id}**
Returns an unsorted list of all Stops served by a Line.

* **Place/GetClosestStops?coordinates={coordinates}&proposals={proposals}&maxdistance={maxdistance}**
Returns a List of Stops and their real walking distance to the point defined by the argument Coordinates.

* **Place/GetStopsByArea?xmin={xmin}&xmax={xmax}&ymin={ymin}&ymax={ymax}&includeStopPoints={includeStopPoints}**
Returns a list of Stops within a box defined by the search arguments. All values have to be on UTM33 format.

* **Place/GetSalePointsByArea?longmin={longmin}&longmax={longmax}&latmin={latmin}&latmax={latmax}**
Returns a list of SalePoints within a box defined by the search arguments. All values have to be long lat.

* **Place/GetCityBikeStations?longmin={longmin}&longmax={longmax}&latmin={latmin}&latmax={latmax}**
Returns a list of City Bike Sations within a box defined by the search arguments. The stations also contain information about available bicycles and locks.

* **Place/GetStopsRuter**
Returns a list of stops within the Ruter zones.

### Trip

* **Trip/GetTrip/{id}?time={time}**
Returns a sequence of all Stops served by a Trip.

### Meta

* **Meta/GetValidities**
Returns the date and time for the first and last valid search time.

### Travel

* **Travel/GetTravels?fromPlace={fromPlace}&toPlace={toPlace}&isafter={isafter}&time={time}&changemargin={changemargin}&changepunish={changepunish}&walkingfactor={walkingfactor}&proposals={proposals}&transporttypes={transporttypes}&maxwalkingminutes={maxwalkingminutes}&linenames={linenames}&walkreluctance={walkreluctance}&waitAtBeginningFactor={waitAtBeginningFactor}**
The travel planner covers all public transport modes and walking. In order to plan a journey between two places, you need to input the location of both the starting point and the destination on one of the following formats: National stop ID, Area ID, POI ID or Coordinate (in UTM32 format) In most cases, default parameters for interchange and walking speed should be used, but they can be adjusted according to your wish. The server will return a TravelResponse object, which in turn contains an array of TravelProposals as well as a ReisError object (which should be empty ;)). The TravelProposal objects in turn contain a TravelStage or WalkingStage object for each of the legs of the journey.

* **Travel/GetTravelsExtension?fromplace={fromplace}&toplace={toplace}&isafter={isafter}&time={time}&changemargin={changemargin}&changepunish={changepunish}&walkingfactor={walkingfactor}&proposals={proposals}&transporttypes={transporttypes}&maxwalkingminutes={maxwalkingminutes}&linenames={linenames}**
No documentation available.

* **Travel/GetRoute?stops={stops}&time={time}&outSR={outSR}**
No documentation available.

### StopVisit

* **StopVisit/GetDepartures/{id}?datetime={datetime}&transporttypes={transporttypes}&linenames={linenames}**
Returns a List of StopVisits (departures) from a Stop. If no time parameter is supplied, departures in realtime will be returned.

### Street

* **Street/GetStreet/{id}**
Returns all Houses with their coordinates of a Street with the given ID

### Line

* **Line/GetLines**
Returns a List of all Lines available.

* **Line/GetLinesByStopID/{id}**
Returns a List of all Lines that serve a Stop.

* **Line/GetDataByLineID/{id}**
Returns data about a Line.

* **Line/GetStopsByLineId/{id}**
Returns a List of all Stops that are served by a Line.

* **Line/GetLinesRuterExtended?ruterOperatedOnly={ruterOperatedOnly}**
Returns a list of lines that Ruter operates, including stops for each line. Whether or not to include train lines, airport express lines and other lines by other operators. Set to "true" or "false", default is false if not supplied.

* **Line/GetLinesRuter?ruterOperatedOnly={ruterOperatedOnly}**
Returns a list of lines that Ruter operates.

## Read more
Read more about the API-calls and the values you get in return at Ruters official [API specification](http://reisapi.ruter.no/help)

## Git
* [https://github.com/willosof/node-ruter](https://github.com/willosof/node-ruter)
* `git@github.com:willosof/node-ruter.git`

## Data Sources / Public Documentation
* http://reisapi.ruter.no/help

## Author
William Viker <<william.viker@gmail.com>>
