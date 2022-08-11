const cardsArray = [
    {
        name: 'fries',
        img: 'img/frenchFries.png',
    },
    {
        name: 'cookies',
        img: 'img/cookies.png',
    },
    {
        name: 'bacon',
        img: 'img/bacon.png',
    },
    {
        name: 'friedEgg',
        img: 'img/friedEgg.png',
    }
]

function shuffle(arr) {
    arr.sort(() => 0.5 - Math.random())
}

const gridDisplay = document.querySelector('#grid');

function createBoard() {
    for (let index = 0; index < 2; index++) {
        shuffle(cardsArray)
        for (let i = 0; i < cardsArray.length; i++) {
            const card = document.createElement('img')

            card.setAttribute('src', 'img/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)

            gridDisplay.appendChild(card)
        }
    }
}

createBoard()

// empty array of the selected cards
const cardsChosen = []

function flipCard() {
    console.log(cardsArray)
    let cardId = this.getAttribute('data-id')
    // console.log('you clicked', cardId)
    // console.log(cardsArray[cardId].name)
    cardsChosen.push(cardsArray[cardId].name)
    // console.log(cardsChosen);

    this.setAttribute('src', cardsArray[cardId].img)
}