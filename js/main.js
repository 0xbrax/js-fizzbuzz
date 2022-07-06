const items = document.getElementById('item-container');
let data = document.getElementById('data-in');
const btnGen = document.getElementById('btn-gen');
const btnAdd = document.getElementById('btn-add');
const btnDel = document.getElementById('btn-del');

btnGen.addEventListener('click', function() {
    items.innerHTML = '';

    for (let i = 1; i <= data.value; i++) {
        let obj = document.createElement('div');
        if (i % 15 == 0) {
            obj.append(i + ' fizzbuzz');
            obj.className = 'box bg-red';
        } else if (i % 5 == 0) {
            obj.append(i + ' buzz');
            obj.className = 'box bg-yellow';
        } else if (i % 3 == 0) {
            obj.append(i + ' fizz');
            obj.className = 'box bg-green';
        } else {
            obj.append(i);
            obj.className = 'box bg-blue';
        }
        items.append(obj);
    }

    data.value = '';
});

btnAdd.addEventListener('click', function() {
    let box = document.querySelectorAll('.box');

    for (let i = 1 + (box.length); i <= (box.length + parseInt(data.value)); i++) {
        if (i % 15 == 0) {
            items.innerHTML += `<div class="box bg-red">${i} fizzbuzz</div>`;
        } else if (i % 5 == 0) {
            items.innerHTML += `<div class="box bg-yellow">${i} buzz</div>`;
        } else if (i % 3 == 0) {
            items.innerHTML += `<div class="box bg-green">${i} fizz</div>`;
        } else {
            items.innerHTML += `<div class="box bg-blue">${(i)}</div>`;
        }
    }
});

btnDel.addEventListener('click', function() {
    items.innerHTML = '';
    data.value = '';
});