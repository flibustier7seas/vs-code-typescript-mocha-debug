const fs = require('fs');
const path = require("path");
const json = require('comment-json');

const tsConfigPaths = require("tsconfig-paths");

const testDirectory = path.resolve('test'); // from cwd
const jsonConfigPath = path.resolve(testDirectory, 'tsconfig.json')

const tsConfig = json.parse(fs.readFileSync(jsonConfigPath).toString());

const baseUrl = path.resolve(testDirectory, tsConfig.compilerOptions.outDir, "./test/", tsConfig.compilerOptions.baseUrl); // test/build/src

tsConfigPaths.register({
    baseUrl,
    paths: Object.assign({},
        (tsConfig.compilerOptions.paths || {})
    ),
});
