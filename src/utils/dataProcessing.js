export function getPopularArrestTypes(data) {
  return data.filter(item => {
    let arrestCount = parseInt(item.arrest_count, 10);
    if (arrestCount > 20) {
      return item;
    }
  });
}

export function mapRechartValues(data, name, value) {
  return data.map((item) => {
    return {name: item[name], value: parseInt(item[value], 10)};
  })
}