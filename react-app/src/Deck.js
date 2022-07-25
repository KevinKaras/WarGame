const FreshDeck = [
    {
        "Suit": "Diamond",
        "ID": 2,
        "Value": 2
    },
    {
        "Suit": "Diamond",
        "ID": 3,
        "Value": 3
    },
    {
        "Suit": "Diamond",
        "ID": 4,
        "Value": 4
    },
    {
        "Suit": "Diamond",
        "ID": 5,
        "Value": 5
    },
    {
        "Suit": "Diamond",
        "ID": 6,
        "Value": 6
    },
    {
        "Suit": "Diamond",
        "ID": 7,
        "Value": 7
    },
    {
        "Suit": "Diamond",
        "ID": 8,
        "Value": 8
    },
    {
        "Suit": "Diamond",
        "ID": 9,
        "Value": 9
    },
    {
        "Suit": "Diamond",
        "ID": 10,
        "Value": 10
    },
    {
        "Suit": "Diamond",
        "ID": "J",
        "Value": 11
    },
    {
        "Suit": "Diamond",
        "ID": "Q",
        "Value": 12
    },
    {
        "Suit": "Diamond",
        "ID": "K",
        "Value": 13
    },
    {
        "Suit": "Diamond",
        "ID": "A",
        "Value": 14
    },
    {
        "Suit": "Hearts",
        "ID": 2,
        "Value": 2
    },
    {
        "Suit": "Hearts",
        "ID": 3,
        "Value": 3
    },
    {
        "Suit": "Hearts",
        "ID": 4,
        "Value": 4
    },
    {
        "Suit": "Hearts",
        "ID": 5,
        "Value": 5
    },
    {
        "Suit": "Hearts",
        "ID": 6,
        "Value": 6
    },
    {
        "Suit": "Hearts",
        "ID": 7,
        "Value": 7
    },
    {
        "Suit": "Hearts",
        "ID": 8,
        "Value": 8
    },
    {
        "Suit": "Hearts",
        "ID": 9,
        "Value": 9
    },
    {
        "Suit": "Hearts",
        "ID": 10,
        "Value": 10
    },
    {
        "Suit": "Hearts",
        "ID": "J",
        "Value": 11
    },
    {
        "Suit": "Hearts",
        "ID": "Q",
        "Value": 12
    },
    {
        "Suit": "Hearts",
        "ID": "K",
        "Value": 13
    },
    {
        "Suit": "Hearts",
        "ID": "A",
        "Value": 14
    },
    {
        "Suit": "Clubs",
        "ID": 2,
        "Value": 2
    },
    {
        "Suit": "Clubs",
        "ID": 3,
        "Value": 3
    },
    {
        "Suit": "Clubs",
        "ID": 4,
        "Value": 4
    },
    {
        "Suit": "Clubs",
        "ID": 5,
        "Value": 5
    },
    {
        "Suit": "Clubs",
        "ID": 6,
        "Value": 6
    },
    {
        "Suit": "Clubs",
        "ID": 7,
        "Value": 7
    },
    {
        "Suit": "Clubs",
        "ID": 8,
        "Value": 8
    },
    {
        "Suit": "Clubs",
        "ID": 9,
        "Value": 9
    },
    {
        "Suit": "Clubs",
        "ID": 10,
        "Value": 10
    },
    {
        "Suit": "Clubs",
        "ID": "J",
        "Value": 11
    },
    {
        "Suit": "Clubs",
        "ID": "Q",
        "Value": 12
    },
    {
        "Suit": "Clubs",
        "ID": "K",
        "Value": 13
    },
    {
        "Suit": "Clubs",
        "ID": "A",
        "Value": 14
    },
    {
        "Suit": "Spades",
        "ID": 2,
        "Value": 2
    },
    {
        "Suit": "Spades",
        "ID": 3,
        "Value": 3
    },
    {
        "Suit": "Spades",
        "ID": 4,
        "Value": 4
    },
    {
        "Suit": "Spades",
        "ID": 5,
        "Value": 5
    },
    {
        "Suit": "Spades",
        "ID": 6,
        "Value": 6
    },
    {
        "Suit": "Spades",
        "ID": 7,
        "Value": 7
    },
    {
        "Suit": "Spades",
        "ID": 8,
        "Value": 8
    },
    {
        "Suit": "Spades",
        "ID": 9,
        "Value": 9
    },
    {
        "Suit": "Spades",
        "ID": 10,
        "Value": 10
    },
    {
        "Suit": "Spades",
        "ID": "J",
        "Value": 11
    },
    {
        "Suit": "Spades",
        "ID": "Q",
        "Value": 12
    },
    {
        "Suit": "Spades",
        "ID": "K",
        "Value": 13
    },
    {
        "Suit": "Spades",
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


