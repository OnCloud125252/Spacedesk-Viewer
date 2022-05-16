const pkgjson = require('../package.json');


const version = pkgjson.version;

const element = document.getElementById("version");
element.innerText = `Offline version ${version} • Made by AAAA • `;