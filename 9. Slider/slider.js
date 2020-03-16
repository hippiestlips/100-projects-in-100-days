const imageContainer = document.querySelector('.imageContainer');
const slideGroup = document.querySelectorAll('.slideImage');

const prevBtn = document.querySelector('.left');
const nextBtn = document.querySelector('.right');
// console.log(prevBtn, nextBtn);

let counter = 0;
const size = slideGroup[0].clientWidth;
const containerSize = imageContainer.clientWidth;
const viewPortSize = Math.floor(containerSize / size);
console.log (viewPortSize);

imageContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';

// button listeners
nextBtn.addEventListener('click', ()=> {
    console.log(counter, slideGroup.length);
    if (counter >= slideGroup.length - viewPortSize) return;
    imageContainer.style.transition = "transform 0.4s ease-in-out";
    counter++;
    imageContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', ()=> {
    if (counter === 0) return;
    imageContainer.style.transition = "transform 0.4s ease-in-out";
    counter--;
    imageContainer.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

// imageContainer.addEventListener('transitioned', () =>{
//     if (slideGroup[counter].id ==='lastClone') {
//         imageContainer.style.transition = 'none';
//         counter = slideGroup.lenght - 2;
//         imageContainer.style.transition = 'translateX(' + (-size * counter) + 'px)';
//     }
//     if (slideGroup[counter].id ==='firstClone') {
//         imageContainer.style.transition = 'none';
//         counter = slideGroup.lenght - counter;
//         imageContainer.style.transition = 'translateX(' + (-size * counter) + 'px)';
//     }
// });

