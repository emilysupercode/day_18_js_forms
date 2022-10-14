function defineAge() {
    event.preventDefault();
    const birthYear = document.getElementById("birthYear").value;
    const thisYear = 2022;
    const age = thisYear - birthYear;

    console.log(age)

    document.getElementById("yourAge").innerHTML = age
}

const today = new Date();
function formatDate(date, format) {
    formatDate(today, 'dd.mm.yyyy')
}
document.getElementById("dateToday").innerHTML = today.toDateString();


