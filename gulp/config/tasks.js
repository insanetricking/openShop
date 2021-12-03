const fs = require('fs'),
    path = './gulp/tasks',
    arrayPathFills = fs.readdirSync(path).map(item => item = path + '/'+item);

    module.exports = arrayPathFills;