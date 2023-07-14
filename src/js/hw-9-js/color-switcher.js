function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
  const startBtn = document.querySelector('button[data-start]')
  const stopBtn = document.querySelector('button[data-stop]')
  
  stopBtn.disabled = true
  startBtn.addEventListener('click', colorSwift)
  stopBtn.addEventListener('click', swiftStop)
  
  function colorSwift() {
    colorInterval = setInterval(getColor, 1000)
    stopBtn.disabled = false
    startBtn.disabled = true
  }
  function getColor() {
    document.body.style.background = getRandomHexColor()
  
  }
  function swiftStop() {
    clearInterval(colorInterval);
    stopBtn.disabled = true
    startBtn.disabled = false
   }
  
  