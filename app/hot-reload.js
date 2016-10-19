module.exports = (module) => {
    if (module.hot) {
        module.hot.accept();

        const api = require('vue-hot-reload-api');
        const Vue = require('vue');

        api.install(Vue);

        const exports = module.exports instanceof Vue.component.constructor ? { "1": module.exports } : module.exports;

        if (!module.hot.data) {
            Object.keys(exports).forEach((name) => {
                api.createRecord(module.id, exports[name].options);
            });
        } else {
            const compiler = require('vue-template-compiler');

            Object.keys(exports).forEach((name) => {
                const options = exports[name].options;

                api.rerender(module.id, Object.assign({}, options, compiler.compileToFunctions(options.template, options)));
            });
        }
    }
};
