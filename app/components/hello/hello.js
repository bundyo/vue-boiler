const Vue = require("vue");
const helloTemplate = require("./hello.html");
const {remote} = require("electron");
const os = require("os");

require("./hello.css");

module.exports = {
    "hello": Vue.component("hello", {
        template: helloTemplate,
        props: [ "title" ],
        data() {
            return {
                platform: os.platform(),
                appName: remote.app.getName(),
                msg: "Hello World 3, Yo!",
                items: ["4", "4"]
            };
        }
    })
};

require("app/hot-reload")(module);
