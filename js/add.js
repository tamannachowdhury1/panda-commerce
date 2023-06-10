console.log('tamanna');

const heading1 = document.getElementsByClassName('h1-color');
// console.log(heading1, 'mim')
for (const h1 of heading1) {
    h1.style.color = 'blue';
}
const heading2 = document.getElementsByTagName('h2');
// console.log(heading1, 'mim')
for (const h2 of heading2) {
    h2.style.color = 'skyblue';
}

const bagpack = document.getElementById('backpack');
// console.log(bagpack);
bagpack.style.backgroundColor = 'tomato';
bagpack.style.padding = '50px';


const cards = document.getElementsByClassName('card');
// console.log(cardBorder)
for (const card of cards) {
    card.style.borderRadius = '30px';
};
// function maketheText() {
//     console.log('this is a bagpack section buy a bag please click the button');
// };

document.getElementById('maketheText').addEventListener('click',
    function () {
        console.log('this is a bagpack section buy a bag please click the button');
    });

const allwbtn = document.querySelectorAll(".btn");
for (const buttons of allwbtn) {
    buttons.addEventListener('click', allclick);
    function allclick() {
        buttons.style.visibility = 'hidden';
    }
}

document.getElementById('example').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const deletebtn = document.getElementById('btn-hide');
    // deletebtn.style.color = 'pink';
    if (text === 'email') {
        deletebtn.removeAttribute('disabled');
        // .style.backgroundColor = 'white';
        deletebtn.style.backgroundColor = 'red';
        deletebtn.style.color = 'black';
        deletebtn.style.border = 'none';
        deletebtn.style.borderRadius = '8px';
        deletebtn.style.padding = '9px 25px';
        deletebtn.style.cursor = 'pointer';
    }
    else {
        deletebtn.setAttribute('disabled', true);
        deletebtn.style.backgroundColor = 'gray';
        deletebtn.style.color = 'white';
        deletebtn.style.border = 'none';
        deletebtn.style.borderRadius = '8px';
        deletebtn.style.padding = '9px 25px';
        deletebtn.style.cursor = 'pointer';
    }
});
document.getElementById('img-change').addEventListener('mouseenter',
    function () {
        document.getElementById('img-change').src = 'images/bags/bag-2.png';
    });
function oldimg() {
    imgchange.src = 'images/bags/bag-1.png';
}


const dbclick = document.getElementById('subscribe');
dbclick.addEventListener('dblclick',
    function () {
        dbclick.style.backgroundColor = 'red';
    });