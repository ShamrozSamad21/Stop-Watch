let sec=document.querySelector("#sec");
let min=document.querySelector("#min");
let mint=0;
let hours=document.querySelector("#hours");
let hour=0

let count=0;
let timer;


function startTimer(){
    timer= setInterval(function(){
        sec.innerHTML= `${count ++} `;
             if(count>60){
                 count=0;
                 min.innerHTML= `${++mint} `
             }
             if(mint>=60){
                 min=0;
                 hours.innerHTML= `${++hour} `
             }
         
 },100)
}


function stopTimer(){
    clearInterval(timer)
}

function resetTimer(){
    count=0;
    sec.innerHTML=0
    min.innerHTML=0;
    hours.innerHTML=0;
    clearInterval(timer);

}