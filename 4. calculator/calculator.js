function Calculate(){
    let expression = document.getElementById("stringCalculus");
    let result = eval(expression.value);
    document.getElementById("resultNumber").innerHTML= result;
}