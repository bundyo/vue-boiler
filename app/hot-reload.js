module.exports = (module) => {
    if (module.hot) {
        module.hot.accept();

        const api = require('vue-hot-reload-api');
        const Vue = require('vue');

        api.install(Vue);

        if (!module.hot.data) {
            Object.keys(module.exports).forEach((name) => {
                api.createRecord(module.id, module.exports[name].options);
            });
        } else {
            let compiler = require('vue-template-compiler');

            Object.keys(module.exports).forEach((name) => {
                let options = module.exports[name].options;

                api.rerender(module.id, compiler.compileToFunctions(options.template, options));
            });
        }
    }
};
