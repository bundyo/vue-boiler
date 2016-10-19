const Vue = require("vue");
const hello = require("app/components/hello/hello");
const appTemplate = require("./app.html");

/* eslint-disable no-new */
module.exports = Vue.component("app", {
    template: appTemplate,
    components: hello
});

require("app/hot-reload")(module);
