
import getIdOfPortfolioData from './modules/getIdOfPortfolioData';
import getMarkdownFiles from './modules/getMarkdownFiles';
import processRawContestInfo from './modules/processRawContestInfo';

// import softwareData2016 from './../../data/software/2016.json';
import softwareData2017 from './../../data/software/2017.json';

const software = [
//  ...(Array(...softwareData2016).map(item => Object.assign(item, { year: 2016 } ))),
  ...(Array(...softwareData2017).map(item => Object.assign(item, { year: 2017 }))),
].map(item => Object.assign(item, { division: 'software' } ));

const portfolios = [
  ...software,
];

const BRIEF_LENGTH = 100;

const promises = portfolios.map(item => {
  const result = Object.assign(item, {
    id: getIdOfPortfolioData(item),
    contestInfo: processRawContestInfo(item.contestInfo),
    getOverview: getMarkdownFiles.getOverview.bind(null, item),
    getDescription: getMarkdownFiles.getDescription.bind(null, item),
  });

  return result.getOverview().then(overview => {
    const brief = `${(
      (overview.length > BRIEF_LENGTH)
        ? overview.slice(overview.indexOf(item.projectName) + item.projectName.length + 2, BRIEF_LENGTH)
        : overview
      ).replace(/[#*/\\]/g, '').replace(/\s+/g, ' ').slice(1)}...`;

    result.brief = brief;

    return result;
  });
});

const load = () => {
  return new Promise((resolve, reject) => {
    try {
      Promise.all(promises).then(data => resolve(data));
    } catch (err) { reject(err) };
  });
}

export default load;
