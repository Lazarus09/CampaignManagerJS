console.log("hello world")
let boxes;
fetch('/map.json')
    .then(res => res.json())
    .then((json) => boxes = json)

let body = document.querySelector('.realbody');

boxes.forEach((obj) => {
    const newDiv = document.createElement('div');
    newDiv.innerHTML = `<img src='${imagePath}' />${location.toString()}`
    body.appendChild(newDiv)
})