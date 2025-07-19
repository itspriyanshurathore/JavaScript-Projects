const increase = document.querySelector('#increase');
const decrease = document.querySelector('#decrease');
const reset    = document.querySelector('#reset');
const displayCount = document.querySelector('#count');
let count = 0;

// INCREASE BUTTONS NUMBER
increase.addEventListener('click', function(){
    if(true){
     count++;
    }
    document.body.style.backgroundColor = 'green'
    displayCount.textContent = count;
})
// DECREASE BUTTONS NUMBERS
decrease.addEventListener('click', function(){
    if(count > 0){
    count--;
    }
    else {
   count = 0 ;
   document.body.style.backgroundColor = 'red'
    }
    displayCount.textContent = count;
})
// RESET BUTTON NUMBER
reset.addEventListener('click', function(){
    if (count!== 0){
        count = 0;
    }
    document.body.style.backgroundColor = '#212121'
    displayCount.textContent = count;
})

