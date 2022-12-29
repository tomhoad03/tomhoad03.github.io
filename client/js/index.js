function main() {
    let birthday = new Date("2000-11-03");
    let currentDate = new Date();

    let age = currentDate.getFullYear() - birthday.getFullYear();

    if (currentDate.getMonth() < birthday.getMonth()) {
        age--;
    } else if ((currentDate.getMonth() === birthday.getMonth()) && (currentDate.getDate() < birthday.getDate())) {
        age--;
    }

    document.getElementById("age-text").innerHTML = age;

    $('.carousel').carousel({
        interval: 3000,
        cycle: true
    });
}