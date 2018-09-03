
import loadData from './loadData';

let Data = [];
loadData().then(data => Data = data);

const search = (query, processFunc) => {
  return new Promise((resolve, reject) => {
    // if division is empty string, search from all data

    console.log(query);
    console.log(Data);
    // const { id = 0, projectName, developer, contestInfo } = query;
    const result = Data.filter(item => {
      return true;
    }).map(item => processFunc ? Object.assign(JSON.parse(JSON.stringify(item)), processFunc(item)) : item);
    
    resolve(result);
  });
};

const searchAPI = (query, processFunc) => search(query, processFunc);

export default searchAPI;
