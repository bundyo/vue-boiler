const Vue = require("vue");
const Hello = require("./components/hello-component");
const App = require("./App.html");

require("./main.css");

/* eslint-disable no-new */
module.extends = Vue.component("app", {
    template: App,
    components: Hello
});

require("app/hot-reload")(module);

new Vue({
    el: "#root"
});
