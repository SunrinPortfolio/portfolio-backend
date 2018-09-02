
const dataDirPath = `${__dirname}/../../../data`;

const getProjectDataFileDirPath = data => {
  const path = `${dataDirPath}/${data.division}/${data.year}`;

  const projectName = String(data.projectName.replace(/[:%^&()!?]/gi, '').replace(/\s/gi, '_'));

  return `${path}/${projectName}`;
};

export default getProjectDataFileDirPath;
