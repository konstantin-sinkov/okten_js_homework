// Зробити свій розпорядок дня.

// У вас має бути більше 10 асинхронних дій з рандомними затримками.
// Вам необхідно синхронізувати всі свої дії за допомогою промісів та async await (Код має бути написаний окремо)
// Затримка має бути НЕ в порядку зростання, а будь яка. При тому ваші дії мають бути синхронізовані.

// Напиклад.
// Прикнутись - 0.3с
// Поснідати - 1с
// Піти в душ - 0.5с
// Дочекатись автобус - 3с
// Пообідати - 1с

// І так далі

function wakeUp() {
    setTimeout(() => {
        console.log('Time to wake up!');
    }, 500);
}

function mealPrepearing(eggs) {
    setTimeout(() => {
        if (eggs > 0) {
            console.log('I fry omelet!');
        } else {
            console.log("I'll be hungry!");
        }
    }, 300);
}

function goToWork(rainy) {
    setTimeout(() => {
        if (rainy) {
            console.log('I go to work by marshrutka!');
        } else {
            console.log('I walk to work');
        }
    }, 200); 
}

function drinkCoffee() {
    setTimeout(() => {
        console.log('Time to drink coffee!');
    }, 500);
}

function doSomeWork() {
    setTimeout(() => {
        console.log('Time to do some work!');
    }, 700);
}

function drinkCoffeeAgain() {
    setTimeout(() => {
        console.log('Time to drink coffee!');
    }, 500);
}

function goHome(eggs) {
    setTimeout(() => {
        if (eggs > 0) {
            console.log('I go home!');
        } else {
            console.log("I need go to the supermarket!");
        }
    }, 400);
}

function dinnerTime() {
    setTimeout(() => {
        console.log('Time to have dinner!');
    }, 900);
}

function learning() {
    setTimeout(() => {
        console.log('Time to learn!');
    }, 800);
}

function timeToSleep() {
    setTimeout(() => {
        console.log('Time to sleep!');
    }, 1000);
}

wakeUp(); mealPrepearing(2); goToWork(true); drinkCoffee(); doSomeWork(); drinkCoffeeAgain(); goHome(0); dinnerTime(); timeToSleep();