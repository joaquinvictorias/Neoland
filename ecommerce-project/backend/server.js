const app = require("./app");
const serverless = require('serverless-http');

const port = 3000;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});

module.exports.handler = serverless(app);
