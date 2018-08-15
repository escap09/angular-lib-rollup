const del = require('del');

del(['dist/!(*.umd.js | *.esm.js | *.d.ts | *.js.map | *.metadata.json | lib-demo)',
    'dist/lib-demo/*.js'
    ])
    .then(paths => {
            console.log('Files going to delete:\n', paths.join('/n'));
});