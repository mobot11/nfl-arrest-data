export function getPopularArrestTypes(data) {
  return data.filter(item => { 
    return parseInt(item.arrest_count) > 5}
  );
}