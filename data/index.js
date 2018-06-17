

// type 1 디콘, 2 모콘, 3 선린톤
// subtype : 
// 디콘 - 1 응용, 2 웹콘텐츠, 3 멀티미디어
// 모콘 - 1 게임, 2 생활
// 선린톤 - 1 게임, 2 생활
// rate : 1 대상, 2 금상 ( 선린톤은 1 금상 )

import softwareDivfullData from './software';

const fullData = { 2: softwareDivfullData };

const search = (Data, projectName, developer, contestInfo) => {
  const data = Data.filter((item) => {
    if (String(item.projectName).indexOf(projectName) < 0) return false;
    if ((item.developers.filter((item) => String(item).indexOf(developer) >= 0)).length === 0) return false;

    if (contestInfo.type.main !== undefined && contestInfo.type.main != item.contestInfo.type.main) return false;
    if (contestInfo.type.sub !== undefined && contestInfo.type.sub != item.contestInfo.type.sub) return false;
    
    if (contestInfo.rate !== undefined && contestInfo.rate != item.contestInfo.rate) return false;
    if (contestInfo.year !== undefined && contestInfo.year != item.contestInfo.year) return false;

    return true;
  });
  return data;
}

const searchAPI = (division, projectName, developer, contestInfo) => {
  let result;
  switch (division) {
    case 2:
      result = search(softwareDivfullData, projectName, developer, contestInfo);
      break;
    default:
      result = search(softwareDivfullData, projectName, developer, contestInfo);
      break;
  }
  return result;
};

const DATA = {
  data: fullData,
  search: searchAPI,
};

export default DATA;