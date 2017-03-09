
var myImage = document.getElementById ("background");

var imageArray = ["Images/background1.jpg" , "Images/background2.jpg" , "Images/background3.jpg"];
var arrayLen = imageArray.length;
var i = 0;

function changeImage(i){
    document.getElementById("background").style.background = 'url ("'+imageArray[i]+'")';
    i++;
    if (i >= arrayLen-1) {
        i = 0;
    }
    setInterval("changeImage("+i+")",3000);
}

