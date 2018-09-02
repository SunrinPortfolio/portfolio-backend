
import fs from 'fs';
import getProjectDataFileDirPath from './getProjectDataFileDirPath';

const replaceAll = (str, searchStr, replaceStr) => {
  return str.split(searchStr).join(replaceStr);
}

const getOverview = data => {
  return new Promise((resolve, reject) => {

    fs.readFile(`${getProjectDataFileDirPath(data)}/overview.md`, 'utf8', (err, content) => {
      if (err) reject(err);

      resolve(content);
    });
  });
};

const getDescription = data => {
  return new Promise((resolve, reject) => {

    fs.readFile(`${getProjectDataFileDirPath(data)}/description.md`, 'utf8', (err, content) => {
      if (err) reject(err);
      
      let result = replaceAll(String(content), '(images/', `(/api/image/${data.id}/`);

      resolve(result);
    });
  });
};

export default { getOverview, getDescription };
