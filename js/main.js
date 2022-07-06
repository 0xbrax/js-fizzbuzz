const items = document.getElementById('item-container');

for (let i = 1; i <= 100; i++) {
    console.log(i);

    if (i % 15 == 0) {
        items.innerHTML += `<div class="box">${i} fizzbuzz</div>`;
    } else if (i % 5 == 0) {
        items.innerHTML += `<div class="box">${i} buzz</div>`;
    } else if (i % 3 == 0) {
        items.innerHTML += `<div class="box">${i} fizz</div>`;
    } else {
        items.innerHTML += `<div class="box">${i}</div>`;
    }
}