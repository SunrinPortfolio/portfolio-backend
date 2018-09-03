
const getDataFileDirName = data => (String(data.projectName.replace(/[:%^&()!?]/gi, '').replace(/\s/gi, '_')));

export default getDataFileDirName;
