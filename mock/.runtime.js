/* eslint-disable */
let mocker;

if (process.env.NODE_ENV === "development") {
  const HttpRequestMock = require("http-request-mock/http-request-mock.pure.js");
  mocker = HttpRequestMock.setup("middleware@/");
  mocker.mock({
    "url": "/getResult",
    "body": require('./proto/getResult.js'),
    "delay": 10
  });
  mocker.mock({
    "url": "https://jsonplaceholder.typicode.com/photos/1",
    "method": "GET",
    "body": require('./samples/bypass.js'),
  });
  mocker.mock({
    "url": "https://jsonplaceholder.typicode.com/cache",
    "method": "GET",
    "body": require('./samples/cache.js'),
    "delay": 100,
    "status": 200,
    "header": {
      "content-type": "application/json"
    }
  });
  mocker.mock({
    "url": "https://jsonplaceholder.typicode.com/delay",
    "method": "GET",
    "body": require('./samples/delay.js'),
    "delay": 800,
    "status": 200,
    "header": {
      "content-type": "application/json"
    }
  });
  mocker.mock({
    "url": "https://jsonplaceholder.typicode.com/dynamic",
    "method": "GET",
    "body": require('./samples/dynamic.js'),
    "header": {
      "content-type": "application/json"
    }
  });
  mocker.mock({
    "url": "https://jsonplaceholder.typicode.com/faker",
    "body": require('./samples/faker.js'),
    "delay": 10
  });
  mocker.mock({
    "url": "https://jsonplaceholder.typicode.com/header",
    "method": "GET",
    "body": require('./samples/header.js'),
    "header": {
      "application": "application/json",
      "abc": "123",
      "xyz": [
        "aaa",
        "bbb"
      ]
    }
  });
  mocker.mock({
    "url": "https://jsonplaceholder.typicode.com/404",
    "method": "GET",
    "body": require('./samples/notfound.js'),
    "status": 404
  });
  mocker.mock({
    "url": "https://jsonplaceholder.typicode.com/proxy-mode",
    "method": "GET",
    "body": require('./samples/proxy.js'),
    "header": {
      "content-type": "application/json"
    }
  });
  mocker.mock({
    "url": "https://jsonplaceholder.typicode.com/remote",
    "method": "GET",
    "body": require('./samples/remote.js'),
    "remote": "https://jsonplaceholder.typicode.com/posts/1"
  });
  mocker.mock({
    "url": "https://jsonplaceholder.typicode.com/request-info",
    "body": require('./samples/request.js'),
    "header": {
      "application": "application/json"
    },
    "deProxy": true
  });
  mocker.mock({
    "url": "https://jsonplaceholder.typicode.com/static",
    "method": "GET",
    "body": require('./samples/static.js'),
    "delay": 100
  });
  mocker.mock({
    "url": "https://jsonplaceholder.typicode.com/times",
    "body": require('./samples/times.js'),
    "times": 10,
    "header": {
      "content-type": "application/json"
    }
  });
}

module.exports = mocker;
/* eslint-enable */
