const { getInput } = require('../util/input');

async function calculateFrequency() {
  const data = await getInput(__dirname);
  const frequencies = data.split('\n');
  const used = new Set();
  let last = 0,
    needDup = true;

  while (needDup) {
    for (const num of frequencies) {
      last += Number(num);

      if (used.has(last)) {
        needDup = false;
        break;
      } else {
        used.add(last);
      }
    }
  }

  console.log(last);
}

calculateFrequency();
