// mathOperations.js
function tambah(a, b) {
  return a + b;
}

function kurang(a, b) {
  return a - b;
}

function kali(a, b) {
  return a * b;
}

module.exports = {
    tambah,
    kurang
}
module.exports.kali = kali;
