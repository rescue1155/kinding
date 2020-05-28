document.getElementById("back-icon").addEventListener("click", () => {
    window.location.href = "/html/root.html";
});

document.getElementById("success-button").addEventListener("click", () => {
    window.location.href = "/html/root.html";
});

document.getElementById("reminder-button").addEventListener("click", () => {
    window.location.href = "/html/root.html";
});

document.getElementById("encourage-button").addEventListener("click", () => {
    window.location.href = "/html/root.html";
});

document.getElementById("failure-button").addEventListener("click", () => {
    window.location.href = "/html/root.html";
});


var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyCLfpLr70tFjAiJ'}).base('appw7q9xOL7nliwUP');

base('Challenges-table').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 3,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Challenges-row'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});
