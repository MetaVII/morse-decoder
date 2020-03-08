const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0"
};

function decode(expr) {
  // write your solution here
  const encodedLetters = expr.match(/.{1,10}/g);
  // console.log("encodedLetters:", encodedLetters);

  let decoded = "";
  encodedLetters.forEach(element => {
    // element = element.replace(/\*{1,10}/g, );
    element = element
      // .replace(/(\*+)/g, " ")
      .replace(/10/g, ".")
      .replace(/11/g, "-")
      .replace(/0/g, "");
    // console.log("element: ", element);
    element === "**********"
      ? (decoded += " ")
      : (decoded += MORSE_TABLE[element]);
  });
  return decoded;
}

module.exports = {
  decode
};
