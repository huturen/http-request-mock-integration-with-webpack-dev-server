<template>
  <div class="hello">
    <h5>http-request-mock: Integration with webpack-dev-server</h5>
    <div class="request">
      <div>
        URL: <select v-model="url" @change="onUrlChange">
          <option v-for="url in Object.keys(urls)" :value="url" :key="url">{{url}}</option>
        </select>
        <button @click="doRequest">{{btnText}}</button>
      </div>
      <div class="codes"><highlightjs language="javascript" :code="codes" /></div>

      <div class="separator"></div>
      <div><b>Spent</b>: {{spent}}</div>
      <div><b>Response Headers</b>: {{responseHeaders}}</div>
      <div class="codes"><highlightjs language="json" :code="responseBody" /></div>
    </div>
    <br>
    <div>Hit F12 to access Developer Tools and view the console logs.</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data() {
    return {
      url: 'https://jsonplaceholder.typicode.com/dynamic',
      btnText: 'Request',
      codes: '',
      spent: 0,
      responseBody: '',
      responseHeaders: '-',
      urls: {
        'https://jsonplaceholder.typicode.com/dynamic': require('!raw-loader!../mock/samples/dynamic.js').default,
        'https://jsonplaceholder.typicode.com/static': require('!raw-loader!../mock/samples/static.js').default,
        'https://jsonplaceholder.typicode.com/delay': require('!raw-loader!../mock/samples/delay.js').default,
        'https://jsonplaceholder.typicode.com/faker': require('!raw-loader!../mock/samples/faker.js').default,
        'https://jsonplaceholder.typicode.com/times': require('!raw-loader!../mock/samples/times.js').default,
        'https://jsonplaceholder.typicode.com/404': require('!raw-loader!../mock/samples/notfound.js').default,
        'https://jsonplaceholder.typicode.com/photos/1?bypass=1': require('!raw-loader!../mock/samples/bypass.js').default,
        'https://jsonplaceholder.typicode.com/photos/1?bypass=2': require('!raw-loader!../mock/samples/bypass.js').default,
        'https://jsonplaceholder.typicode.com/header': require('!raw-loader!../mock/samples/header.js').default,
        'https://jsonplaceholder.typicode.com/request-info?a=1': require('!raw-loader!../mock/samples/request.js').default,
        'https://jsonplaceholder.typicode.com/cache': require('!raw-loader!../mock/samples/cache.js').default,
        'https://jsonplaceholder.typicode.com/remote': require('!raw-loader!../mock/samples/remote.js').default,
      }
    }
  },

  mounted () {
    this.onUrlChange();
  },

  methods: {
    onUrlChange() {
      this.codes = this.urls[this.url];
      this.doRequest();
    },

    doRequest() {
      this.btnText = 'Loading...';
      const now = Date.now();
      axios.get(this.url).then(res => {
        this.spent = Date.now() - now;
        this.responseBody = JSON.stringify(res.data, null, 2);
        this.responseHeaders = JSON.stringify(res.headers, null, 2);
        this.btnText = 'Request';
      }).catch(err => {
        this.spent = Date.now() - now;
        this.responseBody = err.message;
        this.responseHeaders = '-';
        this.btnText = 'Request';
        console.log('error:', err);
      });
    }
  }
}
</script>

<style type>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: black;
  text-align: center;
  margin-top: 10px;
  font-size: 12px;
}
h5 {
  font-size: 14px;
}
.request {
  margin: 30px;
  width: 50%;
  margin: 0 auto;
  min-width: 750px;
  text-align: left;
}
select, button {
  border: 1px dashed red;
  margin: 0 3px;
}
.separator {
  border-top: 0px dashed black;
  margin: 10px 0;
}

.codes {
  text-align: left;
  margin-bottom: -2px;
}
</style>
