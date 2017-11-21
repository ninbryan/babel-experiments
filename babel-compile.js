const babel = require('@babel/core');
const fs = require('fs');
const path = require('path');

console.log('compiling...');

const filename = process.argv[2];

babel.transformFile(
    path.join('src', filename + '.js'),
    {
      "plugins": ["@babel/plugin-proposal-pipeline-operator"]
    },
    (err, result) => {
      if (err) throw err;
      
      fs.mkdir(path.join('build'), (err) => {
        // if (err) throw err;
        
        fs.writeFile(
          path.join('build',  filename + '.babel.js'),
          result.code,
          'utf8',
          (err) => { if (err) throw err; else console.log('done!'); }
        );
      });
    }
);