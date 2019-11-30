const createTable = (maxVal, startRow) => {
  let table = buildRow(maxVal, startRow);
  return startRow < maxVal ? table + createTable(maxVal, startRow + 1) : table;
};

const buildRow = (leng, intgr) => {
  let row = '';
  for (let i = 0; i < leng; i++) {
    i < leng - 1 ? row += ((i + 1) * intgr) + " " : row += ((i + 1) * intgr) + "\n";
  };
  return row;
};

//Tests
console.log(createTable(1, 1));
console.log(createTable(5, 1));
console.log(createTable(10, 1));
console.log(createTable(7, 1));