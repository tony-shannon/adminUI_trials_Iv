//vue.config.js
// vue.config.js
module.exports = {
    // options...
    devServer: {
        disableHostCheck: true
    }
}

// this was needed to resolve invalid host header error on gitpod
// see https://github.com/gitpod-io/gitpod/issues/26 