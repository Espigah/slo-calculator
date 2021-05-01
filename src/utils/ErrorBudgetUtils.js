export const calc = ({ slo, requestsPerSecond }) => {
  let erroBudget = 100 - slo;
  return ((erroBudget / 100) * requestsPerSecond).toFixed(2);
};

//https://stackoverflow.com/questions/44855276/how-do-i-split-a-number-into-chunks-of-max-100-in-javascript
export const chunk = ({ erros, burnRateInDays }) => {
  let data = [];
  let count = 0;
  for (let i = 0; i < erros; i++) {
    const index = i % burnRateInDays;
    if (index == 0) {
      count++;
    }
    data[index] = count;
  }
  return data;
};
