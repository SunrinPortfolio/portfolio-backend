

// type 1 디콘, 2 모콘, 3 선린톤
// subtype : 
// 디콘 - 1 응용, 2 웹콘텐츠, 3 멀티미디어
// 모콘 - 1 게임, 2 생활
// 선린톤 - 1 게임, 2 생활
// rate : 1 대상, 2 금상, 3 은상 ( 선린톤은 1 금상 )

import getMarkdownFiles from './modules/getMarkdownFiles';
import contestInfoToString from './modules/contestInfoToString';

import data from './data';

const Data = data.map((item, index) => Object.assign(item,
  {
    id: index + 1,
    getOverview: getMarkdownFiles.getOverview.bind(null, item),
    getDescription: getMarkdownFiles.getDescription.bind(null, item),
    getContestInfoByString: contestInfoToString.bind(null, item),
  }
));

const search = (division, { id = 0, projectName, developer, contestInfo }, processFunc) => {
  return new Promise((resolve, reject) => {
    // if division is empty string, search from all data

    const result = Data.filter(item => {
      if (division !== null && division !== '' && item.division.indexOf(division) !== -1) return true;
      else if (division !==null && division !== '') return false;

      if (id !== 0 && id === item.id) return true;
      else if (id !== 0) return false;

      if (projectName && String(item.projectName).indexOf(projectName) < 0) return false;
      if (developer   && item.developers.find(iter => String(iter).indexOf(developer) !== -1)) return true;
      else if (developer) return false;

      try {
        if (contestInfo) {
          if (contestInfo.type) {
            if (contestInfo.type.main && Number(contestInfo.type.main) !== item.contestInfo.type.main) return false;
            if (contestInfo.type.sub  && Number(contestInfo.type.sub)  !== item.contestInfo.type.sub ) return false;
          }
          if (contestInfo.rate && Number(contestInfo.rate) !== item.contestInfo.rate) return false;
          if (contestInfo.year && Number(contestInfo.year) !== item.year) return false;
        }
      } catch(err) { reject(err); }

      return true;
    }).map(item => processFunc ? Object.assign(JSON.parse(JSON.stringify(item)), processFunc(item)) : item);
    
    resolve(result);
  });
};

const searchAPI = (division, query, processFunc) => search(division, query, processFunc);

export default searchAPI;
