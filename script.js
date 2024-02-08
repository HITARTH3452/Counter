const decrement = document.getElementById("dec");
const increment = document.getElementById("inc");
const restart = document.getElementById("res");
let numb = document.getElementById("num");
let curr = 0;

decrement.addEventListener("click" ,() => {
    curr--;
    numb.innerHTML = curr;
})

increment.addEventListener("click", () => {
    curr++;
    numb.innerText = curr;
})

restart.addEventListener("click" ,() => {
    curr = 0;
    numb.innerText = curr;
})