let Counter_value = 0;
const counter = document.querySelector(".counter-cont");
counter.textContent = Counter_value;

function Increase() {
    Counter_value++;
    console.log(Counter_value);
    counter.textContent = Counter_value;
}

function Reset() {
    Counter_value = 0;
    console.log(Counter_value);
    counter.textContent = Counter_value;
}

function Decrease() {
    Counter_value--;
    console.log(Counter_value);
    counter.textContent = Counter_value;
}
