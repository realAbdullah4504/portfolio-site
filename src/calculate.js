import moment from "moment";
const calculateLastStartAndEndDate = (days,key) => {
  let startDate='';

  if(key==='last_2_weeks' || key==='last_month')
  startDate = moment().subtract(days-1, 'days').startOf('day').format('YYYY-MM-DD');

  else {
    const start=moment().endOf('month').subtract(days-1,'days');
    startDate=start.startOf('month').startOf('day').format('YYYY-MM-DD');
  }
  //const diff=startDate.diff(moment(),'days')
  //console.log('start',start);

    const endDate = moment().endOf('day').format('YYYY-MM-DD');
    return { startDate, endDate };
  }
  
 export const getLastStartAndEndDate = (key) => {
    //console.log('key');
    let lastDays;
  
    switch (key) {
      case 'last_2_weeks':
        lastDays = 14;
        break;
      case 'last_month':
        lastDays = 30;
        break;
      case 'last_3_months':
        lastDays = 90;
        break;
      case 'last_6_months':
        lastDays = 180;
        break;
      case 'last_9_months':
        lastDays = 270;
        break;
      case 'last_12_months':
        lastDays = 360;
        break;
  
      default:
        lastDays = 1;
        break;
    }
  
    return calculateLastStartAndEndDate(lastDays,key);
  }
