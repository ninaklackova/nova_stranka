function display(val) {
  const resultCalcField = document.getElementById('resultCalc');
  const lastChar = resultCalcField.value[resultCalcField.value.length - 1];
  // obmedzenie vkladania viac operatorov
  if (['+', '-', '*', '/'].includes(lastChar) && ['+', '*', '/'].includes(val)) {
      return;
  }
  if (['+','-'].includes(lastChar) && ['-'].includes(val)) {
    return;
}
  resultCalcField.value += val;
  return val;
}

function solve(){
  let x = document.getElementById('resultCalc').value;
  try {
    let y = eval(x);
    document.getElementById('resultCalc').value = y;
    return y;
  } catch (e) {
    console.error("Error: " + e.message);
    document.getElementById('resultCalc').value = "Error";
  }
}

document.addEventListener('keydown', function (event) {
  if (event.key === "Enter" || event.key === "=") {
      solve();
  } else if (event.key === "Escape") {
      clearScreen();
  } else if (!isNaN(event.key) || event.key === "." || event.key === "/" || event.key === "*" || event.key === "-" || event.key === "+") {
      display(event.key);
  }
});


function clearScreen(){
  document.getElementById('resultCalc').value = ''
}

document.getElementById("calculator").addEventListener("click", function() {
  document.getElementById('resultCalc').value = ''
  document.getElementById("popupCalculator").style.display = "block";
});

document.addEventListener("click", function(e) {
  if (!document.getElementById("popupCalculator").contains(e.target) && e.target !== document.getElementById("calculator")) {
    document.getElementById("popupCalculator").style.display = "none";
  }
});
