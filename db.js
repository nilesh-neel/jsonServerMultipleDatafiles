
const path = require('path');
const fs = require('fs');
const jsonServer = require('json-server');

const server = jsonServer.create();
const port = 3002;

const mockDir = path.resolve(__dirname, 'Data');

let mocks = {};
fs.readdirSync(mockDir).forEach((file) => {
    if (file.indexOf('.json' > 1)) {
        Object.assign(mocks, require(mockDir + "/" + file));
    }
});

const router = jsonServer.router(mocks);
server.use(jsonServer.defaults());
server.use(router);
server.listen(port, () => {
    console.log(`JSON Server is running at ${port}`)
})
