const heartclick = document.getElementById("heartclick");

heartclick.addEventListener("click", changtoRed);
heartclick.addEventListener("click", clear);

function changtoRed(){
    this.style.color = "red";
 
}


let setting = document.getElementById("setting");
function setting(){
    setting.classList.add("settingpage")
}
 