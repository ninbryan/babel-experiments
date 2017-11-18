const babel = require('@babel/core');
const fs = require('fs');
const path = require('path');

console.log('compiling...');

babel.transformFile(
    path.join('src', 'babel.js'),
    {
      "plugins": ["@babel/plugin-proposal-pipeline-operator"]
    },
    (err, result) => {
      if (err) throw err;
      
      fs.mkdir(path.join('build'), (err) => {
        // if (err) throw err;
        
        fs.writeFile(
          path.join('build', 'babel.js'),
          result.code,
          'utf8',
          (err) => { if (err) throw err; else console.log('done!'); }
        );
      });
    }
);