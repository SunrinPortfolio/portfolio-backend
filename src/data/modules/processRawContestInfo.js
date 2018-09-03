
const processRawContestInfo = contestInfo => {
  let type = '';
  let field = '';

  switch (contestInfo.type) {
    case 1:
    type = 'digital-contents';
    break;
    
    case 2:
    type = 'mobile-contents';
    break;
    
    case 3:
    type = 'sunrin-thon';
    break;
  }
  switch (contestInfo.field) {
    case 1:
    field = 'game';
    break;
    
    case 2:
    field = 'life';
    break;
    
    case 3:
    field = 'application';
    break;
    
    case 4:
    field = 'web';
    break;
    
    case 5:
    field = 'multimedia';
    break;
  }

  return {
    type,
    field,
    rate: contestInfo.rate,
  };
};

export default processRawContestInfo;
