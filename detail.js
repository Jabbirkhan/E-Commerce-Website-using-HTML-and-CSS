// Gallery js start
var productImage = document.getElementById('productImage');
var smallImage = document.getElementsByClassName('small-image');


smallImage[0].onclick = function(){
    productImage.src = smallImage[0].src;
    smallImage[0].classList.add('outline');
    smallImage[1].classList.remove('outline');
    smallImage[2].classList.remove('outline');
    smallImage[3].classList.remove('outline');
}
smallImage[1].onclick = function(){
    productImage.src = smallImage[1].src;
    smallImage[0].classList.remove('outline');
    smallImage[1].classList.add('outline');
    smallImage[2].classList.remove('outline');
    smallImage[3].classList.remove('outline');
}
smallImage[2].onclick = function(){
    productImage.src = smallImage[2].src;
    smallImage[0].classList.remove('outline');
    smallImage[1].classList.remove('outline');
    smallImage[2].classList.add('outline');
    smallImage[3].classList.remove('outline');
}
smallImage[3].onclick = function(){
    productImage.src = smallImage[3].src;
    smallImage[0].classList.remove('outline');
    smallImage[1].classList.remove('outline');
    smallImage[2].classList.remove('outline');
    smallImage[3].classList.add('outline');
}
// Gallery js end