const { getInput } = require('../util/input');

async function calculateFrequency() {
  const INITAL_FREQUENCY = 0;
  const data = await getInput(__dirname);
  const frequencies = data.split('\n');
  const FINAL_FREQUENCY = frequencies.reduce((prev, cur) => {
    return (prev += Number(cur));
  }, INITAL_FREQUENCY);

  console.log(FINAL_FREQUENCY);
}

calculateFrequency();
