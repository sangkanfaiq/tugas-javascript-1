
const printSegitiga = 5;
if (typeof(printSegitiga) == "number") {
  let hasil = "";
  for (let i = 1; i <= printSegitiga; i++) {
    for (let j = 1; j <= printSegitiga - i + 1; j++) {
      hasil += j;
    }
    hasil += "\n";
  }
  console.log(hasil);
} else {
  console.log("Data harus number");
}

