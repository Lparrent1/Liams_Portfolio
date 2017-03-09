
var imageArray = new Array();
var switchMilliseconds = 3000;
var divID = 'background';
imageArray[0] = 'Images/background1.jpg';
imageArray[1] = 'Images/background2.jpg';
imageArray[2] = 'Images/background3.jpg';
function publishPicture(i) {
    document.getElementById(divID).style.background = 'url("'+imageArray[i]+'")';
    i++;
    if(
        i > (imageArray.length - 1)
    )

    { i = 0; }
    setTimeout('publishPicture('+i+')',switchMilliseconds);
}
publishPicture(0);