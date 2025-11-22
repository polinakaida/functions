//1
const isDay = false;
let color = null;
let background = null;

if (isDay) {
    color = "black";
    background = "white";
} else {
    color = "white";
    background = "black";
}

if (isDay) {
    document.write(`<p style="color:${color}; background-color:${background}">Світла тема</p>`);
} else {
    document.write(`<p style="color:${color}; background-color:${background}">Темна тема</p>`);
}
    
//2
const isOnline = false;

if (!isOnline) {
    console.log("Ваше повідомлення буде відправлено при під'єднанні до мережі Інтернет");
}

//3
const sum = Number(prompt("Введіть суму покупки:"));

if (sum > 800) {
    console.log("Сума з урахуванням знижки 5%: ", sum - (sum * 5 / 100));
} else if (sum > 500) {
    console.log("Сума з урахуванням знижки 3%: ", sum - (sum * 3 / 100));
} else {
    console.log("Сума без урахування знижки: ", sum); 
}


//1
const dayNumber = Number(prompt("Введіть номер дня тижня (1-7):"));

switch (dayNumber) {
    case 1:
        console.log("понеділок");
        break;
    case 2:
        console.log("вівторок");
        break;
    case 3:
        console.log("середа");
        break;
    case 4:
        console.log("четвер");
        break;
    case 5:
        console.log("пʼятниця");
        break;
    case 6:
        console.log("субота");
        break;
    case 7:
        console.log("неділя");
        break;
    default:
        console.log("дня з таким номером не існує");
}

//2
const day = Number(prompt("Введіть число місяця (1-31):"));

switch (true) {
    case (day >= 1 && day <= 10):
        console.log("Перша декада");
        break;

    case (day >= 11 && day <= 20):
        console.log("Друга декада");
        break;

    case (day >= 21 && day <= 31):
        console.log("Третя декада");
        break;
    default:
        console.log("Некоректне число");
}