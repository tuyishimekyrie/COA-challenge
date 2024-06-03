function transformString(input) {
  const length = input.length;
  let result = "";

  if (length % 3 === 0) {
    result = input.split("").reverse().join("");
  }

  if (length % 5 === 0) {
    result = result === "" ? input : result;
    result = result
      .split("")
      .map((char) => char.charCodeAt(0))
      .join(" ");
  }

  return result === "" ? input : result;
}

const input = "Hello World";
console.log(transformString(input)); 
