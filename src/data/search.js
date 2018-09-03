
import loadData from './loadData';

let Data = [];
loadData().then(data => {
  console.log('Load Data Complete');

  Data = data;
});

const checkDataIsFit = (query, data) => {
  if (query.division.length > 0) {
    if (query.division.includes(data.division) === false) return false;
  }

  if (query.projectName !== '') {
    if (data.projectName.indexOf(query.projectName) === -1) return false;
  }

  if (query.developer.length > 0) {
    let flag = false;
    data.developers.forEach(dataDeveloper => {
      query.developer.forEach(queryDeveloper => {
        if (dataDeveloper.indexOf(queryDeveloper) !== -1) flag = true;
      });
    });

    if (flag === false) return false;
  }

  if (query.contestInfo.type.length > 0) {
    if (query.contestInfo.type.includes(data.contestInfo.type) === false) return false;
  }
  if (query.contestInfo.field.length > 0) {
    if (query.contestInfo.field.includes(data.contestInfo.field) === false) return false;
  }
  if (query.contestInfo.rate.length > 0) {
    if (query.contestInfo.rate.includes(String(data.contestInfo.rate)) === false) return false;
  }

  if (query.year.length > 0) {
    if (query.year.includes(String(data.year)) === false) return false;
  }
  return true;
}

const search = (query, processFunc) => {
  return new Promise((resolve, reject) => {
    // if division is empty string, search from all data

    console.log(query);

    const result = Data.filter(item => {
      if (query.id !== null) return item.id == query.id;

      return checkDataIsFit(query, item);
    }).map(item => processFunc ? Object.assign(JSON.parse(JSON.stringify(item)), processFunc(item)) : item);

    resolve(result);
  });
};

const searchAPI = (rawQuery, processFunc) => {

  console.log(rawQuery);

  const makeProperty = (value) => value !== undefined ? [...(value.split(' '))] : [ ];

  let query = { };
  if (rawQuery.id !== undefined) query.id = rawQuery.id;
  else query = {
    id: null,
    division: makeProperty(rawQuery.division),
    projectName: rawQuery.projectName || '',
    developer: makeProperty(rawQuery.developer),
    contestInfo: {
      type: makeProperty(rawQuery.contestInfo.type),
      field: makeProperty(rawQuery.contestInfo.field),
      rate: makeProperty(rawQuery.contestInfo.rate),
    },
    year: makeProperty(rawQuery.year),
  };

  return search(query, processFunc);
};

export default searchAPI;
