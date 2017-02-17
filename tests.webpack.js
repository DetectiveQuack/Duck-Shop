const context = require.context('./src/client/tests', true, /.+\.spec\.jsx?$/);
context.keys().forEach(context);
module.exports = context;
