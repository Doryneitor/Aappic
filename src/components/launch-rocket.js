const button = document.querySelector('.btn-start');
const rocketSVG = document.querySelector('.rocket');


const getAnimation = () => {
  rocketSVG.classList.add('rocket-animation');
  console.log("hola");

  setTimeout(() => {
    rocketSVG.classList.remove('rocket-animation');
  }, 4000)
}

// button.addEventListener('click', getAnimation);