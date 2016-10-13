import Vue from 'vue';
import Hello from './Hello.html';
import {remote} from 'electron'
import os from 'os'

export default Vue.component(
    "hello", {
        template: Hello,
        data: function () {
            return {
                platform: os.platform(),
                    appName: remote.app.getName(),
                msg: 'Hello World, Yo!'
            };
        }
    });
