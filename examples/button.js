
var ApolloController = require('../gamecontroller.js');

var gc = new ApolloController('ps2');

gc.connect();

gc.on('X:press', function() {
  console.log("X Pressed");
});

gc.on('X:release', function() {
  console.log("X Released");
});

gc.on('error', function(err) {
  console.error(err);
});
