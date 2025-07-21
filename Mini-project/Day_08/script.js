const textInput = document.getElementById('text-input');
const charCount = document.getElementById('char-count');

textInput.addEventListener('input', function(){
    const inputLength = textInput.value.length
    if (inputLength <= 200) {
        charCount.textContent = inputLength
         document.body.style.backgroundColor = '#f4f4f4'  
    }
    else {
        document.body.style.backgroundColor = '#b22525ff'
        charCount.innerHTML = '<span>✅</span>'
    }

})
  
    

