/*additional setup with other loaders (polyfills, ...)*/
const context = require.context('./src/app/test', true, /\.spec\.ts/);
context.keys().forEach(context);