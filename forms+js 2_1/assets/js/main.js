// function colorChange() {
//     event.preventDefault;
//     const styleTitle = document.getElementById("title");
//     styleTitle.classList.add("styled");
// }

function toggleColor() {
    event.preventDefault;
    const styleTitle = document.getElementById("title");
    styleTitle.classList.toggle("styled");
    document.getElementById("button").innerHTML = "Return to default color";
}