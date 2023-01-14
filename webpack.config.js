var path = require('path')
module.exports = {
    output: {
        globalObject: 'this',
        clean: true,
        filename: "main.js",
        library: {
            name: 'dp',
            type: 'var'
        }
    }
}