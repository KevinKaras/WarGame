const FreshDeck = [
    {
        "Suit": "♢",
        "ID": 2,
        "Value": 2
    },
    {
        "Suit": "♢",
        "ID": 3,
        "Value": 3
    },
    {
        "Suit": "♢",
        "ID": 4,
        "Value": 4
    },
    {
        "Suit": "♢",
        "ID": 5,
        "Value": 5
    },
    {
        "Suit": "♢",
        "ID": 6,
        "Value": 6
    },
    {
        "Suit": "♢",
        "ID": 7,
        "Value": 7
    },
    {
        "Suit": "♢",
        "ID": 8,
        "Value": 8
    },
    {
        "Suit": "♢",
        "ID": 9,
        "Value": 9
    },
    {
        "Suit": "♢",
        "ID": 10,
        "Value": 10
    },
    {
        "Suit": "♢",
        "ID": "J",
        "Value": 11
    },
    {
        "Suit": "♢",
        "ID": "Q",
        "Value": 12
    },
    {
        "Suit": "♢",
        "ID": "K",
        "Value": 13
    },
    {
        "Suit": "♢",
        "ID": "A",
        "Value": 14
    },
    {
        "Suit": "♡",
        "ID": 2,
        "Value": 2
    },
    {
        "Suit": "♡",
        "ID": 3,
        "Value": 3
    },
    {
        "Suit": "♡",
        "ID": 4,
        "Value": 4
    },
    {
        "Suit": "♡",
        "ID": 5,
        "Value": 5
    },
    {
        "Suit": "♡",
        "ID": 6,
        "Value": 6
    },
    {
        "Suit": "♡",
        "ID": 7,
        "Value": 7
    },
    {
        "Suit": "♡",
        "ID": 8,
        "Value": 8
    },
    {
        "Suit": "♡",
        "ID": 9,
        "Value": 9
    },
    {
        "Suit": "♡",
        "ID": 10,
        "Value": 10
    },
    {
        "Suit": "♡",
        "ID": "J",
        "Value": 11
    },
    {
        "Suit": "♡",
        "ID": "Q",
        "Value": 12
    },
    {
        "Suit": "♡",
        "ID": "K",
        "Value": 13
    },
    {
        "Suit": "♡",
        "ID": "A",
        "Value": 14
    },
    {
        "Suit": "♧",
        "ID": 2,
        "Value": 2
    },
    {
        "Suit": "♧",
        "ID": 3,
        "Value": 3
    },
    {
        "Suit": "♧",
        "ID": 4,
        "Value": 4
    },
    {
        "Suit": "♧",
        "ID": 5,
        "Value": 5
    },
    {
        "Suit": "♧",
        "ID": 6,
        "Value": 6
    },
    {
        "Suit": "♧",
        "ID": 7,
        "Value": 7
    },
    {
        "Suit": "♧",
        "ID": 8,
        "Value": 8
    },
    {
        "Suit": "♧",
        "ID": 9,
        "Value": 9
    },
    {
        "Suit": "♧",
        "ID": 10,
        "Value": 10
    },
    {
        "Suit": "♧",
        "ID": "J",
        "Value": 11
    },
    {
        "Suit": "♧",
        "ID": "Q",
        "Value": 12
    },
    {
        "Suit": "♧",
        "ID": "K",
        "Value": 13
    },
    {
        "Suit": "♧",
        "ID": "A",
        "Value": 14
    },
    {
        "Suit": "♤",
        "ID": 2,
        "Value": 2
    },
    {
        "Suit": "♤",
        "ID": 3,
        "Value": 3
    },
    {
        "Suit": "♤",
        "ID": 4,
        "Value": 4
    },
    {
        "Suit": "♤",
        "ID": 5,
        "Value": 5
    },
    {
        "Suit": "♤",
        "ID": 6,
        "Value": 6
    },
    {
        "Suit": "♤",
        "ID": 7,
        "Value": 7
    },
    {
        "Suit": "♤",
        "ID": 8,
        "Value": 8
    },
    {
        "Suit": "♤",
        "ID": 9,
        "Value": 9
    },
    {
        "Suit": "♤",
        "ID": 10,
        "Value": 10
    },
    {
        "Suit": "♤",
        "ID": "J",
        "Value": 11
    },
    {
        "Suit": "♤",
        "ID": "Q",
        "Value": 12
    },
    {
        "Suit": "♤",
        "ID": "K",
        "Value": 13
    },
    {
        "Suit": "♤",
        "ID": "A",
        "Value": 14
    }
]

function ShuffleDeckFunc(deck){
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = deck[i];
        deck[i] = deck[j];
        deck[j] = temp;
    }
    return deck
}

let ShuffledDeck = ShuffleDeckFunc(FreshDeck)

module.exports = {
    ShuffledDeck
} 


