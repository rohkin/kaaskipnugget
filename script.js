let interval;

window.onload = () => {
  document
    .getElementById("kipnugget")
    .addEventListener("click", increaseCounter);
};

const increaseCounter = (e) => {
  let counter = parseInt(document.getElementById("counter").innerText);
  counter++;

  if (counter > 9001) {
    var audio = new Audio("/over9000.swf.mp3");
    audio.play();
    clearInterval(interval);
  }

  document.getElementById("counter").innerText = counter;
};
