

// type 1 디콘, 2 모콘, 3 선린톤
// subtype : 
// 디콘 - 1 응용, 2 웹콘텐츠, 3 멀티미디어
// 모콘 - 1 게임, 2 생활
// 선린톤 - 1 게임, 2 생활
// rate : 1 대상, 2 금상 ( 선린톤은 1 금상 )

import softwareDivfullData from './software';

const fullData = [
  ...softwareDivfullData.map((item, index ) => Object.assign(item, { id: Number(index + 1), division: 2 }))
  // ...anotherDivfullData.map((item, index ) => Object.assign(item, { id: Number(index + 1 + softwareDivFullData.length), division: divisionCode }))
];

const search = (division, { id = 0, projectName, developer, contestInfo }, reduceFunc) => {
  return new Promise((resolve, _) => {

    // if division is 0, search from all data
    const data = division === 0 ? fullData : fullData.filter(item => item.division == division);
    
    const result = data.filter(item => {
      if (id !== 0 && id === item.id) return true;
      else if (id !== 0) return false;

      if (projectName && String(item.projectName).indexOf(projectName) < 0) return false;
      if (developer   && item.developers.indexOf(item => String(item).indexOf(developer) >= 0) === -1) return false;

      if (contestInfo) {
        if (contestInfo.type) {
          if (contestInfo.type.main && Number(contestInfo.type.main) !== item.contestInfo.type.main) return false;
          if (contestInfo.type.sub  && Number(contestInfo.type.sub)  !== item.contestInfo.type.sub ) return false;
        }
        if (contestInfo.rate && Number(contestInfo.rate) !== item.contestInfo.rate) return false;
        if (contestInfo.year && Number(contestInfo.year) !== item.contestInfo.year) return false;
      }

      return true;
    }).map(item => reduceFunc ? reduceFunc(item) : item);
    
    resolve(result);
  });
};

const searchAPI = (division, query, reduceFunc) => search(division ? division : 0, query, reduceFunc);

export default {
  divisionDict: {
    2: 'software',
  },
  search: searchAPI,
};