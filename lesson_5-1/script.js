// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!
//
//     - Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
// -- отримує текст з параграфа з id "content"
let content = document.getElementById('content');

// -- отримує текст з блоку з id "rules"
let rulesText = document.getElementById('rules');

// -- замініть текст параграфа з id 'content' на будь-який інший
// console.log(content);
content.innerHTML = 'Авианосцы типа «Джеральд Р. Форд» (англ. Gerald R. Ford class) — серия многоцелевых атомных авианосцев США, постройка которых ведётся с 2009 года. Созданы как улучшенная версия авианосцев типа «Нимиц» и отличаются от них, при сопоставимых размерах и авиационном вооружении, сокращённым, за счёт высокой степени автоматизации, экипажем и как следствие, меньшими эксплуатационными расходами. Помимо этого, новые авианосцы отличаются внедрением ряда новых технологий и конструктивных решений, в частности, элементов стелс-технологии. Головной корабль заложен 14 ноября 2009 года';

// -- замініть текст параграфа з id 'rules' на будь-який інший
rulesText.innerText = 'При одинаковом с авианосцами типа «Нимиц» водоизмещении (около 100 000 т), «Джеральд Форд» будет иметь на 500—900 человек меньший экипаж. Это будет достигнуто за счёт уменьшения на 30 % трудоёмкости технического обслуживания устройств и систем, а также за счёт широкого внедрения автоматизации';

// -- змініть кожному елементу колір фону на червоний
let  all = document.body.getElementsByTagName('*');

for (const allElement of all) {
    allElement.style.background = 'lightcoral';
}

// -- змініть кожному елементу колір тексту на синій
for (const allElement of all) {
    allElement.style.color = 'blue';
}

// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
console.log(rulesText.classList);

// -- отримати всі елементи з класом fc_rules. визначити їм 2 події "клік", одна вивдоить текст елементу, інша довільний ьексь
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
let fc_rules = document.getElementsByClassName('fc_rules');

function logSomeText() {
    console.log('Ентропія росте!');
}

for (const fcRule of fc_rules) {
    fcRule.onclick = function () {
        let color = fcRule.style.backgroundColor;
        console.log(fcRule.innerText);

        logSomeText();
    }

    fcRule.style.color = 'red';
}


