const fs = require("fs");
const path = require("path");
fs.readFile(path.join(__dirname, "data.tsv"), (err, data) => {
  if (err) throw err;
  const rows = data.toString().split(/\n/);
  const clean = value => value.replace(/\r/, "").split(/\t/);
  const columns = clean(rows.splice(0, 1)[0]);

  const details = rows.map(row => {
    const cols = clean(row);
    const obj = {};
    columns.forEach((col, i) => (obj[col.toLowerCase()] = cols[i]));
    obj.amount = Number(obj.amount);
    return obj;
  });
  details.sort((row1, row2) => {
    const date1 = new Date(row1.date);
    const date2 = new Date(row2.date);
    return date2.getTime() - date1.getTime();
  });
  fs.writeFile(
    path.join(__dirname, "data.json"),
    JSON.stringify(details),
    err => {
      if (err) throw err;
    }
  );
});
