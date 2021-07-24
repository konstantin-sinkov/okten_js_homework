// Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :
// a) змінює колір тексту елемнту з ід main_header на назву групи в якій ви вчитесь (mon-year)
let mainHeader = document.getElementById('main_header');
mainHeader.style.color = '#062021';

// b) робить шириниу елементу ul 400px
let ul = document.getElementsByTagName('ul')[0];
ul.style.width = '400px';

// c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList');
for (const linkListElement of linkList) {
    linkListElement.style.width = '50%';
}

// d) отримує текст який зберігається в елементі з класом listElement2
let listElement2 = document.getElementsByClassName('listElement2')[0];
let listElement2_text = listElement2.innerText;
console.log(listElement2_text);

// e) отримує всі елементи li та змінює ім колір фону на сірий
let lishkas = document.getElementsByTagName('li');

for (const lishka of lishkas) {
    lishka.style.backgroundColor = 'grey';
}

// f) отримує всі елементи 'a' та додає їм клас anchor
let anchors = document.getElementsByTagName('a');
for (const anchor of anchors) {
    anchor.classList.add('anchor');
}

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (let i = 0; i < anchors.length; i++) {
    if (anchors[i].innerText === 'link3') {
        anchors[i].style.fontSize = '40px';
    }
}

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (const anchor of anchors) {
    anchor.classList.add(anchor.innerText);
}

// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
const subHeaders = document.getElementsByClassName('sub-header');
const subHeaderColor = prompt('Enter sub-header color');

for (const subHeader of subHeaders) {
    subHeader.style.backgroundColor = subHeaderColor;
}

// j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
const subHeaderTextColor = prompt('Enter sub-header text-color');
for (let i = 0; i < subHeaders.length; i++) {
    if (subHeaders[i].innerText === 'content 2 segment') {
        subHeaders[i].style.color = subHeaderTextColor;
    }
}

// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
let content_1 = document.getElementsByClassName('content_1')[0];
const content_1text = prompt('Enter text to content 1 block');

content_1.innerHTML = `<p class="text_segment text1">${content_1text}</p>`;

// l) отримати елементи p та змінити їм padding на 20px
let peshkas = document.getElementsByTagName('p');
for (const peshka of peshkas) {
    peshka.style.padding = '20px';
}

// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
let text2Elems = document.getElementsByClassName('text2');
for (const text2Elem of text2Elems) {
    text2Elem.innerText = 'june-2021';
}
