
import softwareData2016 from './../../data/software/2017.json';
import softwareData2017 from './../../data/software/2017.json';

const software = [
//  ...(Array(...softwareData2016).map(item => Object.assign(item, { year: 2016 } ))),
  ...(Array(...softwareData2017).map(item => Object.assign(item, { year: 2017 }))),
].map(item => Object.assign(item, { division: 'software' } ));

export default [
  ...software,
];