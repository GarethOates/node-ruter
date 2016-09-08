var ruter = require('./index');

// Get all stations and their IDs
ruter.api("Line/GetLines", {}, response => {
    console.log(response);
});

