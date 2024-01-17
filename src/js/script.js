/* eslint-disable linebreak-style */

const animateSpin = () => {
  const roleta2 = document.querySelector('#roleta2');
  if (roleta2) {
    roleta2.classList.remove('spinner');
    roleta2.classList.add('wheel__spinner_animated-1');

    setTimeout(() => {
      roleta2.classList.remove('wheel__spinner_animated-1');
      const formElem = document.querySelector('form');
      const pageContent = document.querySelector('#page-content');
      if (formElem) formElem.classList.remove('hide-me');
      if (pageContent) pageContent.classList.add('page-content');
    }, 4000);
  }
};

const animateSteps = (number) => {
  const stepLoaded = document.querySelector(`.step-loaded.step${number}`);
  const barLoaded = document.querySelector(`.bar-loaded.step${number}`);
  if (stepLoaded) stepLoaded.classList.add('loaded');
  setTimeout(() => {
    if (barLoaded) barLoaded.classList.add('loaded');
  }, 700);
};

const addSpinAnimation = (element) => {
  element.addEventListener('click', () => {
    animateSpin();
    animateSteps(1);
    // Add redirection after 4 seconds
    setTimeout(() => {
      window.location.href = 'https://www.wandinhafalcao.com.br/';
    }, 4000);
  });
};

// Add event listener to all elements with the class .runSpin
document.querySelectorAll('.runSpin').forEach(addSpinAnimation);
