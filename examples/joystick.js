
var ApolloController = require('../gamecontroller.js');

var gc = new ApolloController('ps2');

gc.connect();

gc.on('JOYL:move', function(o) {
  console.log(o);
});
