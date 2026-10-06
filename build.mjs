import fs from 'node:fs';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=path.dirname(fileURLToPath(import.meta.url));
const output=path.join(root,'dist');
fs.mkdirSync(output,{recursive:true});
for(const name of ['index.html','styles.css','app.js','scenes.js','assets']) {
  const source=path.join(root,name);
  if(!fs.existsSync(source))throw new Error(`Missing required website file: ${name}`);
  fs.cpSync(source,path.join(output,name),{recursive:true});
}
console.log('Pravah static website built successfully in dist/.');
