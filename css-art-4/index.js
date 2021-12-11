
var check = false




let bas = () => { 
    if(check == false) {
document.getElementById("ball").style.left = "90px";
document.getElementById("body").style.background = "black";
document.getElementById("p-txt").style.color = "white"
check = true;
console.log(check)
    }
    else if(check == true) {
        document.getElementById("ball").style.left = "0px";
        document.getElementById("p-txt").style.color = "black"
        document.getElementById("body").style.background = "white";
        check = false;
    }
}

//