var formBirth = document.getElementById('birth');

var inputBirth = formBirth.querySelectorAll('input');
var labelElementBirth = formBirth.querySelector('.input__error');

inputBirth.forEach( input => input.addEventListener('input', checkbirth));

var today = new Date();
var currentDay = today.getDate();
var currentMonth = today.getMonth() + 1;
var currentYear = today.getFullYear(); 

function checkbirth(){
    var day = parseInt(inputBirth[0].value);
    var month = parseInt(inputBirth[1].value);
    var year = parseInt(inputBirth[2].value);
  
    var isValid = true;
  
    if (year > currentYear || (year === currentYear && month > currentMonth) || (year === currentYear && month === currentMonth && day > currentDay)) {
        isValid = false;
    } else {
        switch (month) {
            case 2:
                if (day >  28 || day < 1) {
                    isValid = false;
                }
            break;
            case 4: 
            case 6: 
            case 9: 
            case 11:
                if (day > 30 || day < 1) {
                    isValid = false;
                }
            break;
            case 1: 
            case 3: 
            case 5: 
            case 7:
            case 8:    
            case 10:   
            case 12:   
                if (day > 31 || day < 1) {
                    isValid = false;
                }
            break;
            default:
                isValid = false;
            break;        
      }
    }
  
    if (!isValid) {
      labelElementBirth.classList.add('active');
    } else {
      labelElementBirth.classList.remove('active');
    }
}