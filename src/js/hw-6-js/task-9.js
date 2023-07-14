function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
  const changeBtn = document.querySelector('.change-color')
  const color = document.querySelector('.color')
  
  changeBtn.addEventListener('click', getColor)
  
  function getColor() {
    document.body.style.background = getRandomHexColor()
    color.textContent = document.body.style.background
  }