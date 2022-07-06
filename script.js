function rot13(str) {
  let map = {};
  for (let i = 0; i < 13; i++) {
    map[String.fromCharCode(i + 78)] = String.fromCharCode(i + 65);
  }
  for (let i = 0; i < 13; i++) {
    map[String.fromCharCode(i + 65)] = String.fromCharCode(i + 78);
  }

  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (/[A-Z]/.test(str[i])) {
      result += map[str[i]];
    } else {
      result += str[i];
    }
  }
  
  return result;
}