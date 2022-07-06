const items = document.getElementById('item-container');
let data = document.getElementById('data-in');
const btnGen = document.getElementById('btn-gen');

btnGen.addEventListener('click', function() {
    for (let i = 1; i <= data.value; i++) {

        if (i % 15 == 0) {
            //items.innerHTML += `<div class="box">${i} fizzbuzz</div>`;
            const obj = document.createElement('div');
            obj.append(i + ' fizzbuzz');
            obj.className = 'box bg-red';
            items.append(obj);
        } else if (i % 5 == 0) {
            //items.innerHTML += `<div class="box">${i} buzz</div>`;
            const obj = document.createElement('div');
            obj.append(i + ' buzz');
            obj.className = 'box bg-yellow';
            items.append(obj);
        } else if (i % 3 == 0) {
            //items.innerHTML += `<div class="box">${i} fizz</div>`;
            const obj = document.createElement('div');
            obj.append(i + ' fizz');
            obj.className = 'box bg-green';
            items.append(obj);
        } else {
            //items.innerHTML += `<div class="box">${i}</div>`;
            const obj = document.createElement('div');
            obj.append(i);
            obj.className = 'box bg-blue';
            items.append(obj);
        }
    }
});