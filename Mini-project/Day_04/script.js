function updatedTime(){
    const now = new Date() // Current date and time
    let hours = now.getHours();
    let mins = now.getMinutes();
    let seconds = now.getSeconds();
    let session = 'AM'

    if(hours === 0){
     hours = 12; 
     session = 'AM';  
    }
    else if(hours === 12){
     session = 'PM';
    }
    else if (hours > 12){
     hours = hours - 12;
     session = 'PM'
 
    }

    hours = hours < 10 ? "0" + hours : hours;
    mins = mins < 10 ? "0" + mins : mins;
    seconds = seconds < 10 ? "0" + seconds : seconds;
     

    const timeString = `${hours} : ${mins} : ${seconds} ${session}`
    document.getElementById('clock').textContent = timeString
  document.body.style.backgroundColor = getRandomColor();
}

 function getRandomColor(){
    hex = "0123456789ABCDEF"
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += Math.floor(Math.random() * 16)
        
    }
    return color;
    
}




setInterval(updatedTime, 1000);
updatedTime();