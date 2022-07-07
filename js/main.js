const items = document.getElementById('item-container');
let data = document.getElementById('data-in');
const btnGen = document.getElementById('btn-gen');
let btnAdd = document.getElementById('btn-add');
let btnDel = document.getElementById('btn-del');

btnGen.addEventListener('click', function() {
    if (data.value == '' || isNaN(data.value) || data.value % 1 != 0) {
        alert('Inserisci un numero valido.');
    } else {
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
    
        let box = document.querySelectorAll('.box');
        if (box.length >= 1) {
            btnAdd.classList.remove('btn-noShow', 'animate__bounceOutDown');
            btnAdd.classList.add('animate__animated', 'animate__bounceInDown');
            btnDel.classList.remove('btn-noShow', 'animate__bounceOutDown');
            btnDel.classList.add('animate__animated', 'animate__bounceInDown');
        }
    }
});

btnAdd.addEventListener('click', function() {
    if (data.value == '' || isNaN(data.value) || data.value % 1 != 0) {
        alert('Inserisci un numero valido.');
    } else {
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
    }
});

btnDel.addEventListener('click', function() {
    items.innerHTML = '';
    data.value = '';

    btnAdd.classList.remove('animate__bounceInDown');
    btnAdd.classList.add('animate__bounceOutDown');
    btnDel.classList.remove('animate__bounceInDown');
    btnDel.classList.add('animate__bounceOutDown');
});