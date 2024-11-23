const express = require('express');
const cors = require('cors');
const app = express();
const port = 9090;

app.use(express.json());
app.use(cors());

let users = [];

function createUser() {
    let char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let newChar = [];

    for (let i = 0; i < 5; i++) {
        let b = Math.floor(Math.random() * 25);
        // console.log(char[b]);
        newChar.push(char[b]);
    }
    // console.log(newChar.join(''));
    return newChar.join('');
}

for (let index = 0; index <= 100; index++) {
    let newName = createUser();

    while (users.some(user => users.name === newName)) {
        newName = createUser();
    }
    users.push({ id: index, name: newName })
}
console.log(users);

app.get('/', (req, res) => {
    res.json(users)
})

app.listen(port, () => {
    console.log(`${port} running`);
})