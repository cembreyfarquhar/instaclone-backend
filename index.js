const server = require('./api/server.js');

const poprt = 9000;
server.listen(port, () => console.log(`\nAPI running on port ${port}\n`));