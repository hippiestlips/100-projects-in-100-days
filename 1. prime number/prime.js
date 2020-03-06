const inputNumber = document.querySelector('#input');
const result = document.querySelector('#statement');
console.log (inputNumber.value, result);

function findPrime() {
    const num = inputNumber.value;
    for (var i = 2; i<num; i++){
        if (num%i ===0) return result.innerHTML="Your number is not prime.";
    }
    if (num>1) {
        result.innerHTML="Your number is prime."
    }    
    
}