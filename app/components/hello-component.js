const Vue = require("vue"),
    Hello = require("./Hello.html"),
    {remote} = require("electron"),
    os = require("os");

module.exports = {
    "hello": Vue.component("hello", {
        template: Hello,
        data() {
            return {
                platform: os.platform(),
                appName: remote.app.getName(),
                msg: "Hello World 2, Yo!",
                items: ["", ""]
            };
        }
    })
};

require("app/hot-reload")(module);
