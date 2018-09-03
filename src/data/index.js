

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

const search = (query, processFunc) => {
  return new Promise((resolve, reject) => {
    // if division is empty string, search from all data

    console.log(query);
    const { id = 0, projectName, developer, contestInfo } = query;
    const result = Data.filter(item => {
      
    }).map(item => processFunc ? Object.assign(JSON.parse(JSON.stringify(item)), processFunc(item)) : item);
    
    resolve(result);
  });
};

const searchAPI = (query, processFunc) => search(query, processFunc);

export default searchAPI;
