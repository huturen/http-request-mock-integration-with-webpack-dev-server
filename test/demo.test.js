/* global it, expect */
import axios from 'axios';
import xhrAdapter from 'axios/lib/adapters/xhr';
import HttpRequestMock from 'http-request-mock';

axios.defaults.adapter = xhrAdapter;
const mocker = HttpRequestMock.setupForUnitTest('xhr');

mocker.use('../mock/samples/dynamic.js');

it('should match object`', async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/dynamic');
  expect(res.data).toMatchObject({msg: 'ok'});
});
