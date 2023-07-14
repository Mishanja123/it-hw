const createBtn = document.querySelector('button[data-create]')
const destroyBtn = document.querySelector('button[data-destroy]')
const boxes = document.querySelector('#boxes')


createBtn.addEventListener('click',onCreateBtnClick)
destroyBtn.addEventListener('click',onDestroyBtnClick)



function onCreateBtnClick() {
  let amount = Number(document.querySelector("input").value);
  createBoxes(amount)
}

function createBoxes(amount) {
  let basicSize = 30;
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1 ) {
    let size = basicSize + i * 10 + "px";
    let div = document.createElement("div");
    div.setAttribute("style", `width: ${size}; height: ${size};`)
    div.style.backgroundColor = getRandomHexColor()
    fragment.appendChild(div);
    getRandomHexColor()
  }
  boxes.appendChild(fragment);
}

function onDestroyBtnClick() {
  boxes.innerHTML = " "
}
function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215)
.toString(16)
.padStart(6, 0)}`;
}