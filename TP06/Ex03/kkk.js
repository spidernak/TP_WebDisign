function updateColor() {
    const red = document.getElementById("red").value;
    const green = document.getElementById("green").value;
    const blue = document.getElementById("blue").value;
  
    document.getElementById("color-preview").style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";
  }
  
  document.getElementById("red").addEventListener("input", updateColor);
  document.getElementById("green").addEventListener("input", updateColor);
  document.getElementById("blue").addEventListener("input", updateColor);
  