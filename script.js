const bg = document.querySelector('body')

let load =0;
let int =setInterval(blurring,30);
function blurring(){
    load++;
        if(load > 99){
            clearInterval(int);
        }
    bg.style.filter= `blur(${scale(load,0,100,25,0)}px)`;
    
}

const scale = (num, in_min, in_max, out_min, out_max) =>{
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}
