
const contestInfoToString = data => {
  let type = '';
  let field = '';
  let rate = '';

  const { contestInfo } = data;
  switch (contestInfo.type) {
    case 1:
    type = '디지털 콘텐츠 경진대회';
    break;
    
    case 2:
    type = '모바일 콘텐츠 경진대회';
    break;
    
    case 3:
    type = '선린 해커톤';
    break;
  }
  switch (contestInfo.field) {
    case 1:
    field = '게임';
    break;
    
    case 2:
    field = '생활';
    break;
    
    case 3:
    field = '응용';
    break;
    
    case 4:
    field = '웹 콘텐츠';
    break;
    
    case 5:
    field = '멀티미디어';
    break;
  }
  switch (contestInfo.rate) {
    case 1:
    rate = '대상';
    break;
    
    case 2:
    rate = '금상';
    break;

    case 3:
    rate = '은상';
    break;

    case 4:
    rate = '동상';
    break;
  }

  return {
    type,
    field,
    rate,
  };
};

export default contestInfoToString;
