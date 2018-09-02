
import fs from 'fs';

const getDescription = data => {
  return new Promise((resolve, reject) => {

    // find description.md from 'data' directory
    const path = __dirname + `/../../../data/${data.division}/${data.contestInfo.year}/`;

    const projectName = String(data.projectName.replace(/[:%^&()!?]/gi, '').replace(/\s/gi, '_'));

    fs.readFile(path + projectName + '/description.md', 'utf8', (err, content) => {
      if (err) reject(err);
      
      resolve(content);
    });
  });
};

export default getDescription;
