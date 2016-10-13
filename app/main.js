import Vue from 'vue';
import Hello from './components/hello-component';
import App from './App.html';

/* eslint-disable no-new */
Vue.component({
    template: App,
    components: Hello
});
