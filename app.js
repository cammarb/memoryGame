cardsArray = [
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

const gridDisplay = document.querySelector('#grid');

function createBoard() {
    for (let i = 0; i < cardsArray.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'img/bacon.png')
        card.setAttribute('data-id', i)
        gridDisplay.appendChild(card)

    }
}

createBoard()