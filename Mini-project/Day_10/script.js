const submit = document.querySelector('button');
const dob =  document.querySelector('#dob');
const calAge = document.querySelector('#result')

submit.addEventListener('click', function(e){
    e.preventDefault();     // preventDefault() submit hone se pehle rok leta hian
    // Agar dob ki value leni ho toh  === new Date(dob.value);
    let dateOfBirth = new Date(dob.value);
    let today = new Date();
    // Years
    let yourAge = today.getFullYear() - dateOfBirth.getFullYear();
    // Months
    let month = today.getMonth() - dateOfBirth.getMonth();
    // Days
    let days = today.getDay() - dateOfBirth.getDay();
    if (month < 0 || (month === 0 && days < 0)){
        yourAge--;
    }

    calAge.textContent = `You are  ${yourAge} years`
})




