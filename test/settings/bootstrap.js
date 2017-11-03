const fs = require('fs');
const path = require("path");
const json = require('comment-json');

const tsNode = require("ts-node");
const tsConfigPaths = require("tsconfig-paths");

tsNode.register({
    project: "test/tsconfig.json",
});

const testDirectory = path.resolve(__dirname, '../');
const jsonConfigPath =  path.resolve(testDirectory, 'tsconfig.json')

const tsConfig = json.parse(fs.readFileSync(jsonConfigPath).toString());

tsConfigPaths.register({
    baseUrl: path.resolve(testDirectory, tsConfig.compilerOptions.baseUrl),
    paths: tsConfig.compilerOptions.paths || {}
});


// tsNode.register({
//     project: "test/tsconfig.json",
// });;

// tsConfigPaths.register({
//     baseUrl: "src",
//     paths: {}
// });
