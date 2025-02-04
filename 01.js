let div = document.createElement('div');
div.classList.add('circle')
document.body.appendChild(div);

let circle = document.querySelector("div");

circle.addEventListener("click", function() {
  circle.remove();
})

const backgroundColor = () => "#" + Math.floor(Math.random() * Math.pow(256, 3)).toString(16).padStart(6, '0');

circle.addEventListener("mouseover", () => {
  circle.style.backgroundColor = backgroundColor();
})

