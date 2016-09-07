[![npm version](https://badge.fury.io/js/ruter-api.svg)](https://badge.fury.io/js/ruter-api)
[![Downloads](https://img.shields.io/npm/dm/ruter-api.svg)](https://npmjs.com/ruter-api)
[![Dependency Status](https://david-dm.org/willosof/ruter-api.svg)](https://david-dm.org/willosof/ruter-api)
[![Build Status](https://travis-ci.org/willosof/ruter-api.svg?branch=master)](https://travis-ci.org/willosof/ruter-api)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![GitHub issues](https://img.shields.io/github/issues/willosof/node-ruter.svg?style=plastic)](https://github.com/willosof/node-ruter/issues)
[![GitHub forks](https://img.shields.io/github/forks/willosof/node-ruter.svg?style=plastic)](https://github.com/willosof/node-ruter/network)
[![GitHub stars](https://img.shields.io/github/stars/willosof/node-ruter.svg?style=plastic)](https://github.com/willosof/node-ruter/stargazers)

## Features
* **api(apipath, options, result_cb)**

### Getting Started

In Node.js:

```
npm install ruter-api
```

```javascript
var ruter = require('ruter-api');

// Get all stations and their IDs
ruter.api("Heartbeat/Index", {}, response => {
	console.log(response);
});


```

### Git
* [https://github.com/willosof/node-ruter](https://github.com/willosof/node-ruter)
* `git@github.com:willosof/node-ruter.git`

### Data Sources
* http://reisapi.ruter.no/help

### Author
William Viker <<william.viker@gmail.com>>
