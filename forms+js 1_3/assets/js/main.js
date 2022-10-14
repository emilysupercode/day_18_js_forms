function ageDifference() {
    event.preventDefault;
    const old = document.getElementById("ageGeoffrey").value;
    const young = document.getElementById("ageEmily").value;
    const difference = old - young;

    console.log(difference);

    document.getElementById("ageDifference").innerHTML = difference;
}