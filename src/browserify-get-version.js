(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports={
  "name": "spacedesk-viewer",
  "productName": "spacedesk-viewer",
  "version": "1.0.0",
  "description": "",
  "main": "src/index.js",
  "scripts": {
    "start": "electron-forge start",
    "package": "electron-forge package",
    "make": "electron-forge make",
    "publish": "electron-forge publish",
    "lint": "echo \"No linting configured\""
  },
  "keywords": [],
  "author": "alex",
  "license": "MIT",
  "config": {
    "forge": {
      "packagerConfig": {},
      "makers": [
        {
          "name": "@electron-forge/maker-squirrel",
          "config": {
            "name": "spacedesk_viewer"
          }
        },
        {
          "name": "@electron-forge/maker-zip",
          "platforms": [
            "darwin"
          ]
        },
        {
          "name": "@electron-forge/maker-deb",
          "config": {}
        },
        {
          "name": "@electron-forge/maker-rpm",
          "config": {}
        }
      ]
    }
  },
  "dependencies": {
    "electron-reload": "^2.0.0-alpha.1",
    "electron-squirrel-startup": "^1.0.0",
    "fs": "^0.0.1-security"
  },
  "devDependencies": {
    "@electron-forge/cli": "^6.0.0-beta.63",
    "@electron-forge/maker-deb": "^6.0.0-beta.63",
    "@electron-forge/maker-rpm": "^6.0.0-beta.63",
    "@electron-forge/maker-squirrel": "^6.0.0-beta.63",
    "@electron-forge/maker-zip": "^6.0.0-beta.63",
    "babel-plugin-transform-async-to-generator": "^6.24.1",
    "babel-preset-env": "^1.7.0",
    "babel-preset-react": "^6.24.1",
    "electron": "18.2.3",
    "electron-forge": "^0.0.5",
    "electron-prebuilt-compile": "^1.3.2",
    "eslint": "^8.15.0",
    "eslint-config-airbnb": "^15",
    "eslint-plugin-import": "^2",
    "eslint-plugin-jsx-a11y": "^5",
    "eslint-plugin-react": "^7"
  }
}

},{}],2:[function(require,module,exports){
const pkgjson = require('../package.json');


const version = pkgjson.version;

const element = document.getElementById("version");
element.innerText = `Offline version ${version} • Made by AAAA • `;
},{"../package.json":1}]},{},[2]);
