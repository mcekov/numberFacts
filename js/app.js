let fact = document.querySelector('#fact');
let factText = document.querySelector('#factText');
let numberInput = document.querySelector('#numberInput');

numberInput.addEventListener('input', getFactFetch);

function getFactFetch() {
    let num = numberInput.value;

    fetch(`http://numbersapi.com/${num}`)
        .then(res => res.text())
        .then(data => {
            if (num !== '') {
                fact.style.display = 'block';
                factText.innerText = data;
            }
        }).catch(err => console.log(err));
}

// function getFactAjax() {
//     let num = numberInput.value;

//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', `http://numbersapi.com/${num}`);

//     xhr.onload = function () {
//       if (this.status === 200 && num !== '') {
//           fact.style.display = 'block';
//           factText.innerText = this.responseText;
//       }
//     };

//     xhr.send();
// }