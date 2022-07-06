const items = document.getElementById('item-container');

for (let i = 1; i <= 100; i++) {
    console.log(i);

    if (i % 15 == 0) {
        //items.innerHTML += `<div class="box">${i} fizzbuzz</div>`;
        const obj = document.createElement('div');
        obj.append(i + ' fizzbuzz');
        obj.className = 'box';
        items.append(obj);
    } else if (i % 5 == 0) {
        //items.innerHTML += `<div class="box">${i} buzz</div>`;
        const obj = document.createElement('div');
        obj.append(i + ' buzz');
        obj.className = 'box';
        items.append(obj);
    } else if (i % 3 == 0) {
        //items.innerHTML += `<div class="box">${i} fizz</div>`;
        const obj = document.createElement('div');
        obj.append(i + ' fizz');
        obj.className = 'box';
        items.append(obj);
    } else {
        //items.innerHTML += `<div class="box">${i}</div>`;
        const obj = document.createElement('div');
        obj.append(i);
        obj.className = 'box';
        items.append(obj);
    }
}