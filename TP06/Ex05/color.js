const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215);
    const randomCode = "#" + randomNumber.toString(16);
    document.body.style.backgroundColor = randomCode;
    document.getElementById("color-code").innerText = randomCode;

    navigator.clipboard.writeText(randomCode)
}
document.getElementById("generate").addEventListener(
    "click",
    getColor
)
const resetColor = () => {
    document.body.style.backgroundColor = '#fff';
    document.getElementById("color-code").innerText = '#fff';
}

document.getElementById("generate").addEventListener("click", getColor);

document.getElementById("reset").addEventListener("click", resetColor);

getColor();