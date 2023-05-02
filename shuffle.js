let cardsArray = [1,2,3,4,5,6,7,8,9];
let cardContainer = document.getElementById('card-container');

// Using Fisher-Yates algorithm to shuffle the elements in the array
const getRandomArray = (arr) => {
  for (let i = arr.length -1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1));
        let k = arr[i];
        arr[i] = arr[j];
        arr[j] = k;
      }
  return arr;
}

// To render cards 
const renderCard = (cardsArray) => {
  let index = 0
  let cardItem;
  cardContainer.innerHTML = ''
  while (index < cardsArray.length) {
    cardItem = document.createElement("li");
    cardItem.innerHTML = cardsArray[index]
    cardItem.setAttribute('data-item-card', cardsArray[index])
    cardContainer.appendChild(cardItem)
    ++index;
  }
}    

// To shuffle the cards
const shuffleCards = () => {
  const cardsArrayRandom = getRandomArray(cardsArray);
  renderCard(cardsArrayRandom)
}

// To sort the cards
const sortCards = () => {
// In our case we can also use original array  (i.e. cardsArray) as it is already sorted.
  cardsArray = cardsArray.sort((a, b) =>  a - b );
  renderCard(cardsArray); 
}