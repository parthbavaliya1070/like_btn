let like = document.querySelector('i')
let img = document.querySelector('.box')

img.addEventListener("dblclick",function(){
    
    like.style.opacity="0.7"
    like.style.scale="1"
    setTimeout(function(){
        like.style.opacity="0";
    },1000)
})