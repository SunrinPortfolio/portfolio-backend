
const contestInfoToString = data => {
  let contestName = '';
  let field = '';
  let rate = '';

  const { contestInfo } = data;
  switch (contestInfo.type.main) {
    case 1:
    contestName = '디지털 콘텐츠 경진대회';
    switch (contestInfo.type.sub) {
      case 1: field = '응용'; break;
      case 2: field = '웹 콘텐츠'; break;
      case 3: field = '멀티미디어'; break;
    }
    switch (contestInfo.rate) {
      case 1: rate = '대상'; break;
      case 2: rate = '금상'; break;
    }
    break;
    
    case 2:
    contestName = '모바일 콘텐츠 경진대회';
    switch (contestInfo.type.sub) {
      case 1: field = '게임'; break;
      case 2: field = '생활'; break;
    }
    switch (contestInfo.rate) {
      case 1: rate = '대상'; break;
      case 2: rate = '금상'; break;
    }
    break;
    
    case 3:
    contestName = '선린 해커톤';
    switch (contestInfo.type.sub) {
      case 1: field = '게임'; break;
      case 2: field = '생활'; break;
    }
    switch (contestInfo.rate) {
      case 1: rate = '금상'; break;
    }
    break;
  }

  return {
    year: contestInfo.year,
    contest: contestName,
    field,
    rate,
  };
};

export default contestInfoToString;
