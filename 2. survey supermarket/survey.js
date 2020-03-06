function stepTwo() {
    let container = document.getElementById('form');

    let products = container.querySelectorAll('.choice1:checked');
    let milk = container.querySelector('#milk');
    let experience = container.querySelector('#experience');
    let price = container.querySelector('.choice:checked');
    let phone = container.querySelector('#phone');
    let name = container.querySelector('#name');
    let address = container.querySelector('#address');
    let gender = container.querySelector('#gender');

    document.getElementById('form').style.display = 'none';
    let stepTwoContainer = document.querySelector('.stepTwo');

    let resultString = '';
    resultString += '<br/><br/>';
    resultString += '1. What type of products did you purchase? <br/>';
    for (let i = 0; i < products.length; i++) {
        resultString += ' ' + products[i].value + ',';   
    }
    resultString += '<br/><br/>';

    resultString += '2. How many liters of milk did you buy? <br/>';
    resultString += milk.value;
    console.log(milk.value);
 
    resultString += '<br/><br/>';
    resultString += '3. Share a few words about your experience with our cashier:<br/>';
    resultString += experience.value;

    resultString += '<br/><br/>';
    resultString +='4. How much did you pay last time you visited our supermarket?<br/>';
    resultString += price.value;

    resultString += '<br/><br/>';
    resultString += '5. What is your phone number?<br/>';
    resultString += phone.value;

    resultString += '<br/><br/>';
    resultString += '6. What is your name?<br/>';
    resultString += name.value;

    resultString += '<br/><br/>';
    resultString += '7. What`s your address?<br/>'
    resultString += address.value;

    resultString += '<br/><br/>';
    resultString += '8. What is your gender?<br/>'
    resultString += gender.value;

    resultString += '<br/><br/>';
    resultString += 'Thank you for your time!'

    stepTwoContainer.innerHTML = resultString;

}




/*1. What type of products did you purchase?
    food, white goods, books.

    2. How many liters of milk did you buy?
    5 liters

    3. Share a few words about your experience with our cashier:
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 

    4. How much did you pay last time you visited our supermarket?
    < 500 kr

    5. What is your phone number?
    0733014899

    6. What is your name?
    Paula

    7. What is your address?
    Home

    8. What is your gender?
    Female 

    Thank you for your time!  */