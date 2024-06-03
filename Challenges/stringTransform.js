function transformString(input) {
  let length = input.length;

  if (length % 15 === 0) {
    input = input.split("").reverse().join("");
    input = input
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  } else if (length % 3 === 0) {
    input = input.split("").reverse().join("");
  } else if (length % 5 === 0) {
    input = input
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }

  return input;
}

let input = "Hello World";
let output = transformString(input);
console.log(`Output: "${output}"`); 
