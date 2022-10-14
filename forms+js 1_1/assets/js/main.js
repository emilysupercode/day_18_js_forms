// function logInputValue() {
//     event.preventDefault();
//     const name = document.getElementById("fieldName").value;
//     const age = document.getElementById("fieldNumber").value;

//     const output = "Name: " + name + " Age: " + age;

//     console.log(output)
//     document.getElementById("output").innerHTML = output;
// }


function doubleMe() {
    event.preventDefault();
    const number = document.getElementById("fieldNumber2").value;

    const double = number * 2;

    console.log(double);

    document.getElementById("output").innerHTML = number + " * 2 = " + double;
}

// TO KEEP DOUBLING
// function doubles previous output AND writes new p in HTML

// function keepDoubling() {
//     event.preventDefault;
//     document.getElementById("output2").innerHTML =
// }