module.exports = (module) => {
    if (module.hot) {
        module.hot.accept();

        const api = require('vue-hot-reload-api');
        const Vue = require('vue');

        api.install(Vue);

        if (!module.hot.data) {
            Object.keys(module.exports).forEach((name) => {
                api.createRecord(module.id, module.exports[name]);
            });
        } else {
            Object.keys(module.exports).forEach((name) => {
                api.rerender(module.id, module.exports[name]);
            });
        }
    }
};
