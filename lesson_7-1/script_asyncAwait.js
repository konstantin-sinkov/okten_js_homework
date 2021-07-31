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
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Time to wake up!');
            let eggs = 5;
            // return ;
            resolve(eggs);
        }, 500);})

}

function mealPrepearing(eggs) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (eggs < 0) {
                reject(console.log("I'll be hungry!"));
            } else {
                console.log('I fry omelet!');
                resolve(true);
            }
        }, 300);
    })
}

function goToWork(rainy) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (rainy) {
                for (let i = 0; i < Math.round(Math.random()*10); i++) {
                    let time = i;
                    console.log(`I go to work by marshrutka ${time} minutes`);
                }
                resolve('I am at work');
            } else {
                reject(console.log("I'm late"));
            }
        }, 3200);}
    )


}

function drinkCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Time to drink coffee!');
            resolve();
        }, 500)});
}

function doSomeWork() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Time to do some work!');
            let money = (Math.round(Math.random()*1000));
            console.log((`I earn ${money} UAH`));
            resolve(money);
            // resolve (`I earn ${money} UAH`);
            // return money;
        }, 700)});
}


function drinkCoffeeAgain(money) {
    console.log('*****************');
    console.log(money);
    console.log('*****************');
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Time to drink coffee again!');
            resolve(money);
        }, 450)});
}

function goHome(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money > 400) {
                console.log('I go to pub with friends');
                resolve("It was a good day");
            } else {
                reject("It was a bad day");
            }
        }, 1000)});
}

function dinnerTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Time to have dinner!');
            resolve();
        }, 1900)})

}

function timeToLearn() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Time to learn!');
            resolve();
        }, 1700)})
}

function timeToSleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Time to sleep!');
            resolve();
        }, 2800)})
}

// wakeUp(); mealPrepearing(2); goToWork(true); drinkCoffee(); doSomeWork(); drinkCoffeeAgain(); goHome(0); dinnerTime(); timeToSleep();

const timeTable = async () => {
    try {
        console.log('1st I');
        const wakingUp = await wakeUp();
        console.log('2nd I');
        const mealPrepear = await mealPrepearing(wakingUp);
        console.log('3rd I');
        const goingTowork = await goToWork(true);
        console.log('4th I');
        const coffeeDrinking = await drinkCoffee();
        console.log('5th I');
        const doingWork = await doSomeWork();
        console.log('6th I');
        const coffeeDrinking2 = await drinkCoffeeAgain(doingWork);
        console.log('7th I');
        const goingHome = await goHome(coffeeDrinking2);
        console.log('8th I');
        const eatingDinner = await dinnerTime();
        console.log('9th I');
        const learning = await timeToLearn();
        console.log('10th I');
        const sleeping = await timeToSleep();
    } catch (e) {
        console.log(e);
    }
}

timeTable();





