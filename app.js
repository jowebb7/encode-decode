//import stuff

let toggle = 0;
let input = "";

//btoa();
//atob();

function encodeBinary(str) {
  let res = "";
  res = str
    .split("")
    .map((char) => {
      return char.charCodeAt(0).toString(2);
    })
    .join(" ");
  console.log(res);
}

function decodeBinary(str) {
  var binString = "";

  str.split(" ").map(function (bin) {
    binString += String.fromCharCode(parseInt(bin, 2));
  });
  console.log(binString);
}

function decodeHex(hex) {
  var hex = hex.toString(); //force conversion
  var str = "";
  for (var i = 0; i < hex.length; i += 2)
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}

function encodeHex(str) {
  var hex = "";
  for (var i = 0; i < str.length; i++) {
    hex += "" + str.charCodeAt(i).toString(16);
  }
  return hex;
}
function process(input);
if (toggle === 0) {
//base64 div content === bota(input);
//Hex div content === decodeHex(input);
//Binary div content ==== decodeBinary(input);
} else {
  //base64 div content === atob(input);
  //Hex div content === encodeHex(input);
  //Binary div content ==== encodeBinary(input);
}

//event listener on encode button toggle = 0, change color on encode button
//event listener on decode button toggle = 1, change color on decode button
//event listern on submit button = div contents = input string, fire process function