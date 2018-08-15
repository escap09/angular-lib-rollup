const fs = require('fs');

let copyPackage = fs.readFileSync('package.json').toString();
fs.writeFileSync('dist/package.json', copyPackage);

const packageJson = JSON.parse(fs.readFileSync('./dist/package.json').toString());
delete packageJson.devDependencies;
delete packageJson.scripts;
fs.writeFileSync('./dist/package.json', JSON.stringify(packageJson, null, 2));