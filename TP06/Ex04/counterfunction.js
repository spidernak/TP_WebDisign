let count =0;

document.getElementById("decrease").onclick = function(){
    count --;
    document.getElementById("counter").innerHTML = count;
}

document.getElementById("increase").onclick = function(){
    count ++;
    document.getElementById("counter").innerHTML = count;
}
document.getElementById("reset").onclick = function(){
    count =0;
    document.getElementById("counter").innerHTML = count;
}