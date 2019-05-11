// MOST FATAL REASON TO SEPERATE HAS TO DO W TESTING.
// HOW DO WE IMPORT SERVER?
const server = require('./server.js');

server.listen(4000, () => {
  console.log('\n*** Server Running on http://localhost:4000 ***\n');
});

