import '../mock/.runtime.js';
import { createApp } from 'vue'

import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
import json from 'highlight.js/lib/languages/json';
import hljsVuePlugin from "@highlightjs/vue-plugin";

import 'highlight.js/styles/github-dark.css';

import App from './App.vue'

hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);

const app = createApp(App);
app.use(hljsVuePlugin);
app.mount('#app')
