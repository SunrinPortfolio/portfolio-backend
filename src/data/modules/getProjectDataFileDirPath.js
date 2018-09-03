
import getDataFileDirName from './getDataFileDirName';

const dataDirPath = `${__dirname}/../../../data`;

const getProjectDataFileDirPath = data => {
  const path = `${dataDirPath}/${data.division}/${data.year}`;

  return `${path}/${getDataFileDirName(data)}`;
};

export default getProjectDataFileDirPath;
