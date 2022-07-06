count = 0
document.getElementById('count').innerText = count
let increase = document.getElementById('Increase')
let reset = document.getElementById('reset')
let Deslerese = document.getElementById('DESLERASE')
increase.addEventListener('click' , function(){
    count ++;
    document.getElementById('count').innerText = count
})
reset.addEventListener('click' , function(){
    count = 0
   document.getElementById('count').innerText = count
})
Deslerese.addEventListener('click' , function(){
    count --;
    
   document.getElementById('count').innerText = count
})

   
