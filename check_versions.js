const fs = require('fs');

function getVersionFromFile(filePath, pattern) {
  if (!fs.existsSync(filePath)) {
    throw new Error(`File not found: ${filePath}`);
  }

  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(pattern);
  if (match) {
    return match[1];
  }

  throw new Error(`Version not found in file: ${filePath}`);
}

try {
  // load verdion from json file .plugin-data
  const pluginDataVersion = getVersionFromFile('.plugin-data', /"version":\s*"(\S+)"/);
  console.log('plugin-data',pluginDataVersion);

  // load verdion from json file readme.txt
  const readmeVersion = getVersionFromFile('readme.txt', /^Stable tag:\s*(\S+)/m);
  console.log('readme.txt',readmeVersion);

  // load version from php file mosne-drark-palette.php
  const phpVersion = getVersionFromFile('mosne-dark-palette.php', /Version:\s*(\S+)/);
  console.log('plugin',phpVersion);

  // load version from php file mosne-drark-palette.php as constant
  const phpConstant = getVersionFromFile('mosne-dark-palette.php', /define\(\s*'MOSNE_DARK_PALETTE_VERSION',\s*'(\S+)'\s*\);/);
  console.log('Constant',phpConstant);

  // load verdion from json file package.json
  const packageVersion = getVersionFromFile('package.json', /"version":\s*"(\S+)"/);
  console.log('package',packageVersion);

  if ( pluginDataVersion === readmeVersion && pluginDataVersion === phpVersion && pluginDataVersion === phpConstant && pluginDataVersion === packageVersion) {
    console.log(`\n Version numbers are consistent: ${readmeVersion}`);
    console.log(`\n Rememeber to update the WordPress compability version too`);
  } else {
    console.log('Version numbers are inconsistent:');
    console.log(`.pluglin-data: ${pluginDataVersion}`);
    console.log(`readme.txt: ${readmeVersion}`);
    console.log(`mosne-drark-palette.php: ${phpVersion}`);
    console.log(`Constant: ${phpConstant}`);
    console.log(`package.json: ${packageVersion}`);
    process.exit(1);
  }
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}
