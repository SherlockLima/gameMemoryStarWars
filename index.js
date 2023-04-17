const container = document.querySelector('.container');

const characters = []

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
  }

  let firstCard = ''
  let secondCard = ''