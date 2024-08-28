const CorsAnywhere = require('cors-anywhere');

const server = CorsAnywhere.createServer({
  originWhitelist: [], // Allow all origins
  requestHeaders: [
    'Authorization',
    'Content-Type',
    'Accept',
    'Client-ID'
  ],
  preflightMaxAge: 86400, // Cache preflight response for 1 day
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`CORS Anywhere server running on port ${PORT}`);
});
