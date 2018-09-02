
import fs from 'fs';

import divisionDict from './../divisionDict';

const getDescription = data => {
  return new Promise((resolve, reject) => {

    // find dscription.md from 'src' directory (not 'build' directory)
    const path = __dirname + `/../../../data/${divisionDict[data.division]}/${data.contestInfo.year}/`;

    const projectName = String(data.projectName.replace(/[:!?]/gi, '').replace(/\s/gi, '_'));

    fs.readFile(path + projectName + '/description.md', 'utf8', (err, content) => {
      if (err) reject(err);
      
      resolve(content);
    });
  });
};

export default getDescription;
