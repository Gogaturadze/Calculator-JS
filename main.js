function kalk() {
  var num1 = parseFloat(document.getElementById("num1-input").value);
  var num2 = parseFloat(document.getElementById("num2-input").value);
  var arithmetika = document.getElementById("arithmetika-input").value;
  var result;

  if (isNaN(num1) || isNaN(num2)) {
    alert("გთხოვთ შეავსოთ ორივე ველი");
    return;
  }
  switch (arithmetika) {
    case "plus":
      result = num1 + num2;
      break;
    case "minus":
      result = num1 - num2;
      break;
    case "multiply":
      result = num1 * num2;
      break;
    case "divide":
      result = num1 / num2;
      break;
  }
  alert("პასუხია: " + result);
}
