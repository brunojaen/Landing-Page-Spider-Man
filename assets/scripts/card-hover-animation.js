function hardleMouseEnter() {
  this.classList.add('s-card--hovered'); 
  document.body.id = `${this.id}-hovered`;
}

function handleMouseLeave() {
  this.classList.remove('s-card--hovered');
  document.body.id = ``;
}

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName('s-card');  

  for (let index = 0; index < cardElements.length; index++) {
    const card = cardElements[index];
    card.addEventListener('mouseenter', hardleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);
  }
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false);

function addEventListenersToCards() {
  const cardElements = document.getElementsByClassName('s-card');
  console.log(cardElements)
}

document.addEventListener("DOMContentLoaded", addEventListenersToCards, false)

