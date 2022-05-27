const mtk = 80;
const indo = 90;
const inggris = 89;
const ipa = 69;

const value = (mtk + indo + inggris + ipa) / 4;

if (mtk != null && indo != null && inggris != null && ipa != null && typeof(value) == 'number') {
  if (value >= 90 && value <= 100) {
    console.log("Rata-rata = " + value + "\n" + "Grade = A");
  } else if (value >= 80) {
    console.log("Rata-rata = " + value + "\n" + "Grade = B");
  } else if (value >= 70) {
    console.log("Rata-rata = " + value + "\n" + "Grade = C");
  } else if (value >= 60) {
    console.log("Rata-rata = " + value + "\n" + "Grade = D");
  } else if (value >= 0) {
    console.log("Rata-rata = " + value + "\n" + "Grade = E");
  }
} else {
  console.log("Nilai tidak boleh kosong");
}
